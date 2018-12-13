import { NgModule } from "@angular/core";
import { PAGES_ROUTES } from "src/app/pages/pages.routes";
import { SharedModule } from "src/app/shared/shared.module";
import { FormsModule } from '@angular/forms';


import { DashboardComponent } from "src/app/pages/dashboard/dashboard.component";
import { ProgressComponent } from "src/app/pages/progress/progress.component";
import { Graficas1Component } from "src/app/pages/graficas1/graficas1.component";
import { PagesComponent } from "src/app/pages/pages.component";


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule
    ]
})

export class PagesModule {}