import tmpl from './navbar.component.html';

export let TopNavComponent =
{
    selector : 'topNav',
    replace: true,
    template : tmpl,
    bindings : {},
    controllerAs : 'model',
    controller : class TopNavCtl {

        constructor($timeout,$http) {
            Object.assign(this, {$timeout,$http} );
            this.init();
        }

        init(){
            this.user = {fn:'',ln:'',un:'',token:'',auth:false}
            this.showLoginForm = false;
            this.isAuth = this.user.auth;
            this.uninput = '';
            this.pwinput = '';
            this.alert = {mesg:'',active:false};
            this.spinner = false;
        }

        toggleLoginForm(){
            this.showLoginForm = !this.showLoginForm;
        }

        login(){
            console.log('un ',this.uninput);
            console.log('pw ',this.pwinput);
            this.spinner = true;
            this.$timeout(
                ()=>{
                  this.init();
                  this.alert.mesg = 'You have been logged in successfully.';
                  this.alert.active = true;
                  this.user = {fn:'Johnny',ln:'Userguy',un:'mich0044',token:'',auth:true};
                  this.isAuth = this.user.auth;
                  this.$timeout(()=>{ this.alert.active=false; this.alert.mesg=''; },2000);
                }
            ,500);
        }

        logout(){
            this.$timeout(
                ()=>{
                  this.init();
                  this.alert.mesg = 'You have been logged out successfully.';
                  this.alert.active = true;
                  this.$timeout(()=>{ this.alert.active=false; this.alert.mesg=''; },2000);
                }
            ,500);
        }

    }


}
