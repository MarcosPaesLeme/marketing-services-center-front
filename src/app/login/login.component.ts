import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/userService/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) { }

  form: FormGroup;
  hide: any;

  ngOnInit() {
    this.formInit();
  }

  formInit(){
    this.form = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])],
    })
  }

  checkLogin(){
    this.userService.login(this.form.value)
      .subscribe(
        res => {
          if (res && res.user) {
            localStorage.setItem('user', JSON.stringify(res.user));
            this.router.navigate(['/chat']);
          }
        },
        err => console.log(err)
      )    
  }

  showInvalidFeedback(fieldPath: string) {
    const control = this.form.get(fieldPath);
    return !control.valid && control.touched;
  }


  register() {
    this.router.navigate(['/register']);
  }

}
