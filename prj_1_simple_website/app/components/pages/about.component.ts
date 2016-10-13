import { Component } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'about',
  templateUrl: 'about.component.html'
})
export class AboutComponent {
  private image = [];

  constructor(){
    this.image[0] = 'sources/images/02.jpg';
  }

  }
