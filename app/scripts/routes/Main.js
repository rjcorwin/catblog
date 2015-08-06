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
      var aboutView = new Catblog.Views.About()
      aboutView.render()
      $('.main').html(aboutView.el)
    },

    contact: function() {
      $('.main').html('Contact the Cat Blog.')
      var contactModel = new Catblog.Models.Contact()
      contactModel.set('name', 'Jerry')
      contactModel.set('email', 'jerry@isovera.com')
      var contactView = new Catblog.Views.Contact({model: contactModel})
      contactView.render()
      $('.main').append(contactView.el)
      window.contactModel = contactModel


    }

  });

})();
