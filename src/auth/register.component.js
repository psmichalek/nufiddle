import tmpl from './register.component.html';

function _controller(){
  var model = this;
}

function RegisterComponent(){
  return {
    template:tmpl,
    controllerAs:'model',
    controller: _controller
  }
}

export default RegisterComponent;
