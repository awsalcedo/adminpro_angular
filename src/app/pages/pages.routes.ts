import { RouterModule,Routes } from "@angular/router";
import { PagesComponent } from "src/app/pages/pages.component";
import { DashboardComponent } from "src/app/pages/dashboard/dashboard.component";
import { Graficas1Component } from "src/app/pages/graficas1/graficas1.component";
import { ProgressComponent } from "src/app/pages/progress/progress.component";


const pagesRoutes: Routes = [
    {   
        path: '', 
        component: PagesComponent,
        children: [
            {path: 'dashboard', component: DashboardComponent},
            {path: 'graficas1', component: Graficas1Component},
            {path: 'progress', component: ProgressComponent},
            {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
        ]  
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);