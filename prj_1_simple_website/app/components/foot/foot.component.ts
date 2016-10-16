import { Component } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'foot',
  templateUrl: 'foot.component.html'
})
export class FootComponent {
  private footContent:string;

  constructor(){
    this.footContent = "2016 Roberto Lai ";
  }

}
