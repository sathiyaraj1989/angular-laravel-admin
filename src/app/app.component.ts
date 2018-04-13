import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router) {}

  isLoggedIn: boolean = false;

  ngOnInit() {
    
    if(this.isLoggedIn == true) {      
      this.router.navigate(['login'])
    } else {      
      this.router.navigate(['/'])
    }
  }
}
