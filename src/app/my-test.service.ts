import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyTestService {

  info: string = "";
  user: string = "";
  constructor() { }

  setInfo(i:string,u:string)
  {
    this.info = i;
    this.user = u;
    console.log("Setting organization"+this.info);
  }

  getInfo() {
    console.log("sending organization"+this.info);
    return this.info;
  }

  getUser(){
    console.log("sending User "+this.user);
    return this.user;
  }
}
