define(['jquery', 'underscore', 'Backbone', 'text!./InstitucionalView.tpl'],
    function ($, _, Backbone, InstitucionalTemplate) {

        var MainView = Backbone.View.extend({

            initialize:function (options) {
            },

            render:function () {
                // Setting view HTML from a template
                this.$el.html(InstitucionalTemplate);

                return this;
            }

        });

        return MainView;
    });