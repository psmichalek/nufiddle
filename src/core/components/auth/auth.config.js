
function AuthConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.login', {
    url: '/login',
    component:'authLoginComponent'
  })
  .state('app.register', {
    url: '/register',
    component:'authRegisterComponent'
    });

};

export default AuthConfig;
