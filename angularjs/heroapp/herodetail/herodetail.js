function herodetailcontroller(){
    this.delete = function(){
        this.onDelete(this.hero);
    }
    this.update = function(loc,prop){
        this.onUpdate(this.hero,loc.prop);
    }
}

angular.module("heroapp").component("herodetail",{
    templateUrl : "herodetail/herodetail.html",
    controller : herodetailcontroller,
    controllerAs : "hdc",
    bindings : {
        hero : "<",
        onDelete : "&",
        onUpdate : "&"
    }
})