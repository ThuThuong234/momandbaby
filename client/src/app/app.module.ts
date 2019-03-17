import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { CalendarModule} from "primeng/calendar";

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './views/home/home.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { FooterComponent } from './views/footer/footer.component';
import { CarouselComponent } from './views/carousel/carousel.component';
import { HotComponent } from './views/carousel/hot.component';

import { AccordionModule } from 'primeng/components/accordion/accordion';
import { PanelModule } from 'primeng/components/panel/panel';
import { ButtonModule } from 'primeng/components/button/button';
import { RadioButtonModule } from 'primeng/components/radioButton/radioButton';
import { CarouselModule} from 'primeng/carousel';
import { ModalComponent} from "./views/home/modal/modal.component";
import { AngularFontAwesomeModule } from 'angular-font-awesome';



import { AppRoutingModule } from './app.routing';
import {TypeService} from "./services/reader/type_services";
import {SpinService} from "./services/spin.service";
import {ToastrModule} from "ngx-toastr";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {LoginComponent} from "./views/navbar/login/login.component";
import { AdminComponent } from './views/admin/admin.component';
import {SidebarComponent} from "./views/admin/sidebar/sidebar.component";




@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    HotComponent,
    LoginComponent,
    ModalComponent,
    AdminComponent,SidebarComponent
  ],
  imports: [
    NgbModule.forRoot(),
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    CalendarModule,
    FormsModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    CarouselModule,
    HttpClientModule,
    FontAwesomeModule,
    AngularFontAwesomeModule,
    ToastrModule.forRoot({
      progressBar: true,
      preventDuplicates: true,
    }),
  ],
  providers: [
    Title,
    SpinService,
    TypeService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
