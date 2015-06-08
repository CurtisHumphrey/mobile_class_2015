define (require) ->
  ko = require 'knockout'

  PAGE = 
    SETTINGS: "settings"
    TIMERS: "timers"

  class Main_App
    constructor: ->
      #To magic here!
      @page = ko.observable PAGE.TIMERS

    Open_Settings: (d, e) => 
      @page PAGE.SETTINGS

    Open_Timers: (d, e) =>
      @page PAGE.TIMERS

  return new Main_App()