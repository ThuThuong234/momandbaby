import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User} from "../../../view-model/user/user";
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements  OnInit{

  formdata;

  user = { userid: "admin", password: "admin123" };

  closeResult: string;
  constructor(private modalService: NgbModal,private router: Router) { }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      UserId: new FormControl("", Validators.compose([
          Validators.required
        ])),
      password: new FormControl("",this.passwordvalidation)
    });
  }
  passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 5) {
      return {"password" : true};
    }
  }
  onClickSubmit(data) {
    if(data.UserId == this.user.userid && data.password == this.user.password){
      alert("Success");
    }
    else{
      alert("Error : " + data.UserId);
    }
  }
  }
