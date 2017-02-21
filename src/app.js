// Vendor dependancies
import angular from 'angular';
import AngularUiRouter from 'angular-ui-router';
import AngularAnimate from 'angular-animate';
import LocalStorageModule from 'angular-local-storage';

// Application dependancies
import AppCore from './core';
import { AppComponent } from './app.component';

angular.module('nufiddle',[
    AngularUiRouter,
    AngularAnimate,
    LocalStorageModule,
    AppCore
])
.component( AppComponent.selector, AppComponent );

angular.element(document).ready(() => {
  angular.bootstrap(document, [ 'nufiddle' ]);
});


function AppConfig($stateProvider,$urlServiceProvider,localStorageServiceProvider) {

   localStorageServiceProvider.setPrefix('NuFiddle');

  $urlServiceProvider.rules.otherwise({state:'home'});

  $stateProvider.state('home', {
    url: '/',
    component: AppComponent.selector
  });

}
