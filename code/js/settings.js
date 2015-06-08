(function() {
  define(function(require) {
    var $, Main_VM, ToHMM, ko;
    ko = require('knockout');
    $ = require("jquery");
    ToHMM = function(minutes) {
      var h, m;
      h = Math.floor(minutes / 60);
      m = minutes % 60;
      if (m < 10) {
        m = "0" + m;
      }
      return "" + h + ":" + m;
    };
    return Main_VM = (function() {
      function Main_VM() {
        var i, j, k, minutes, options, ref, ref1;
        this.washer_options = ko.observableArray([]);
        this.dryer_options = ko.observableArray([]);
        this.snooze_options = ko.observableArray([]);
        options = [];
        for (minutes = i = 10, ref = 4 * 50; i <= ref; minutes = i += 5) {
          options.push({
            name: ToHMM(minutes),
            minutes: minutes
          });
        }
        this.washer_options(options);
        options = [];
        for (minutes = j = 10, ref1 = 4 * 50; j <= ref1; minutes = j += 5) {
          options.push({
            name: ToHMM(minutes),
            minutes: minutes
          });
        }
        this.dryer_options(options);
        options = [];
        for (minutes = k = 1; k <= 30; minutes = ++k) {
          options.push({
            name: ToHMM(minutes),
            minutes: minutes
          });
        }
        this.snooze_options(options);
        this.washer_time = ko.observable(40);
        this.dryer_time = ko.observable(60);
        this.snooze_time = ko.observable(10);
        this.washer_time.subscribe(function(nV) {
          return console.log(nV);
        });
        return;
      }

      return Main_VM;

    })();
  });

}).call(this);
