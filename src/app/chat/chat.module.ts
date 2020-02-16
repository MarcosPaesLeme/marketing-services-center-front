import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoutingModule } from './chat-routing.module';
import { FormsModule } from '@angular/forms';
import { ChatComponent } from './chat.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialCustomModule } from '../modules/material-custom.module';

@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialCustomModule
  ]
})
export class ChatModule { }