import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(private router: Router) {}

  isLoggedIn: boolean = false;

  //routerNavigation() {}
  
  ngOnInit() {
    
    if(this.isLoggedIn == true) {      
      this.router.navigate([''])
    } else {      
      this.router.navigate(['login'])
    }
  }
}
