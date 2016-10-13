import { Component } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'jumbotron',
  templateUrl: 'jumbotron.component.html'
})
export class JumbotronComponent {
  private jbtHeading:string;
  private jbtText:string;
  private jbtBtnText:string;
  private jbtBtnUrl:string;

  constructor(){
    this.jbtHeading = "Nighty Sky...";
    this.jbtText = "Nice photos, but what is the relationship between the Universe and programming?";
    this.jbtBtnText = "Tell me now!";
    this.jbtBtnUrl = "universe";
  }

}
