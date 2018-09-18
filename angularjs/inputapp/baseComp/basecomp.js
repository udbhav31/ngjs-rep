var fetchdata = (function(){
    
    $inject = ["baseobj"];
    var constructorfn = function (baseobj){
        this.dummy= 0;
        this.$data = baseobj;
    }
    return constructorfn
})(); 

angular.module("counterApp").component("baseComp",{
    templateUrl : "baseComp/base.html",
    controller : fetchdata,
    controllerAs : "basecon"
});