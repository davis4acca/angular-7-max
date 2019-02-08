import { Component, OnInit } from '@angular/core';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private inputField = '';
  private isButtonEnabled;

  inputFieldChangedHandler() {
    console.log('[AppComponent]  inputFieldChangedHandler()');

    if (this.inputField.length > 0) {
      this.isButtonEnabled = true;
    } else {
      this.isButtonEnabled = false;
    }
  }

  constructor() {
    console.log('[AppComponent] constructor()');
    this.inputField = 'hello';
  }

  ngOnInit(): void {
    console.log('[AppComponent] ngOnInit()');
  }
}
