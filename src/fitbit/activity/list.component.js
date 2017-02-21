import angular from 'angular';
import vw from './list.component.html';

function _controller($http){

  var model = this;
  model.activities = [];

  function _success(resp){
    console.log('Success',resp);
    if(resp.status==200) {
      model.activities = resp.data.dataset;
      model.activities.map( (v) => { v.ansOn=false; } );
      console.log('activities ',model.activities)
    }
  }

  function _failure(resp){
    console.log('Failure',resp)
  }

  model.$onInit = function(){
    model.activities = [];
    //$http.get( APIURL ).then( _success, _failure );
    console.log('Init Activity List Component..');
  }

  model.toggleAnswer = function(row){
    row.ansOn = !row.ansOn;
    console.log('toggleAnswer')
  }

}

export default angular.module('app.fitbit.activity',[])
.component('fitbitActivityList',{
  template : vw,
  controllerAs : 'model',
  controller:[ '$http', _controller ]
});
