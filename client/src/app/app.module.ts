import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Title } from '@angular/platform-browser';
//root
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
//server
import {TypeService} from "./services/reader/type_services";
import {SpinService} from "./services/spin.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IndexComponent } from './views/index/index.component';
import { ContactComponent } from './views/contact/contact.component';
import { AboutComponent } from './views/about/about.component';
import { ErrorpageComponent } from './views/errorpage/errorpage.component';
import { BlogComponent } from './views/blog/blog.component';
import { BlogOneComponent } from './views/blog-one/blog-one.component';
import { CheckloginComponent } from './views/checklogin/checklogin.component';
import { LoginComponent } from './views/login/login.component';
import { DefaultLayoutComponent } from './views/default-layout/default-layout.component';
import { DefaulAdminLayoutComponent } from './views/admin/defaul-admin-layout/defaul-admin-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ContactComponent,
    AboutComponent,
    ErrorpageComponent,
    BlogComponent,
    BlogOneComponent,
    CheckloginComponent,
    LoginComponent,
    DefaultLayoutComponent,
    DefaulAdminLayoutComponent
  ],
  imports: [
    NgbModule.forRoot(),
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

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
