import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";

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
        SharedModule
    ]
})

export class PagesModule {}