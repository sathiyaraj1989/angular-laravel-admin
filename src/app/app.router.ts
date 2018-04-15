import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent, DashboardComponent, UserComponent } from './components/index';

export const router : Routes = [
    { path: 'login', component : LoginComponent },
    { path: 'dashboard', component : DashboardComponent },
    { path: 'user', component : UserComponent }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router, {useHash: true});