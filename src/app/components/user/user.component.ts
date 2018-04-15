import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/index';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private service: ApiService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.service.httpGet("users")
      .subscribe(res => {
        alert(res);
      })
  }
}
