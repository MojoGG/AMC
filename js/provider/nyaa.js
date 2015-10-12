app.factory('NyaaFactory',function($q){

    return{
        getItems:function(searchterm){
            var defer = $q.defer();

            return defer.promise;
        }
    }
});