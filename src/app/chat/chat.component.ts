import { Component, OnInit } from '@angular/core';
import { ChatServiceService } from '../shared/services/chatService/chat-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public messages = []

  public newMsg: string;
  constructor(
    private chatService: ChatServiceService,
    private router: Router,
  ) { }


  ngOnInit() {
    localStorage.setItem('conversation', '');
    this.getFirstMessage();
  }

  getFirstMessage() {
      let param = {
        userId : JSON.parse(localStorage.getItem('user'))._id
      }
      
      this.chatService.getMessage(param).subscribe(
        res => {
          localStorage.setItem('sessionId', res.sessionId)
          this.messages.push(res.watsonMessage.text);
        },
        err => console.log()
      )
  }

  sendMessage() {
    let param = {
      message:  this.newMsg.trim(),
      sessionId: localStorage.getItem('sessionId'),
      userId : JSON.parse(localStorage.getItem('user'))._id
    }

    this.messages.push(this.newMsg)

    this.newMsg = '';
    this.chatService.sendMessage(param).subscribe( res =>  {
      this.messages.push(res.text);
      if(res.text === 'Obrigado por utilizar o nosso sistema. Até logo') this.logout();
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
