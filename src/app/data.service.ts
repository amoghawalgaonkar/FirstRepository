import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  cars=['ford','tata','maruti'];

  myData(){
    return 'This is my data !';
  }
}
