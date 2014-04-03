define(function (require) {

     var $  = require('jquery'),
      _  = require('underscore'),
    Backbone = require('backbone');

    Backbone.View.prototype.close = function (){
        console.log('Closing view ' + this);
        if (this.beforeClose) {
            this.beforeClose();
        }
        this.remove();
        this.unbind();
    };

    Backbone.sync = function (method, model, options) {

        var dao = new model.dao(window.db);

        switch (method) {
            case "read":
                if (model.nombre)
                    dao.find(model, function (data) {
                        options.success(data);
                    });
                else
                    dao.findAll(function (data) {
                        options.success(data);
                    });
                break;
            case "create":
                dao.create(model, function (data) {
                    options.success(data);
                });
                break;
            case "update":
                dao.update(model, function (data) {
                    options.success(data);
                });
                break;
            case "delete":
                dao.destroy(model, function (data) {
                    options.success(data);
                });
                break;
        }

    };
});