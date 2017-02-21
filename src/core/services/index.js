import angular from 'angular';
import LocalStorageModule from 'angular-local-storage';
import ProviderService from './providers.service';

export default angular.module( 'core.services', [ 'LocalStorageModule' ])
.service('providerService',ProviderService)
