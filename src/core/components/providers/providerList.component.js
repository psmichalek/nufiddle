import tmpl from './providerList.component.html';

export let ProviderListComponent =
{
    selector : 'apiProviderList',
    replace: true,
    template : tmpl,
    bindings : {},
    controllerAs : 'model',
    controller : class ProviderListCtl {

        constructor(providerService,$sce){
            Object.assign(this,{providerService,$sce})
            this.title = 'Api Provider List';
            this.showContent = true;
            this.sources = [];
            this.refreshing = false;
            this.getApiSources();
        }

        getApiSources(){
            console.log('go getApiSources ');
            this.providerService.getApiProviderList()
            .then( (data)=>{
                data.forEach((v,i)=>{
                  v.scope.forEach((vv,ii)=>{
                    data[i].scope[ii].comp = this.$sce.trustAsHtml(vv.comp);
                  })
                });
                angular.copy(data,this['sources']);
                this.refreshing = false;
                console.log('getApiSources ',this.sources);
            });
        }

    }

}
