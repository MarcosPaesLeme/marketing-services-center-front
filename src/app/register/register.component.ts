import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/userService/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

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

  registerUser(){
    this.userService.registerUser(this.form.value)
      .subscribe(
        res => this.router.navigate(['/login']),
        err => console.log(err)
      ) 
  }
  showInvalidFeedback(fieldPath: string) {
    const control = this.form.get(fieldPath);
    return !control.valid && control.touched;
  }

}
