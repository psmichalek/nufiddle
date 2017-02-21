import tmpl from './login.component.html';

export let LoginComponent =
{

    selector : 'login',
    replace: true,
    template : tmpl,
    bindings : {},
    controllerAs : 'model',
    controller : class LoginCtl {
        constructor(){
            this.title = 'Login';
            this.showContent = true;
        }
    }
    
}
