import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://127.0.0.1:8000/api/user';

  constructor( private http : HttpClient ) { }

  getUsers() : Observable<UserModel[]>{
    return this.http.get<UserModel[]>(this.url);
  }
  getUser( id : string ) : Observable<UserModel[]>{
    return this.http.get<UserModel[]>(`this.url/${id}`);
  }

  createUser( user : UserModel ) : Observable<any>{
    const headers = { 'content-type' : 'application/json' };
    const body = JSON.stringify(user);
    return this.http.post<UserModel>(this.url, body, {'headers' : headers });
  }

  updateUser( user : UserModel ) : Observable<any>{
    const headers = { 'content-type' : 'application/json' };
    const body = JSON.stringify(user);
    return this.http.put<UserModel>(this.url, body, {'headers' : headers });
  }

  private createHeaderToSent() : HttpHeaders{
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    return headers;
  }
  /* private createFormDataToSent( user : UserModel ) : FormData{
    let postData = new FormData();
    postData.append("name", user.name);
    postData.append("email", user.email);
    postData.append("password", user.password);
    postData.append("description", user.description);
    postData.append("image_id", user.image_id);
    postData.append("profile_id", user.perfil_id);
    //const body = JSON.stringify(postData);
    return postData;
  } */
}
