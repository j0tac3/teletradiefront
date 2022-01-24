import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/Models/user.model';
import { StorageService } from 'src/app/Service/storage.service';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private profileType! : string;
  public registerForm! : FormGroup;

  constructor(  private _activatedRout : ActivatedRoute,
                private fb : FormBuilder,
                private router : Router,
                private userService : UserService,
                private storageService : StorageService) { }

  ngOnInit(): void {
    this._activatedRout.paramMap.subscribe(params => {
      this.profileType = params.get('profileType') !== null ? String(params.get('profileType')) : '1';
    });
    this.onInitForm();
  }

  onInitForm() : void {
    this.registerForm = this.fb.group({
      name : ['', Validators.required],
      email : ['', Validators.required],
      mobile : ['', Validators.required],
      password : ['', Validators.required],
      confirmPassword : ['', Validators.required]
    })
  }

  onSignUp(){
    if ( this.registerForm.invalid ) {
      console.log('Formulario no válido');
      return;
    } else {
      let user = new UserModel();
      user.name = this.registerForm.get('name')?.value;
      user.email = this.registerForm.get('email')?.value;
      user.mobile = this.registerForm.get('mobile')?.value;
      user.password = this.registerForm.get('password')?.value;
      user.perfil_id = this.profileType !== null ? Number(this.profileType) : 1;
      this.userService.createUser(user)
      .subscribe( userCreated => {
        console.log('Creando usuario ...');
        let user_id = userCreated.id;
        if (user_id){
          this.router.navigateByUrl('/helloPage');
          this.storageService.setLocalStorage(userCreated);
        }
      });
    }
  }

  onBack(){
    this.router.navigateByUrl('/selectprofile');
  }
  
}
