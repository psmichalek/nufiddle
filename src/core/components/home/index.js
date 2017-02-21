import angular from 'angular';

// Component dependancies
import { HomeComponent } from './home.component';

// Module export
export default angular.module('home',[])
.component(HomeComponent.selector,HomeComponent)
.name;
