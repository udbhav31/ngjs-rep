
var controller = (function () {
    var $multiplySer;
    $inject=["multiplySer"];
    var countercontroller = function(multiplySer){
        this.count = 0;
        $multiplySer = multiplySer;
    }
     countercontroller.prototype.incrementar =function (){
        this.count++;
        countercontroller.myfunc();
    }
    countercontroller.prototype.updatecount = function(newcount){
        this.count = newcount;
    }
    countercontroller.prototype.multiply = function(){
        this.count = $multiplySer.calc(this.count,2);
    }
    countercontroller.myfunc = function(){
        console.log("triger");
    }
    return {
         constructor: countercontroller
    }
})();

angular.module("counterApp").service("multiplySer", function() {
    this.calc = function(val,multiplier){
        return val*multiplier;
    }
    
});
//controller.constructor.$inject=["multiplySer"] ;

angular.module("counterApp").component("counterComp", {
    templateUrl: "counterComp/counter.html",
    controller: controller.constructor,
    controllerAs: "countcon"
})