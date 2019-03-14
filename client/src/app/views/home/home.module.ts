import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModalComponent } from './modal/modal.component'
import { CarouselComponent} from "../carousel/carousel.component";
import { HomeComponent} from "./home.component";

@NgModule({
  imports:[
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule],
  declarations:[
    ModalComponent,
    CarouselComponent,
    HomeComponent
  ]
})
export class HomeModule {}
