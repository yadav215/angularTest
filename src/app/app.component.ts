import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularTest';
  numbers: any = [];
  index: number;

  ngOnInit() {
    for (this.index = 0; this.index < 1000; this.index++) {
      this.numbers.push(this.index);
    }
  }
}
