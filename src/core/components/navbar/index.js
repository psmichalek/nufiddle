import angular from 'angular';

// Component dependancies
import { TopNavComponent } from './navbar.component';

// Module export
export default angular.module('navbar',[])
.component(TopNavComponent.selector,TopNavComponent)
.name;
