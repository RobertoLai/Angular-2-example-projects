import { Component } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'contact',
  templateUrl: 'contact.component.html'
})
export class ContactComponent {
  private image = [];

  constructor(){
    this.image[0] = 'sources/images/03.jpg';
  }
  }
