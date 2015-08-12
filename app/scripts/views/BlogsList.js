/*global Catblog, Backbone, JST*/

Catblog.Views = Catblog.Views || {};

(function () {
  'use strict';

  Catblog.Views.BlogsList = Backbone.View.extend({

    template: JST['app/scripts/templates/BlogsList.ejs'],

    itemView: Catblog.Views.BlogItem,

    tagName: 'ul',

    id: '',

    className: '',

    events: {},

    initialize: function () {
      this.listenTo(this.collection, 'sync', this.render);
    },

    render: function () {
      var view = this
      this.$el.html(this.template());
      _.each(this.collection.models, function(model) {
        view.addOne(model)
      })
    },

    addOne: function(model) {
      var itemView = new this.itemView({model: model})
      itemView.render()
      this.$el.append(itemView.el)
    }

  });

})();
