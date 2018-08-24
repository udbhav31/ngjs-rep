function parentcontroller(){
    this.prim = "00";
    this.objct = {
        name : "trinity"
    }
    this.update = function(){
        this.prim = "01",
        /*this.objct = {
            name : "neo"
        }*/
        this.objct.name ="neo"
    }
}


angular.module("bindingapp").component("parentComp",{
    templateUrl : "parentcomp/parentcomp.html",
    controller : parentcontroller,
    controllerAs : "parcon"
})