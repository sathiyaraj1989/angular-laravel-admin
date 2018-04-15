import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/index';
import { LocalDataSource } from 'ng2-smart-table';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  usersSettings: any = {
    columns: {
      name: {
        title: 'User Name',
      },
      email: {
        title: 'Email'
      },
      created_at: {
        title : 'Created'
      },
      updated_at: {
        title: 'Updated'
      }
    },
    actions :false

  };

  successMessage: boolean = false;
  errorMessage: boolean = false;
  statusMessage: any;
  usersSource : LocalDataSource;
  userControl:boolean = false;
  usersItem: any;
  userForm: FormGroup;

  constructor(private service: ApiService, private fb: FormBuilder) {
    this.userForm = fb.group({
      'Name':[null, Validators.required],
      'Email': [null, Validators.required],
      'Password': [null, Validators.required]
    });
  }  

  ngOnInit() {
    this.getUsers();
  }

  clearaddForm() {
    this.userControl = true;
    this.usersItem = '';

  }
  userSetCtrl(value: any) { 
    let userDetails: any = {};
    userDetails = value;
    
    if(userDetails.UserID) {
      
    } else {
      this.service.httpPost("users", userDetails)
      .subscribe(res => {
        if(res.status == "success") {
          this.successMessage = true;
          this.statusMessage = res.Message;
          this.userControl = false;
          setTimeout(() => { this.successMessage = false; this.statusMessage = '' }, 4000); 
        }
      })
    }
  }

  getUsers() {
    this.service.httpGet("users")
      .subscribe(res => {
        this.usersSource = new LocalDataSource(res);
      })
  }
}
