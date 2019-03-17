import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminRoutingModule } from "./admin-routing.module";
// import { TranslateModule } from '@ngx-translate/core';
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,AdminRoutingModule,
    // TranslateModule,
    NgbDropdownModule
  ],
  declarations: [SidebarComponent]
})
export class AdminModule { }
