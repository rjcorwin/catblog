/*global Catblog, Backbone*/

Catblog.Routers = Catblog.Routers || {};

(function () {
  'use strict';

  Catblog.Routers.Main = Backbone.Router.extend({
    
    routes: {
      '': 'home',
      'about': 'about',
      'contact': 'contact'
    },

    home: function() {
      $('.main').html('Welcome the Cat Blog.')
    },

    about: function() {
      $('.main').html('All about the Cat Blog.')
    },

    contact: function() {
      $('.main').html('Contact the Cat Blog.')
    }

  });

})();
