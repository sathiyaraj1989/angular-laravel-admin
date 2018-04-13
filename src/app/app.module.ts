import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { routes } from './app.router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingModule} from 'ngx-loading';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/index';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routes,
    FormsModule,
    ReactiveFormsModule,
    LoadingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
