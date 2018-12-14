import { Component, OnInit } from '@angular/core';
import { ClTwitterService } from '../services/cl-twitter.service';
import { PostService } from '../services/post.service';
import { GlobalService } from '../model/global.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  postStr: string;
  newMsg: any;
  readFlag: boolean = false;
  constructor( private cltwitterService: ClTwitterService,
    public postService: PostService,
    public globalService: GlobalService
  ) { }

  ngOnInit() {
    this.postStr = "";
  }

  get unreadMsgNumber() {
    return  this.globalService.newMessage.filter(item => item.data.flag == false).length;
  }

  get readMsg() {
    return  this.globalService.newMessage.filter(item => item.data.flag == true);
  }

  post() {
    // this.cltwitterService.post(JSON.stringify({ str: this.postStr }))
    //   .subscribe(response => {
    //     console.log(response);
    //   }, error => {
    //     console.log(error);
    //   });
    this.postService.sendPost({ msg: this.postStr, flag: false });
    this.postStr = "";
  }

  unreadMsg() {
    this.globalService.newMessage.forEach(item => {
      item.data.flag = true;
    });
  }

}
