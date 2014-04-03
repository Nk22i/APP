define(['jquery', 'underscore', 'Backbone', 'text!./RegionalesView.tpl'],
    function ($, _, Backbone, RegionalesTemplate) {

        var RegionalesView = Backbone.View.extend({

            initialize:function (options) {
            },

            render:function () {
                // Setting view HTML from a template
                this.$el.html(RegionalesTemplate);

                return this;
            }

        });

        return RegionalesView;
    });