import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService} from './services/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(private router: Router, private service: AuthService) {}

  get isLoggedIn() {
    return this.service.isLoggedIn();
  }

  logout() {
    this.service.logout();
    this.router.navigate(['login']);
  }

  routerNavigation() {}
  
  ngOnInit() {
    if(this.isLoggedIn == true) {      
      this.router.navigate(['dashboard'])
    } else {      
      this.router.navigate(['login'])
    }
  }
}
