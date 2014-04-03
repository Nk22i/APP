define(['jquery', 'underscore', 'Backbone', 'text!./SecretariasView.tpl'],
    function ($, _, Backbone, SecretariasTemplate) {

        var SecretariasView = Backbone.View.extend({

            initialize:function (options) {
            },

            render:function () {
                // Setting view HTML from a template
                this.$el.html(SecretariasTemplate);

                return this;
            }

        });

        return SecretariasView;
    });