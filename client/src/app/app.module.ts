import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { CalendarModule} from "primeng/calendar";

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './views/home/home.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { FooterComponent } from './views/footer/footer.component';
import { CarouselComponent } from './views/carousel/carousel.component';
import { HotComponent } from './views/carousel/hot.component';
import { LoginComponent } from './views/login/login.component';

import { AccordionModule } from 'primeng/components/accordion/accordion';
import { PanelModule } from 'primeng/components/panel/panel';
import { ButtonModule } from 'primeng/components/button/button';
import { RadioButtonModule } from 'primeng/components/radioButton/radioButton';
import {CarouselModule} from 'primeng/carousel';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';



import { AppRoutingModule } from './app.routing';
import {TypeService} from "./services/reader/type_services";
import {SpinService} from "./services/spin.service";
import {ToastrModule} from "ngx-toastr";

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    P404Component,
    P500Component,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    HotComponent,
    LoginComponent
  ],
  imports: [
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
    ToastrModule.forRoot({
      progressBar: true,
      preventDuplicates: true,
    }),
  ],
  providers: [Title,
    SpinService,
    TypeService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
