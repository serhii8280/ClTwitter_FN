import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { GlobalService } from '../model/global.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private socket: SocketIOClient.Socket;
  constructor(private globalService: GlobalService) { 
    this.socket = io('http://localhost:3001');
    this.init = this.init.bind(this);
  }

  init() {
    let me = this;
    this.socket.on('new-post', (data) => {
      var audio = new Audio();
      audio.src = "assets/audio/bell.mp3";
      audio.load();
      audio.play();
      me.globalService.appendNewMessage(data);
      // console.log(self.globalService.newMessage);
    })
  }

  sendPost(params) {
    this.socket.emit('get-new-post', { data: params });
  }
}
