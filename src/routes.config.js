import angular  from 'angular';
import uirouter from 'angular-ui-router';

export default angular.module('app.routes',['ui.router'])
.config(AppConfig);

function AppConfig($stateProvider,$urlServiceProvider) {

  $urlServiceProvider.rules.otherwise({state:'home'});

  $stateProvider.state('home', {
    url: '/',
    component: 'appMain'
  });

}
