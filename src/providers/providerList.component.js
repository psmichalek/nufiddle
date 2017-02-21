import tmpl from './providers.component.html';

function _controller(ApiSources,$sce){
  var model = this;

  model.$onInit = function(){
    ApiSources.forEach(function(v,i){
      v.scope.forEach(function(vv,ii){
        ApiSources[i].scope[ii].comp = $sce.trustAsHtml(vv.comp);
      })
    });
    model.sources = ApiSources;
  }
}

function ProviderListComponent(){
  return {
    template:tmpl,
    controllerAs:'model',
    controller: _controller
  }
}

export default ProviderListComponent;
