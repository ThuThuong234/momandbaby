import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {AdminComponent} from "./views/admin/admin.component";

export const routes: Routes = [
  {
    path: '', component: HomeComponent,
    data: {
      title: 'home'
    }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Home'
    }
  },
  {
    path: 'admin',
    component: AdminComponent,
    data: {
      title: 'Admin'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
