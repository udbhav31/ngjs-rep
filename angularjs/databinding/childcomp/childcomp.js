function childcontroller() {
    this.updatevalues = function () {
        this.prim = 10;
        /*this.objct = {
            name: "morphius"
        }*/
        this.objct.name = "morphius";
    }
}
angular.module("bindingapp").component("childComp", {
    templateUrl: "childcomp/childcomp.html",
    controller: childcontroller,
    controllerAs: "chcon",
    bindings: {
        prim: "<",
        objct: "<"
    }
});