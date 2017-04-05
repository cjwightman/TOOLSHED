"use strict";


angular
  .module("toolshed", [
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

function RouterFunction($stateProvider){
  $stateProvider
  .state("toolIndex", {
    url: "/tools",
    templateUrl: "js/ng-views/index.html",
    controller: "ToolIndexController",
    controllerAs: "vm"
  })
  .state("toolShow", {
    url: "/tools/:id",
    templateUrl: "js/ng-views/show.html",
    controller: "ToolShowController",
    controllerAs: "vm"
  })
}

function ToolsControllerFunction($firebaseArray){
  let ref = firebase.database().ref().child("tools");
}

function ToolIndexControllerFunction($firebaseArray){
  let ref = firebase.database().ref().child("tools");
  this.tools = $firebaseArray(ref);

  this.create = function(){
    this.$add(this.newTool).then( () => this.newTool = {} )
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
        this.tool.$remove(tool);
      }
  }

funtion ToolControllerFunction($firebaseArray){
  let ref = firebase.database().ref().child("tools");
  this.tools= $firebaseArray(ref);

}
