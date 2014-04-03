define(['jquery', 'underscore', 'Backbone', 'text!./RegionalView.tpl'],
    function ($, _, Backbone, RegionalTemplate) {

        var RegionalView = Backbone.View.extend({

            initialize:function (options) {
            },

            render:function () {
                // Setting view HTML from a template
                this.$el.html(RegionalTemplate);

                return this;
            }

        });

        return RegionalView;
    });