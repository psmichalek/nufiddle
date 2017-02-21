import angular from 'angular';
import auth from './auth';
import home from './home';
import navbar from './navbar';
import providers from './providers';

export default angular.module( 'core.components', [
    home,
    navbar,
    providers
]);
