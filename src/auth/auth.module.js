import angular from 'angular';

// Component dependancies
import AuthConfig from './auth.config'
import LoginComponent from './login.component';
import RegisterComponent from './register.component';

// Module export
export default angular.module('app.auth',[])
.config(AuthConfig)
.component('authLoginComponent',LoginComponent)
.component('authRegisterComponent',RegisterComponent)
