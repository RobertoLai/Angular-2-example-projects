import { Component } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html'
})
export class HomeComponent {
  private image = [];

  constructor(){
    this.image[0] = 'sources/images/01.jpg';
  }
  
  }
