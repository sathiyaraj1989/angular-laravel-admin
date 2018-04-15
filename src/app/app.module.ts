import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { routes } from './app.router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingModule} from 'ngx-loading';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { LoginComponent, DashboardComponent, UserComponent } from './components/index';
import { AuthService, ApiService } from './services/index';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routes,
    FormsModule,
    ReactiveFormsModule,
    LoadingModule,
    HttpModule
    
  ],
  providers: [AuthService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
