(function() {
  define(function(require) {
    var $, Settings_VM, ToHMM, ko;
    ko = require('knockout');
    $ = require("jquery");
    require("kox_lawnchair");
    ToHMM = function(minutes) {
      var h, m;
      h = Math.floor(minutes / 60);
      m = minutes % 60;
      if (m < 10) {
        m = "0" + m;
      }
      return "" + h + ":" + m;
    };
    return Settings_VM = (function() {
      function Settings_VM() {
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
        this.washer_time = ko.observable(40).extend({
          store_locally: {
            key: "washer_time"
          }
        });
        this.dryer_time = ko.observable(60).extend({
          store_locally: {
            key: "dryer_time"
          }
        });
        this.snooze_time = ko.observable(10).extend({
          store_locally: {
            key: "snooze_time"
          }
        });
        return;
      }

      return Settings_VM;

    })();
  });

}).call(this);
