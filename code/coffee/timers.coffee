define (require) ->
  ko = require "knockout"
  main = require "main"

  class Timers
    constructor: () ->
      @washer_time = ko.observable "1:00:05"
      @dryer_time  = ko.observable "1:00:10"

      setTimeout main.Open_Settings, 500

      return