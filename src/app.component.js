import tmpl from './app.component.html';

export let AppComponent =
{

    selector : 'app',
    replace: true,
    template : tmpl,
    bindings : {},
    controllerAs : 'model',
    controller : class AppCtl {
        constructor($state){
             Object.assign(this,{$state});
        }
    }

}
