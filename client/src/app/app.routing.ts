import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from './views/index/index.component';
import {ContactComponent} from "./views/contact/contact.component";
import {AboutComponent} from "./views/about/about.component";
import {BlogComponent} from "./views/blog/blog.component";
import {ErrorpageComponent} from "./views/errorpage/errorpage.component";
import {BlogOneComponent} from "./views/blog-one/blog-one.component";
import {LoginComponent} from "./views/login/login.component";

export const routes: Routes = [
  {
    path: '', component: IndexComponent,
    data: {
      title: 'index'
    }
  },
  {
    path: 'index',
    component: IndexComponent,
    data: {
      title: 'Home'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login'
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      title: 'contact'
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      title: 'about'
    }
  },
  {
    path: 'blog',
    component: BlogComponent,
    data: {
      title: 'blog'
    }
  },
  {
    path: 'errorpage',
    component: ErrorpageComponent,
    data: {
      title: 'errorpage'
    }
  },
  {
    path: 'BlogOne',
    component: BlogOneComponent,
    data: {
      title: 'BlogOne'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
