import { NgModule } from "@angular/core";
import { HeaderComponent } from "src/app/shared/header/header.component";
import { SidebarComponent } from "src/app/shared/sidebar/sidebar.component";
import { BreadcrumbsComponent } from "src/app/shared/breadcrumbs/breadcrumbs.component";
import { NopagefoundComponent } from "src/app/shared/nopagefound/nopagefound.component";


@NgModule({
    declarations: [
        NopagefoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent
    ],
    exports: [
        NopagefoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent
    ]
})

export class SharedModule {}