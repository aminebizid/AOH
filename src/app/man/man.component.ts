import { Component, AfterViewInit, ViewEncapsulation, Input } from '@angular/core';
import { iposition } from '../interfaces/iposition';

@Component({
  selector: 'man',
  template: require('./man.html'),
  styles: [require('./man.scss')],
  encapsulation: ViewEncapsulation.None
})
export class ManComponent implements AfterViewInit {
  @Input() position: iposition;
  @Input() target: iposition;
  classes: string  = 'man move a0';
  constructor() { }

  ngAfterViewInit() {

    setInterval(() => {
      if (this.target.x !== this.position.x || this.target.y !== this.position.y) {
        this.move();
      } else {

      }
    }, 100);
  }

  move() {
   let d = this.computeDirction();
   this.classes = 'man move a' + d;
   if (this.position.x < this.target.x) this.position.x++;
   if (this.position.x > this.target.x) this.position.x--;
   if (this.position.y < this.target.y) this.position.y++;
   if (this.position.y > this.target.y) this.position.y--;

  }

  computeDirction(): number {
    if (this.target.x === this.position.x) return 0;

      let a = Math.atan2( (this.target.y - this.position.y),  (this.target.x - this.position.x)  )
              * 180 / 3.14159 ;
      if (a < 0 ) a += 360;

      let x = 22.5;
      x += 45; if (a <= x) return 1;
      x += 45; if (a <= x) return 0;
      x += 45; if (a <= x) return 7;
      x += 45; if (a <= x) return 6;
      x += 45; if (a <= x) return 5;
      x += 45; if (a <= x) return 4;
      x += 45; if (a <= x) return 3;
      return 2;
    }

}
