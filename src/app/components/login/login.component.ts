import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService} from '../../services/index';
import { Subscriber } from 'rxjs/Subscriber';
import { LoadingModule } from 'ngx-loading';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router, private service: AuthService) { }

  public loading = false;
  warningMessage: boolean = false;
  errorMessage: boolean = false;
  isLoggedIn: boolean = false;
  formData;
  email;
  password;

  ngOnInit() {
    this.formData = new FormGroup({
      email : new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])),
      password  : new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ]))
    })
    
  }

  loginSubmit(data) {
    if(data.email == '' || data.password == '') {
      this.warningMessage = true;
      setTimeout(() => { this.warningMessage = false }, 4000);
    } else {
      this.loading = true;
      this.service.loginSubmit(data.email, data.password)
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
