import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { BloggingService } from 'src/app/service/blogging.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  invalidLogin: boolean = false;
  error: string;
  token: string;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private bloggingService: BloggingService) { }

  ngOnInit() {
    this.token = window.localStorage.getItem('token');
    if(this.token)
      this.router.navigate(['blogging-list']);
      
    window.localStorage.removeItem('token');
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    const loginPayload = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    }
    this.bloggingService.login(loginPayload).subscribe(data => {
      if (data) {
        window.localStorage.setItem('token', data.token);
        this.router.navigate(['blogging-list']);
      } else {
        this.invalidLogin = true;
        alert(data.message);
      }
    },
    err => {
      this.error = err.error.error;
        if(err.status == '401') {
          this.router.navigate(['login']);
        }
    });
  }
}
