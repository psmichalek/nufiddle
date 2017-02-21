// Vendor dependancies
import angular from 'angular';

// Component dependancies
import { ProviderListComponent } from './providerList.component';

export default angular.module('providers',[])
.component(ProviderListComponent.selector,ProviderListComponent)
.name;
