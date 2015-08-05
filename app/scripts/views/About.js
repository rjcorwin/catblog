/*global Catblog, Backbone, JST*/

Catblog.Views = Catblog.Views || {};

(function () {
  'use strict';

  Catblog.Views.About = Backbone.View.extend({

    template: JST['app/scripts/templates/About.ejs'],

    tagName: 'div',

    id: '',

    className: '',

    events: {},

    initialize: function () {
    },

    render: function () {
      this.$el.html(this.template());
    }

  });

})();
