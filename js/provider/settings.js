/**
 * Created by Moritz Egger on 9/18/15.
 */
app.factory('settingsFactory',function($q){
    var config = require('./conf/config.json');

    function initDefaultConfig(){
        var defaults;
        defaults.language = "en";
        defaults.anime_stream = "torrent";
        defaults.style.name = "skin-red";
        defaults.style.path = "./plugins/AdminLTE/dist/css/skins/skin-red.min.css";

        logger.info("Default Settings init", defaults);

        config = defaults;
    }

    return{
        getConfigJSON:function(){
            return JSON.stringify(config);
        },
        getConfig:function(){
            return config;
        }
    }

})