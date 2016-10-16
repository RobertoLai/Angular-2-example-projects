import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  NgForm }           from '@angular/forms';
import { Post }      from '../../model/post';


@Component({
  moduleId: module.id,
  selector: 'subscribe',
  templateUrl: 'subscribe.component.html',
  styles :[`
    form .ng-dirty {}
    form .ng-pristine {}
    form .ng-valid[required] {border: 2px solid #42a948;}
    form .ng-invalid {border: 2px solid #a94442;}
    `]
})
export class SubscribeComponent {
  model = new Post(1, '', '', '');
  submitted = false;
  noJoke = true
  image = "sources/images/obama.jpg";
  joke = '"You fool! Are you really trying to subscribe here?"';

  submitSubscription(){
    this.noJoke = false;
  }
}
