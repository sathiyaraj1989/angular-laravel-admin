import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router) { }

  public loading = false;
  credentials = { Email:'', Password: ''};
  warningMessage: boolean = false;
  errorMessage: boolean = false;

  isLoggedIn: boolean = false;

  ngOnInit() {
    
  }

  loginSubmit() {
    if(this.credentials.Email == '' || this.credentials.Password == '') {
      this.warningMessage = true;
      setTimeout(() => { this.warningMessage = false }, 4000);
    } else {
      this.loading = true;
    }
  }

}
