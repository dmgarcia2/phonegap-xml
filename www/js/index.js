"use strict";

var phonegap = {};

phonegap.app = {
	
    initialize: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        StatusBar.hide();
        FastClick.attach(document.body);

        phonegap.app.myFunction();
    },

    myFunction: function() {
        $.get("https://itunes.apple.com/es/rss/topaudiobooks/limit=10/xml", function(xml) {
            var variable = (
                $(xml).find('entry').each(function() {
                    console.log($(this).find("title").text());
                    var html = '<li>'+ $(this).find("title").text() + '</li>';
                    $("#table").append(html).trigger('create').listview('refresh');
                }));
        }).fail(function(error) {
            alert(error.code);
        });
    }

};
