import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService} from '../../services/index';
import { Subscriber } from 'rxjs/Subscriber';
import { LoadingModule } from 'ngx-loading';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router, private service: AuthService) { }

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
      this.service.loginSubmit(this.credentials.Email, this.credentials.Password)
      .subscribe(
        data => {
          if(data.access_token) {
            this.service.loggedIn = true;
            this.router.navigate(['dashboard']);
          } else {
            this.errorMessage = true;
            setTimeout(() => { this.warningMessage = false }, 4000);
          }
          this.loading = false;
        }
      )
      this.loading = false;
    }
  }

}
