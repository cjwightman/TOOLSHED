// "use strict";


angular
  .module("toolshed", [
    // "ui.bootstrap",
    "ui.router",
    "firebase"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("ToolController", [
    "$firebaseArray",
    ToolControllerFunction
  ])
  .controller("ToolIndexController", [
    "$firebaseArray",
    ToolIndexControllerFunction
  ])
  .controller("ToolShowController", [
      "$stateParams",
      "$firebaseObject",
      ToolShowControllerFunction
  ])
  .controller("PowerToolIndexController", [
    "$firebaseArray",
    ToolIndexControllerFunction
  ])
  .controller("HandToolIndexController", [
    "$firebaseArray",
    ToolIndexControllerFunction
  ])
  // .controller("ToolEditController", [
  //   '$firebaseObject',
  //   '$stateParams',
  //   'state',
  //   ToolEditControllerFunction
  // ])
  .controller('ToolNewController', [
    '$firebaseObject',
    '$state',
    ToolNewControllerFunction
  ])

function RouterFunction($stateProvider){
  $stateProvider
  .state("toolIndex", {
    url: "/toolShed",
    templateUrl: "js/ng-views/index.html",
    controller: "ToolIndexController",
    controllerAs: "vm"
  })
  .state('toolNew', {
    url: "/tools/new",
    templateUrl: "js/ng-views/new.html",
    controller: "ToolNewController",
    controllerAs: "vm"
  })
  .state("toolShow", {
    url: "/tools/:id",
    templateUrl: "js/ng-views/show.html",
    controller: "ToolShowController",
    controllerAs: "vm"
  })
  .state('toolEdit', {
    url: "/tools/:id/edit",
    templateUrl: "js/ng-views/edit.html",
    controller: "ToolEditController",
    controllerAs: "vm"
  })
  .state("powertoolIndex", {
    url: "/powertools",
    templateUrl: "js/ng-views/powertools.html",
    controller: "ToolIndexController",
    controllerAs: "vm"
  })
  .state("handtoolIndex", {
    url: "/handtools",
    templateUrl: "js/ng-views/handtools.html",
    controller: "ToolIndexController",
    controllerAs: "vm"
  })
}

// function ToolControllerFunction($firebaseArray){
//   let ref = firebase.database().ref().child("tools");
// }

function ToolIndexControllerFunction($firebaseArray){
  let ref = firebase.database().ref().child("tools");
  this.tools = $firebaseArray(ref);

  this.create = function(){
    this.tools.$add(this.newTool).then( () => this.newTool = {} )
  }
}
  function ToolShowControllerFunction($stateParams, $firebaseObject){
      // This time, ref contains a reference to a specific grumble.
      let ref = firebase.database().ref().child("tools/" + $stateParams.id);

      // Then we retrieve a $firebaseObject based on ref. Once that asynchronous action is done, we save the resulting grumble to `vm.grumble`.
      $firebaseObject(ref).$loaded().then( tool => this.tool = tool )

      this.update = function(){
        this.tool.$save();
      }

      this.delete = function(tool){
        this.tool.$remove(tool).then( () => $location.path('/toolshed'))
      }
  }
  function ToolNewControllerFunction($firebaseObject, $state) {
  // creating a new expense
  this.create = function() {
    this.tools.$add(this.newTool).then( () => this.newTool = {})
  }
}
//
  function ToolControllerFunction($firebaseArray){
    let ref = firebase.database().ref().child("tools");
    this.tools= $firebaseArray(ref);

}
