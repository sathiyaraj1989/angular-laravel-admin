import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/index';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor(private service: ApiService) { }

  userInfo : any;
  ngOnInit() {
    this.getUserInfo(); 
  }

  getUserInfo() {
    this.service.httpGet("user")
      .subscribe(res => {
        if(res.length != 0) {
          this.userInfo =  res;
        }        
      })
  }

}
