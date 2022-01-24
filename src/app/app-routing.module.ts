import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloPageComponent } from './pages/hello-page/hello-page.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SelectProfileComponent } from './pages/select-profile/select-profile.component';

const APP_ROUTES: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register/:profileType', component: RegisterComponent },
  {path: 'selectprofile', component: SelectProfileComponent },
  {path: 'helloPage', component: HelloPageComponent },
  {path: '', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { relativeLinkResolution: 'legacy' });
