var controller = (function(){
    var updaterController = function(){
        this.valupdate = function(){
            this.onUpdate({newcount: this.count});
        }
    }
    return updaterController
})();

angular.module("counterApp").component("updaterComp",{
    templateUrl : "updaterComp/updatecounter.html",
    controller : controller,
    controllerAs: "updatecon",
    bindings : {
        count : "<incount",
        onUpdate : "&"
    }
})