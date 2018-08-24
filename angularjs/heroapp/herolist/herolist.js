function herolistcontroller(){
    this.list = [{
        name : "superman",
        location : ""
    },{
        name : "batman",
        location : "wayne manner"
    }];
    this.deleteHero = function(hero){
        console.log(hero);
        var idx = this.list.indexOf(hero);
        if(idx >= 0 ){
            this.list.splice(idx,1);
        }
    }
    this.updateHero = function(hero,prop,val){
        
    }
}

//angular.module("heroapp").controller("herolistcontroller", herolistcontroller);

angular.module("heroapp").component("herolist", {
    controllerAs : "hlc",
    controller : herolistcontroller,
    templateUrl : "herolist/herolist.html"
});