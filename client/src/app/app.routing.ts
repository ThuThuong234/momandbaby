import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from './views/index/index.component';
import {ContactComponent} from "./views/contact/contact.component";
import {AboutComponent} from "./views/about/about.component";
import {BlogComponent} from "./views/blog/blog.component";
import {ErrorpageComponent} from "./views/errorpage/errorpage.component";
import {BlogOneComponent} from "./views/blog-one/blog-one.component";
import {LoginComponent} from "./views/login/login.component";
import {DefaultLayoutComponent} from './views/default-layout/default-layout.component';
import {AuthorizeService} from './services/authorize.service';
import {RoleVM} from './view-model/roles/role-vm';
import {DefaulAdminLayoutComponent} from './views/admin/defaul-admin-layout/defaul-admin-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
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
    ]
  },
  // {
  //   path: 'admin',
  //   component: DefaulAdminLayoutComponent,
  //   children: [
  //     // {
  //     //   path: '',
  //     //   canActivate: [AuthorizeService],
  //     //   data: {roles: [RoleVM.ROLES.ADMIN]},
  //     //   loadChildren: './views/users/users.module#UsersModule'
  //     // },
  //     {
  //       path: 'index',
  //       component: IndexComponent,
  //       data: {
  //         title: 'Home'
  //       }
  //     },
  //     {
  //       path: 'login',
  //       component: LoginComponent,
  //       data: {
  //         title: 'Login'
  //       }
  //     },
  //     {
  //       path: 'contact',
  //       component: ContactComponent,
  //       data: {
  //         title: 'contact'
  //       }
  //     },
  //     {
  //       path: 'about',
  //       component: AboutComponent,
  //       data: {
  //         title: 'about'
  //       }
  //     },
  //     {
  //       path: 'blog',
  //       component: BlogComponent,
  //       data: {
  //         title: 'blog'
  //       }
  //     },
  //     {
  //       path: 'errorpage',
  //       component: ErrorpageComponent,
  //       data: {
  //         title: 'errorpage'
  //       }
  //     },
  //     {
  //       path: 'BlogOne',
  //       component: BlogOneComponent,
  //       data: {
  //         title: 'BlogOne'
  //       }
  //     }
  //   ]
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
