(function() {
  define(function(require) {
    var Timers, ko, main;
    ko = require("knockout");
    main = require("main");
    return Timers = (function() {
      function Timers() {
        this.washer_time = ko.observable("1:00:05");
        this.dryer_time = ko.observable("1:00:10");
        setTimeout(main.Open_Settings, 500);
        return;
      }

      return Timers;

    })();
  });

}).call(this);
