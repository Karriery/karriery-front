import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
const AUTH_API = "http://localhost:3636/auth/user/"
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})


export class AuthService {
  constructor(private http: HttpClient, private router : Router) { }
   user : any 
  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      email,
      password
    }, httpOptions);
  }

  register(email: string, password: string): Observable<any> {
    var m = {email , password}
    return this.http.post(AUTH_API + 'signup', m, httpOptions);
  }

  verify() {
   return  this.http.post(AUTH_API + 'verify', {
      token: localStorage.getItem("token")
    }, httpOptions)
  }



  updateUser(data : any , id : any): Observable<any> {
    const headers = { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
    //@ts-ignore
    return this.http.put("http://localhost:3636/user/" + id, data , headers);
  }
}
