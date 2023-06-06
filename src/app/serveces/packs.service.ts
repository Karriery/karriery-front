import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PacksService {

  constructor(private http: HttpClient) {}
  ROOT_URL = "http://localhost:3636/pack/";

  getAll() {
    return this.http.get(this.ROOT_URL + "");
  }
  getById(id :any) {
    return this.http.get(this.ROOT_URL + id);
  }
}