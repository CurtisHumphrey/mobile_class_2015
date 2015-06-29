(function() {
  requirejs.config({
    paths: {
      text: "../../bower_components/requirejs-text/text",
      knockout: "../../bower_components/knockout/dist/knockout.debug",
      knockout_amd: "../../bower_components/knockout-amd-helpers/build/knockout-amd-helpers",
      jquery: "../../bower_components/jquery/dist/jquery",
      bootstrap: "../../bower_components/bootstrap/dist/js/bootstrap",
      lawnchair: "../../bower_components/kox_lawnchair/lawnchair",
      lawnchair_sqlite: "../../bower_components/kox_lawnchair/adapters/webkit-sqlite",
      kox_lawnchair: "../../bower_components/kox_lawnchair/kox_lawnchair"
    },
    baseUrl: '/code/js',
    shim: {
      'bootstrap': {
        deps: ['jquery'],
        exports: 'jQuery'
      },
      'lawnchair': {
        exports: 'Lawnchair'
      },
      'lawnchair_sqlite': {
        deps: ['lawnchair'],
        exports: 'Lawnchair'
      }
    }
  });

  define(['knockout', 'knockout_amd', 'bootstrap'], function(ko, amd, bootstrap) {
    ko.amdTemplateEngine.defaultPath = "/ko_templates";
    ko.amdTemplateEngine.defaultSuffix = ".html";
    ko.amdTemplateEngine.defaultRequireTextPluginName = "text";
    $(document).ready(function() {
      console.log("jQuery Ready");
      return ko.applyBindings();
    });
  });

}).call(this);
