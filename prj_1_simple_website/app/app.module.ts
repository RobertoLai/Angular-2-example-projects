import { NgModule }          from '@angular/core';
import { BrowserModule }     from '@angular/platform-browser';
import { FormsModule }       from '@angular/forms';

import { AppComponent }       from './app.component';
import { NavbarComponent }    from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { AboutComponent }     from './components/pages/about.component';
import { HomeComponent }      from './components/pages/home.component';
import { ContactComponent }   from './components/pages/contact.component';
import { UniverseComponent }  from './components/pages/universe.component';
import { SubscribeComponent } from './components/pages/subscribe.component';
import { FootComponent }      from './components/foot/foot.component';
import { routing }            from './app.routing';


@NgModule({
  imports: [
    BrowserModule ,
    routing ,
    FormsModule ],
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    AboutComponent,
    HomeComponent,
    FootComponent,
    ContactComponent,
    UniverseComponent,
    SubscribeComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
