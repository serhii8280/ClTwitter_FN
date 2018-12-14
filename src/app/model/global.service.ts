import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public newMessage:any = Array();
  constructor() { 
    // this.newMessage = ;
  }

  appendNewMessage(data) {
    // console.log(data);
    
    this.newMessage.unshift(data);
    // console.log(this.newMessage);
    
  }

  getNewMessage() {
    return this.newMessage;
  }
}
