import { Injectable } from '@angular/core';
import { UserModel } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setLocalStorage( user : UserModel ) {
    const jsonData = JSON.stringify(user);
    window.localStorage.setItem('user', jsonData);
  }

  loadLocalStorage() : UserModel {
    let valueStorage = String(window.localStorage.getItem('user') !== null ? window.localStorage.getItem('user') : '');
    let user = JSON.parse(valueStorage);
    return user;
  }
  
  clearLocalStorage(){
    window.localStorage.clear();
  }
}
