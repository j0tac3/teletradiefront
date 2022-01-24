import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm! : FormGroup;

  constructor( private fb : FormBuilder,
                private router : Router ) { }

  ngOnInit(): void {
    this.onInitForm();
  }

  onInitForm() : void {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onBack(){
    this.router.navigateByUrl('/home');
  }

}
