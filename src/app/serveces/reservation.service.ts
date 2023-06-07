import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  ROOT_URL = "http://localhost:3636/reservation/";

  constructor(private http: HttpClient) { }
  createReservation(data : any) {
    console.log("dzadzazddza" , data)
    return this.http.post(this.ROOT_URL + "create" , data);
  }
  getReservationById(reservationid: string) {
    return this.http.get(this.ROOT_URL + "findone/" + reservationid);
  }
  getMyRequests(id: string) {
    return this.http.get(this.ROOT_URL + "user/" + id);
  }
  uploadImg(img: any) {
    return this.http.post(
      "http://localhost:3636/api/upload",
      img
    );
  }
  updateStatus(id: string, data: any) {
    return this.http.put(this.ROOT_URL + "status/" + id, data);
  }
  updatePaimet(id: string, data: any) {
    return this.http.put(this.ROOT_URL + "confirmP/" + id, data);
  }
  konnect(id : any, reservation : any) {
    return this.http.post(
      "http://localhost:3636/api/konnect/" + id,
      reservation
    );
  }
  location() {
    return this.http.get("http://localhost:3636/localisation/");
  }
}
