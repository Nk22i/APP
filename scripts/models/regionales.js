define(function (require) {
 
    "use strict";
 
    var $           = require('jquery'),
        Backbone    = require('backbone'),
        BackbonePersistance = require('app/config/backbone-persistance-config'),
 
    Regional = Backbone.Model.extend({
        urlRoot: "http://coenraets.org/backbone-cellar/part1/api/wines",
        dao: BackbonePersistance.REGIONALES_DAO,
    });
 
    RegionalCollection = Backbone.Collection.extend({
        model: Regional,
        url: "http://coenraets.org/backbone-cellar/part1/api/wines",
        dao: BackbonePersistance.REGIONALES_DAO, //ESPECIFICO EL DATAOBJECT
    });

 
    return {
        Regional: Regional,
        RegionalCollection: RegionalCollection
    };
 
});