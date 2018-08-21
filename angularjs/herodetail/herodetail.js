function herodetailcontroller(){

}

angular.module("heroapp").component("herodetail",{
    templateUrl : "herodetail/herodetail.html",
    controller : herodetailcontroller,
    controllerAs : "hdc",
    bindings : {
        hero : "<",
        delete : "&"
    }
})