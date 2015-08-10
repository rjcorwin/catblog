/*global Catblog, Backbone*/

Catblog.Collections = Catblog.Collections || {};

(function () {
  'use strict';

  Catblog.Collections.Blogs = Backbone.Collection.extend({

    model: Catblog.Models.Blog,

    url: function() {
      return Catblog.server + '/api/blogs'
    }

  });

})();
