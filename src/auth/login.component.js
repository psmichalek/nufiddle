import tmpl from './login.component.html';

function _controller(){
  var model = this;
}

function LoginComponent(){
  return {
    template:tmpl,
    controllerAs:'model',
    controller: _controller
  }
}

export default LoginComponent;
