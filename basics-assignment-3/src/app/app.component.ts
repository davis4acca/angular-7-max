import { Component } from "@angular/core";

let idGen = (function* idGen() {
  let id = 0;

  while (true) {
    id++;
    yield id;
  }
})();

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  isPasswordVisible = true;
  buttonClickLogList = [];

  togglePassword() {
    this.isPasswordVisible = !this.isPasswordVisible;
    this.buttonClickLogList.push(idGen.next().value);

    console.log(this.buttonClickLogList);
  }
}
