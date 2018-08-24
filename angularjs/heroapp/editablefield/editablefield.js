function editablefieldcontroller(){
    this.editfield = function(){
        
    }
}
angular.module("heroapp").component("editablefield",{
    templateUrl : "editablefield/editablefield.html",
    controllerAs : "ef",
    controller : editablefieldcontroller,
    bindings : {
        loc : "<"
    }
});