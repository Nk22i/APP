define(['jquery', 'underscore', 'Backbone', '../views/MainView', '../views/InstitucionalView','../views/RegionalesView','../views/RegionalView','../views/SecretariasView','jqm'],
    function ($, _, Backbone, HomeView, InstitucionalView, RegionalesView, RegionalView, SecretariasView, jqm) {

    var Router = Backbone.Router.extend({
    routes:{
        "":"home",
        "Institucional":"Institucional",
        "Secretarias":"Secretarias",
        "Regionales":"Regionales",
        "Carreras":"Carreras"
    },

    initialize:function (windowel) {
        this.windowel = windowel;
        // Handle back button throughout the application
        $('.back').live('click', function(event) {
            window.history.back();
            return false;
        });
        this.firstPage = true;
    },

    home:function () {
        console.log('#home');
        this.changePage(new HomeView());
    },

    Institucional:function () {
        console.log('#viewInstitucional');
        this.changePage(new InstitucionalView());
    },

    Regionales:function () {
        //if(Reg==undefined){
            console.log('#viewRegionales');
            this.changePage(new RegionalesView());    
        //}else{
        //    console.log('#viewRegional');
        //   this.changePage(new RegionalView({model:{'nombre':'Reg'}}));
        //}
        
    },
    Secretarias:function () {
        //if(Sec==undefined){
            console.log('#viewSecretarias');
            this.changePage(new SecretariasView());    
       // }else{
        //    console.log('#viewSecretaria');
        //    this.changePage(new SecretariaView({model:{'nombre':'Sec'}}));
        //}
        
    },

    changePage:function (page) {
        console.log(page);
        $(page.el).attr('data-role', 'page');
        page.render();
        $('body').append($(page.el));
        var transition = $.mobile.defaultPageTransition;
        // We don't want to slide the first page
        if (this.firstPage) {
            transition = 'none';
            this.firstPage = false;
        }
        console.log($.mobile);
        $.mobile.changePage($(page.el), {changeHash:false, transition: transition});
    }

    });
    return Router;

});