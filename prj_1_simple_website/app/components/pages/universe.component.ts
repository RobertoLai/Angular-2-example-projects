import { Component } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'universe',
  templateUrl: 'universe.component.html'
})
export class UniverseComponent {
  private image = [];  

  constructor(){
    this.image[0] = 'sources/images/10.jpg';
  }

  }
