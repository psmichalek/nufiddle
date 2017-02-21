function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.home', {
    url: '/',
    component:'homeComponent'
  });

};

export default HomeConfig;
