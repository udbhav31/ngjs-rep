var fetchdata = (function(){
    var $data;
    $inject = ["data"];
    var dataobj = function (data){
        this.dummy= 0;
        $data = data;
    }

    return dataobj
})(); 

angular.module("counterApp").component("dataComp",{
    templateUrl : "dataComp/data.html",
    controller : fetchdata,
    controllerAs : "datacon"
});