import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  classes = "manMove up";
  constructor() { }

  ngAfterViewInit() {
    console.log('hello');
  }

  changeDir() {
    if (this.classes.indexOf('up') === -1)
      this.classes = "manMove up";
    else this.classes = "manMove down";
  }

}
