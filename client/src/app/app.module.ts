import { CommonModule } from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Title } from '@angular/platform-browser';
//root
import { AppComponent } from './app.component';
import {AppRoutingModule,routingCoponents} from './app.routing';
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
import {AuthenticateService} from "./services/authenticate.service";
import {ToastrModule} from "ngx-toastr";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TopicService} from "./services/reader/topic_services";
import { SearchTopicComponent } from './views/topics/search-topic/search-topic.component';
import {SharedModule} from "./views/shared/shared.module";
import { SignupComponent } from './views/signup/signup.component';
import { CreateTopicComponent } from './views/topics/create-topic/create-topic.component';
import { QuillModule } from 'ngx-quill'
import {UserService} from "./services/user.service";


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    routingCoponents,
    IndexComponent,
    ContactComponent,
    AboutComponent,
    ErrorpageComponent,
    BlogComponent,
    BlogOneComponent,
    CheckloginComponent,
    LoginComponent,
    DefaultLayoutComponent,
    DefaulAdminLayoutComponent,
    SearchTopicComponent,
    SignupComponent,
    CreateTopicComponent
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
    SharedModule,
    ToastrModule.forRoot({
      progressBar: true,
      preventDuplicates: true,
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    QuillModule

  ],
  providers: [
    Title,
    SpinService,
    TypeService,
    TopicService,
    AuthenticateService,
    UserService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
