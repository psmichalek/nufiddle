
function ProvidersConfig($stateProvider, $httpProvider) {
  'ngInject';

  $stateProvider
  .state('app.providers', {
    url: '/providers',
    component:'providersListComponent'
  });

};

export default ProvidersConfig;
