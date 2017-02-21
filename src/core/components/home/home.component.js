import tmpl from './home.component.html';

export let HomeComponent =
{
    selector : 'home',
    replace: true,
    template : tmpl,
    bindings : {},
    controllerAs : 'model',
    controller : class HomeCtl {

        constructor(providerService){
            Object.assign(this,{providerService})
            this.title = 'NuFiddle';
            this.showContent = true;
        }

    }

}
