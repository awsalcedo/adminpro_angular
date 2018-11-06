import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

const appRoutes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: LoginComponent},
    {path: 'progress', component: ProgressComponent},
    {path: 'graficas1', component: Graficas1Component},
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'}, /*cualquier ruta vacia redirecciona a dashboard */
    {path: '**', component: NopagefoundComponent} /* cualquier otra ruta que no este definida */
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});