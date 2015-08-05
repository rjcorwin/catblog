/*global Catblog, $*/


window.Catblog = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    'use strict';
    var router = new Catblog.Routers.Main()
    Backbone.history.start()
  }
};

$(document).ready(function () {
  'use strict';
  Catblog.init();
});
