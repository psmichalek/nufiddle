import tmpl from './home.component.html';

function _controller(){
  var model = this;
}

function HomeComponent(){
  return {
    template:tmpl,
    controllerAs:'model',
    controller: _controller
  }
}

export default HomeComponent;
