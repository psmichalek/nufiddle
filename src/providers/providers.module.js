// Vendor dependancies
import angular from 'angular';

// Component dependancies
import ProviderListComponent from './providerList.component';

export default angular.module('app.providers',[])
.config(ProvidersConfig)
.constant('ApiSources',globals.apiProviders)
.component('providerListComponent',ProviderListComponent)
