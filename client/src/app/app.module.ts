import { CommonModule } from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { NgChatModule } from 'ng-chat';
import { BrowserModule } from '@angular/platform-browser';
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
import { TopicComponent } from './views/topic/topic.component';
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
import { QuillModule } from 'ngx-quill';
// import { QuillEditorModule } from 'ngx-quill-editor';
import {UserService} from "./services/user.service";
import { FormTopicComponent } from './views/topics/form-topic/form-topic.component';
import {UploadFileService} from "./services/uploadfile.service";
import { UsersComponent } from './views/users/users.component';
import { UserComponent } from './views/user/user.component';

import { EmbedComponent } from './views/embed/embed.component';

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
    TopicComponent,
    CheckloginComponent,
    LoginComponent,
    DefaultLayoutComponent,
    DefaulAdminLayoutComponent,
    SearchTopicComponent,
    SignupComponent,
    CreateTopicComponent,
    FormTopicComponent,
    UsersComponent,
    UserComponent,
    EmbedComponent
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
    // QuillEditorModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    QuillModule,
    FormsModule,
    HttpClientModule,
    NgChatModule,

     BrowserModule,
     FormsModule

  ],
  providers: [
    Title,
    SpinService,
    TypeService,
    TopicService,
    AuthenticateService,
    UserService,
    UploadFileService,
  ],
  bootstrap: [
    AppComponent
   
  ]
})
export class AppModule { }
