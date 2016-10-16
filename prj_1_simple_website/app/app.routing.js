"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./components/pages/home.component');
var about_component_1 = require('./components/pages/about.component');
var contact_component_1 = require('./components/pages/contact.component');
var universe_component_1 = require('./components/pages/universe.component');
var subscribe_component_1 = require('./components/pages/subscribe.component');
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'contact',
        component: contact_component_1.ContactComponent
    },
    {
        path: 'universe',
        component: universe_component_1.UniverseComponent
    },
    {
        path: 'subscribe',
        component: subscribe_component_1.SubscribeComponent
    },
    {
        path: '**',
        component: home_component_1.HomeComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map