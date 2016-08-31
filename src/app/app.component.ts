import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { iposition } from './interfaces/iposition';

@Component({
  selector: 'app',
  template: require('./app.html'),
  styles: [require('./app.scss')],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  position: iposition = {x: 512, y: 384};
  target: iposition = {x: 768, y: 300};
  constructor() { }

  ngAfterViewInit() {}

  click(e) {

    this.target = {x: e.clientX, y: 768 - e.clientY};
    console.log( this.target);
    console.log(e);
  }

}
