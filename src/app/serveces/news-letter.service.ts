import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsLetterService {
  constructor(private http: HttpClient) {}
  ROOT_URL = "https://dev.karriery.com/msg/";

  create(email : string) {
    return this.http.post(this.ROOT_URL + "create" , {email : email , name : "guest"});
  }
}
