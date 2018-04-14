import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { routes } from './app.router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingModule} from 'ngx-loading';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { LoginComponent, DashboardComponent } from './components/index';
import { AuthService } from './services/index';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
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
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
