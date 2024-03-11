import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'scroll-controller',
  template: '<ng-content></ng-content>'
})
export class ScrollController {
  constructor(private router: Router, private location: Location) { }

  scrollTo(id: string) {
    this.location.go(`#${id}`);
    this.router.navigateByUrl('/');
  }
}