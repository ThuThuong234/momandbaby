import {
  Component,
  OnInit} from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "navbar.component.html",
  styleUrls: ["navbar.component.scss"]
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router
  ) {
    // console.log(translate.data);
  }

  ngOnInit() {}
  logout() {
    this.router.navigate(["/"]);
  }

  setLang(lang: string) {
    // console.log("Language", lang);
  }
}
