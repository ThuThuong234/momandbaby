import { Component, OnInit  } from '@angular/core';
import {TypePaging} from '../../view-model/type/type-paging';
import {TypeService} from '../../services/reader/type_services';
import {plainToClass} from 'class-transformer';
import {ToastrService} from 'ngx-toastr';

@Component({

  selector: 'home-root',
  templateUrl: 'home.component.html',
  styleUrls: ["home.component.scss"]
})
export class HomeComponent implements OnInit{
  typePaging: TypePaging = new TypePaging();
  private bodyText: string;
  constructor(
    private typeService: TypeService,
    private toastr: ToastrService ){ }


  ngOnInit() {
    this.getTypes();
    this.bodyText = 'This text can be updated in modal 1';
    console.log("out");

  }


  private getTypes() {
    this.typeService.getTypes().subscribe(res => {
        if (res.success && res.data) {
          console.log(res);
          this.typePaging = plainToClass(TypePaging, res.data);
        } else {
          this.toastr.error(" res is not succeeds" + res.message);
        }
      },
      error => {
        this.toastr.error("error");
      });
  }

}
