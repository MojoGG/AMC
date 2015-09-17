app.factory('mangaListFactory',function($q){
    var async = require('async');
    var Xray = require('x-ray');
    var X = Xray();
    var _ = require('underscore')

    var mangas = loadMangas().then(function(data){
        return data;
    })

    function loadMangas(){
        //console.log("starting Download!");
        var defer = $q.defer();
        X('http://mangafox.me/manga', 'div.left > div.manga_list > ul > li',[{
            title: 'a',
            link: 'a@href'
        }])(function(err, obj) {
            console.log("Mangalist Download Done " + err);
            //console.log(JSON.stringify(obj))
            defer.resolve(obj);
        })
        return defer.promise;
    }

    function loadMangaDetail(m,id){
        var defer = $q.defer();
        X(m["link"], 'div.left',[{
            img:'div.cover > img@src',
            desc:'p.summary*',
            chapters:X('.chlist > li > div > h3 ',[{
                title:'span.title*',
                chapter:'a',
                link:'a@href'
            }])
        }])(function(err, obj) {
            console.log("Single Manga Download Done " + err);
            //console.log(JSON.stringify(obj[1]["chapters"]));
            obj[1]["id"] = id;
            defer.resolve(obj[1]);
        })
        return defer.promise;
    }

    function getChapterPageCount(clink){
        var defer = $q.defer();
        X(clink, 'select > option',[{
            pagecout:''
        }])(function(err, obj) {
            console.log(obj.length)
            defer.resolve(obj)
        });
        return defer.promise;
    }

    function loadChapter(clink){
        console.log(clink);
        var defer = $q.defer();
        getChapterPageCount(clink).then(function(data){
            X(clink,'div#viewer',[{
                img:'#image@src'
            }]).paginate('div#viewer > a@href').limit(data.length)(function(err,imgdata){
                console.log(JSON.stringify(imgdata));
                defer.resolve(imgdata);
            });
        })

        return defer.promise;
    }

    return {
        getMangaList : function(){
            return mangas;
        },
        getSingleManga : function(id){
            return mangas.then(function(data){
                //console.log(JSON.stringify(data))
                return loadMangaDetail(data[id],id).then(function(details){
                    //console.log(JSON.stringify(details));
                    //console.log(JSON.stringify(data[id]));
                    mangas[id] = _.extend(data[id],details);
                    //console.log(JSON.stringify(mangas[id]))
                    return mangas[id];
                })
            })
        },
        getChapter: function(mid, cid){
            return mangas.then(function(data){
                //console.log(JSON.stringify(data))
                return loadMangaDetail(data[mid],mid).then(function(details){
                    //console.log(JSON.stringify(details));
                    //console.log(JSON.stringify(data[id]));
                    mangas[mid] = _.extend(data[mid],details);
                    //console.log(JSON.stringify(mangas[id]))
                    return loadChapter(data[mid]["chapters"][cid]["link"]).then(function(chapterdetails){
                        //console.log(JSON.stringify(chapterdetails));
                        mangas[mid]["chapters"][cid]["images"] = chapterdetails;
                        return mangas[mid]["chapters"][cid];
                    })
                })
            })
        }
    }
})