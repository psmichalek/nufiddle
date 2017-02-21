import tmpl from './register.component.html';

export let RegisterComponent =
{

    selector : 'register',
    replace: true,
    template : tmpl,
    bindings : {},
    controllerAs : 'model',
    controller : class RegisterCtl {
        constructor(){
            this.title = 'Registration';
            this.showContent = true;
        }
    }

}
