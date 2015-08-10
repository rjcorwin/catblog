/*global Catblog, Backbone*/

Catblog.Models = Catblog.Models || {};

(function () {
  'use strict';

  Catblog.Models.Blog = Backbone.Model.extend({

    url: '',

    initialize: function() {
    },

    defaults: {
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    }
  });

})();
