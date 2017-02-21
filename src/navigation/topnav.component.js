import tmpl from './topnav.component.html';

function _controller($timeout,$http){
  var model = this;

  function _initVars(){

    model.user = {fn:'',ln:'',un:'',token:'',auth:false}
    model.showLoginForm = false;
    model.isAuth = model.user.auth;
    model.uninput = '';
    model.pwinput = '';
    model.alert = {mesg:'',active:false};
    model.spinner = false;

  }

  model.$onInt = function(){
    _initVars();
  }

  model.toggleLoginForm = function(){
    model.showLoginForm = !model.showLoginForm;
  }

  model.login = function(){
    console.log('un ',model.uninput);
    console.log('pw ',model.pwinput);
    model.spinner = true;
    $timeout(function(){
      _initVars();
      model.alert.mesg = 'You have been logged in successfully.';
      model.alert.active = true;
      model.user = {fn:'Johnny',ln:'Userguy',un:'mich0044',token:'',auth:true};
      model.isAuth = model.user.auth;
      $timeout(function(){ model.alert.active=false; odel.alert.mesg=''; },2000);
    },500)
  }

  model.logout = function(){
    $timeout(function(){
      _initVars();
      model.alert.mesg = 'You have been logged out successfully.';
      model.alert.active = true;
      $timeout(function(){ model.alert.active=false; odel.alert.mesg=''; },2000);
    },500)
  }

}

function TopNav(){
  return {
    template:tmpl,
    controllerAs:'model',
    controller: [ '$timeout','$http', _controller ]
  }
}

export default TopNav;
