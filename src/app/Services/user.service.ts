import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  pressId: number;
  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get('https://panorbit.in/api/users.json');
  }

  getId(id: number){
    this.pressId = id;
  }

  getTest(){
    return this.pressId;
  }
}
