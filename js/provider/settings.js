/**
 * Created by Moritz Egger on 9/18/15.
 */
app.factory('settingsFactory',function($q){
    var config = JSON.parse(require('./conf/config.json'));

    return{
        getConfigJSON:function(){
            return JSON.stringify(config);
        }
    }

})