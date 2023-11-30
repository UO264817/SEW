"use strict";
class Fondo {


    constructor() {
        let flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"
        $.getJSON(flickrAPI,
            {
                tags: camerun.getCapital() + "," + camerun.getNombre(),
                tagmode: "any",
                format: "json"
            })
            .done(function (data) {
                $("body").css({
                    "background-image": "url(" + data.items[0].media.m.replace('_m', '_b') + ")",
                    "background-position": "top",
                    "background-repeat": "no-repeat",
                    "background-size": "cover",
                    "height": "100%"
                });
            });
    }
}

var fondo = new Fondo()