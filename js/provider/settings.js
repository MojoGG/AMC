/**
 * Created by Moritz Egger on 9/18/15.
 */
app.factory('settingsFactory',function($q){
    var config = require('./conf/config.json');

    return{
        getConfigJSON:function(){
            return JSON.stringify(config);
        },
        getConfig:function(){
            return config;
        }
    }

})