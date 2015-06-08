(function() {
  define(function(require) {
    var Main_App, PAGE, ko;
    ko = require('knockout');
    PAGE = {
      SETTINGS: {
        name: "controllers/settings",
        template: "settings"
      },
      TIMERS: "timers"
    };
    return Main_App = (function() {
      function Main_App() {
        this.page = ko.observable(PAGE.SETTINGS);
      }

      return Main_App;

    })();
  });

}).call(this);
