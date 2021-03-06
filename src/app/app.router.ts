import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent, DashboardComponent, UserComponent, UserprofileComponent, ChangePasswordComponent } from './components/index';

export const router : Routes = [
    { path: 'login', component : LoginComponent },
    { path: 'dashboard', component : DashboardComponent },
    { path: 'user', component : UserComponent },
    { path: 'userProfile', component : UserprofileComponent },
    { path: 'changePassword', component : ChangePasswordComponent }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router, {useHash: true});