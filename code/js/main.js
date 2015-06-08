(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(function(require) {
    var Main_App, PAGE, ko;
    ko = require('knockout');
    PAGE = {
      SETTINGS: "settings",
      TIMERS: "timers"
    };
    Main_App = (function() {
      function Main_App() {
        this.Open_Timers = bind(this.Open_Timers, this);
        this.Open_Settings = bind(this.Open_Settings, this);
        this.page = ko.observable(PAGE.TIMERS);
      }

      Main_App.prototype.Open_Settings = function(d, e) {
        return this.page(PAGE.SETTINGS);
      };

      Main_App.prototype.Open_Timers = function(d, e) {
        return this.page(PAGE.TIMERS);
      };

      return Main_App;

    })();
    return new Main_App();
  });

}).call(this);
