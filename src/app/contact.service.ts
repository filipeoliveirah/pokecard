import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  API_URL: string = "https://api.pokemontcg.io/v2/";
  constructor(private http: HttpClient) { }
  getContacts(){    
   return this.http.get(this.API_URL + 'cards')
  }
  getContact(pokeName){
   return this.http.get(`${this.API_URL + 'cards'}/${pokeName}`) 
  }
}
