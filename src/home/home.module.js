import angular from 'angular';

// Component dependancies
import HomeConfig from './home.config'
import HomeComponent from './home.component';

// Module export
export default angular.module('app.home',[])
.config(HomeConfig)
.component('homeComponent',HomeComponent)
