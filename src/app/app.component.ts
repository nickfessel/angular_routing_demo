import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Routing Demo';
  angularVersion = "";

  constructor(private el: ElementRef) {
    this.angularVersion = this.el.nativeElement.getAttribute("ng-version");
  }
}