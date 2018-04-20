import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { routes } from './app.router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingModule} from 'ngx-loading';
import { HttpModule } from '@angular/http'
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { AppComponent } from './app.component';
import { LoginComponent, DashboardComponent, UserComponent, UserprofileComponent } from './components/index';
import { AuthService, ApiService } from './services/index';
import { ActiveUserFilterPipe } from './pipes/index';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UserComponent,
    ActiveUserFilterPipe,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routes,
    FormsModule,
    ReactiveFormsModule,
    LoadingModule,
    HttpModule,
    Ng2SmartTableModule
    
  ],
  providers: [AuthService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
