import {
  Component,
  OnInit} from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-footer",
  templateUrl: "footer.component.html",
  styleUrls: ["footer.component.scss"]
})
export class FooterComponent implements OnInit {

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
