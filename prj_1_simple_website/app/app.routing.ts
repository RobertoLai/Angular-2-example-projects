import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';



import {HomeComponent} from './components/pages/home.component';
import {AboutComponent} from './components/pages/about.component';
import {ContactComponent} from './components/pages/contact.component';
import {UniverseComponent} from './components/pages/universe.component';
import {SubscribeComponent} from './components/pages/subscribe.component';

const appRoutes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path: 'universe',
    component: UniverseComponent
  },
  {
    path: 'subscribe',
    component: SubscribeComponent
  },
  {
    path: '**',
    component: HomeComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
