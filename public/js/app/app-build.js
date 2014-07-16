var $__app_45_build__ = (function() {
  "use strict";
  var __moduleName = "app-build";
  var $__app_45_build__ = (function() {
    "use strict";
    var __moduleName = "app-build";
    System.register("app-build", [], function($__0) {
      "use strict";
      var __moduleName = "app-build";
      var $__app_45_build__,
          $__main__,
          $__models_47_human__,
          $__models_47_humans__,
          $__components_47__45_humans_45_list__;
      return {
        exports: {},
        execute: function() {
          $__app_45_build__ = (function() {
            "use strict";
            var __moduleName = "app-build";
            var $__main__ = (function() {
              "use strict";
              var __moduleName = "main";
              var Application = function Application() {
                $("h1").html("E6 rocks!");
              };
              ($traceurRuntime.createClass)(Application, {}, {});
              $((function() {
                new Application();
              }));
              return {};
            })();
            var $__models_47_human__ = (function() {
              "use strict";
              var __moduleName = "models/human";
              var Human = function Human(args) {
                $traceurRuntime.superCall(this, $Human.prototype, "constructor", [args]);
                Object.defineProperty(this, "firstName", {
                  get: function() {
                    return this.get("firstName");
                  },
                  set: function(value) {
                    this.set("firstName", value);
                  }
                });
                Object.defineProperty(this, "lastName", {
                  get: function() {
                    return this.get("lastName");
                  },
                  set: function(value) {
                    this.set("lastName", value);
                  }
                });
              };
              var $Human = Human;
              ($traceurRuntime.createClass)(Human, {}, {}, Backbone.Model);
              var $__default = Human;
              return {get default() {
                  return $__default;
                }};
            })();
            var $__models_47_humans__ = (function() {
              "use strict";
              var __moduleName = "models/humans";
              var Human = $__models_47_human__.default;
              var Humans = function Humans(args) {
                this.model = Human;
                this.url = "/humans";
                $traceurRuntime.superCall(this, $Humans.prototype, "constructor", [args]);
              };
              var $Humans = Humans;
              ($traceurRuntime.createClass)(Humans, {}, {}, Backbone.Collection);
              var $__default = Humans;
              return {get default() {
                  return $__default;
                }};
            })();
            var $__components_47_humans_45_list__ = (function() {
              "use strict";
              var __moduleName = "components/humans-list";
              var Human = $__models_47_human__.default;
              var Humans = $__models_47_humans__.default;
              Polymer("humans-list", {
                ready: function() {
                  var $__6 = this;
                  this.humansCollection = new Humans();
                  this.humansCollection.on({"fetch": this.update()});
                  this.humansCollection.fetch().done((function() {
                    if ($__6.humansCollection.size() == 0) {
                      var bob = new Human({
                        firstName: 'Bob',
                        lastName: 'Morane'
                      });
                      var john = new Human({
                        firstName: 'John',
                        lastName: 'Doe'
                      });
                      var jane = new Human({
                        firstName: 'Jane',
                        lastName: 'Doe'
                      });
                      bob.save().done((function() {
                        return john.save().done((function() {
                          return jane.save().done((function() {
                            return $__6.humansCollection.fetch().done(console.log("humans created:", $__6.humansCollection));
                          }));
                        }));
                      }));
                    } else {
                      console.log("humans loaded:", $__6.humansCollection);
                    }
                  }));
                },
                update: function() {
                  this.humans = this.humansCollection.models;
                }
              });
              return {};
            })();
            return {};
          })();
          $__main__ = (function() {
            "use strict";
            var __moduleName = "main";
            var Application = function Application() {
              $("h1").html("E6 rocks!");
            };
            ($traceurRuntime.createClass)(Application, {}, {});
            $((function() {
              new Application();
            }));
            return {};
          })();
          $__models_47_human__ = (function() {
            "use strict";
            var __moduleName = "models/human";
            var Human = function Human(args) {
              $traceurRuntime.superCall(this, $Human.prototype, "constructor", [args]);
              Object.defineProperty(this, "firstName", {
                get: function() {
                  return this.get("firstName");
                },
                set: function(value) {
                  this.set("firstName", value);
                }
              });
              Object.defineProperty(this, "lastName", {
                get: function() {
                  return this.get("lastName");
                },
                set: function(value) {
                  this.set("lastName", value);
                }
              });
            };
            var $Human = Human;
            ($traceurRuntime.createClass)(Human, {}, {}, Backbone.Model);
            var $__default = Human;
            return {get default() {
                return $__default;
              }};
          })();
          $__models_47_humans__ = (function() {
            "use strict";
            var __moduleName = "models/humans";
            var Human = $__models_47_human__.default;
            var Humans = function Humans(args) {
              this.model = Human;
              this.url = "/humans";
              $traceurRuntime.superCall(this, $Humans.prototype, "constructor", [args]);
            };
            var $Humans = Humans;
            ($traceurRuntime.createClass)(Humans, {}, {}, Backbone.Collection);
            var $__default = Humans;
            return {get default() {
                return $__default;
              }};
          })();
          $__components_47__45_humans_45_list__ = (function() {
            "use strict";
            var __moduleName = "components/-humans-list";
            var Human = $__models_47_human__.default;
            var Humans = $__models_47_humans__.default;
            Polymer("humans-list", {
              ready: function() {
                var $__6 = this;
                this.humansCollection = new Humans();
                this.humansCollection.on({"fetch": this.update()});
                this.humansCollection.fetch().done((function() {
                  if ($__6.humansCollection.size() == 0) {
                    var bob = new Human({
                      firstName: 'Bob',
                      lastName: 'Morane'
                    });
                    var john = new Human({
                      firstName: 'John',
                      lastName: 'Doe'
                    });
                    var jane = new Human({
                      firstName: 'Jane',
                      lastName: 'Doe'
                    });
                    bob.save().done((function() {
                      return john.save().done((function() {
                        return jane.save().done((function() {
                          return $__6.humansCollection.fetch().done(console.log("humans created:", $__6.humansCollection));
                        }));
                      }));
                    }));
                  } else {
                    console.log("humans loaded:", $__6.humansCollection);
                  }
                }));
              },
              update: function() {
                this.humans = this.humansCollection.models;
              }
            });
            return {};
          })();
        }
      };
    });
    System.register("main", [], function($__1) {
      "use strict";
      var __moduleName = "main";
      var Application;
      return {
        exports: {},
        execute: function() {
          Application = (function() {
            var Application = function Application() {
              $("h1").html("E6 rocks!");
            };
            return ($traceurRuntime.createClass)(Application, {}, {});
          }());
          $((function() {
            new Application();
          }));
        }
      };
    });
    System.register("models/human", [], function($__3) {
      "use strict";
      var __moduleName = "models/human";
      var Human,
          $__default;
      return {
        exports: {
          get default() {
            return $__default;
          },
          set default(value) {
            $__default = value;
          }
        },
        execute: function() {
          Human = (function($__super) {
            var Human = function Human(args) {
              $traceurRuntime.superCall(this, Human.prototype, "constructor", [args]);
              Object.defineProperty(this, "firstName", {
                get: function() {
                  return this.get("firstName");
                },
                set: function(value) {
                  this.set("firstName", value);
                }
              });
              Object.defineProperty(this, "lastName", {
                get: function() {
                  return this.get("lastName");
                },
                set: function(value) {
                  this.set("lastName", value);
                }
              });
            };
            return ($traceurRuntime.createClass)(Human, {}, {}, $__super);
          }(Backbone.Model));
          $__default = Human;
        }
      };
    });
    System.register("models/humans", ["./human"], function($__5) {
      "use strict";
      var __moduleName = "models/humans";
      var Humans,
          $__default;
      return {
        exports: {
          get default() {
            return $__default;
          },
          set default(value) {
            $__default = value;
          }
        },
        execute: function() {
          ;
          Humans = (function($__super) {
            var Humans = function Humans(args) {
              this.model = $__5[0]["default"];
              this.url = "/humans";
              $traceurRuntime.superCall(this, Humans.prototype, "constructor", [args]);
            };
            return ($traceurRuntime.createClass)(Humans, {}, {}, $__super);
          }(Backbone.Collection));
          $__default = Humans;
        }
      };
    });
    System.register("components/humans-list", ["../models/human", "../models/humans"], function($__7) {
      "use strict";
      var __moduleName = "components/humans-list";
      return {
        exports: {},
        execute: function() {
          ;
          ;
          Polymer("humans-list", {
            ready: function() {
              var $__8 = this;
              this.humansCollection = new $__7[1]["default"]();
              this.humansCollection.on({"fetch": this.update()});
              this.humansCollection.fetch().done((function() {
                if ($__8.humansCollection.size() == 0) {
                  var bob = new $__7[0]["default"]({
                    firstName: 'Bob',
                    lastName: 'Morane'
                  });
                  var john = new $__7[0]["default"]({
                    firstName: 'John',
                    lastName: 'Doe'
                  });
                  var jane = new $__7[0]["default"]({
                    firstName: 'Jane',
                    lastName: 'Doe'
                  });
                  bob.save().done((function() {
                    return john.save().done((function() {
                      return jane.save().done((function() {
                        return $__8.humansCollection.fetch().done(console.log("humans created:", $__8.humansCollection));
                      }));
                    }));
                  }));
                } else {
                  console.log("humans loaded:", $__8.humansCollection);
                }
              }));
            },
            update: function() {
              this.humans = this.humansCollection.models;
            }
          });
        }
      };
    });
    return {};
  })();
  var $__main__ = (function() {
    "use strict";
    var __moduleName = "main";
    var Application = function Application() {
      $("h1").html("E6 rocks!");
    };
    ($traceurRuntime.createClass)(Application, {}, {});
    $((function() {
      new Application();
    }));
    return {};
  })();
  var $__models_47_human__ = (function() {
    "use strict";
    var __moduleName = "models/human";
    var Human = function Human(args) {
      $traceurRuntime.superCall(this, $Human.prototype, "constructor", [args]);
      Object.defineProperty(this, "firstName", {
        get: function() {
          return this.get("firstName");
        },
        set: function(value) {
          this.set("firstName", value);
        }
      });
      Object.defineProperty(this, "lastName", {
        get: function() {
          return this.get("lastName");
        },
        set: function(value) {
          this.set("lastName", value);
        }
      });
    };
    var $Human = Human;
    ($traceurRuntime.createClass)(Human, {}, {}, Backbone.Model);
    var $__default = Human;
    return {get default() {
        return $__default;
      }};
  })();
  var $__models_47_humans__ = (function() {
    "use strict";
    var __moduleName = "models/humans";
    var Human = $__models_47_human__.default;
    var Humans = function Humans(args) {
      this.model = Human;
      this.url = "/humans";
      $traceurRuntime.superCall(this, $Humans.prototype, "constructor", [args]);
    };
    var $Humans = Humans;
    ($traceurRuntime.createClass)(Humans, {}, {}, Backbone.Collection);
    var $__default = Humans;
    return {get default() {
        return $__default;
      }};
  })();
  var $__components_47_humans_45_list__ = (function() {
    "use strict";
    var __moduleName = "components/humans-list";
    var Human = $__models_47_human__.default;
    var Humans = $__models_47_humans__.default;
    Polymer("humans-list", {
      ready: function() {
        var $__6 = this;
        this.humansCollection = new Humans();
        this.humansCollection.on({"fetch": this.update()});
        this.humansCollection.fetch().done((function() {
          if ($__6.humansCollection.size() == 0) {
            var bob = new Human({
              firstName: 'Bob',
              lastName: 'Morane'
            });
            var john = new Human({
              firstName: 'John',
              lastName: 'Doe'
            });
            var jane = new Human({
              firstName: 'Jane',
              lastName: 'Doe'
            });
            bob.save().done((function() {
              return john.save().done((function() {
                return jane.save().done((function() {
                  return $__6.humansCollection.fetch().done(console.log("humans created:", $__6.humansCollection));
                }));
              }));
            }));
          } else {
            console.log("humans loaded:", $__6.humansCollection);
          }
        }));
      },
      update: function() {
        this.humans = this.humansCollection.models;
      }
    });
    return {};
  })();
  return {};
})();
var $__main__ = (function() {
  "use strict";
  var __moduleName = "main";
  var Application = function Application() {
    $("h1").html("ES6 rocks!");
  };
  ($traceurRuntime.createClass)(Application, {}, {});
  $((function() {
    new Application();
  }));
  return {};
})();
var $__models_47_human__ = (function() {
  "use strict";
  var __moduleName = "models/human";
  var Human = function Human(args) {
    $traceurRuntime.superCall(this, $Human.prototype, "constructor", [args]);
    Object.defineProperty(this, "firstName", {
      get: function() {
        return this.get("firstName");
      },
      set: function(value) {
        this.set("firstName", value);
      }
    });
    Object.defineProperty(this, "lastName", {
      get: function() {
        return this.get("lastName");
      },
      set: function(value) {
        this.set("lastName", value);
      }
    });
  };
  var $Human = Human;
  ($traceurRuntime.createClass)(Human, {}, {}, Backbone.Model);
  var $__default = Human;
  return {get default() {
      return $__default;
    }};
})();
var $__models_47_humans__ = (function() {
  "use strict";
  var __moduleName = "models/humans";
  var Human = $__models_47_human__.default;
  var Humans = function Humans(args) {
    this.model = Human;
    this.url = "/humans";
    $traceurRuntime.superCall(this, $Humans.prototype, "constructor", [args]);
  };
  var $Humans = Humans;
  ($traceurRuntime.createClass)(Humans, {}, {}, Backbone.Collection);
  var $__default = Humans;
  return {get default() {
      return $__default;
    }};
})();
var $__components_47_humans_45_list__ = (function() {
  "use strict";
  var __moduleName = "components/humans-list";
  var Human = $__models_47_human__.default;
  var Humans = $__models_47_humans__.default;
  Polymer("humans-list", {
    ready: function() {
      var $__6 = this;
      this.humansCollection = new Humans();
      this.humansCollection.on({"fetch": this.update()});
      this.humansCollection.fetch().done((function() {
        if ($__6.humansCollection.size() == 0) {
          var bob = new Human({
            firstName: 'Bob',
            lastName: 'Morane'
          });
          var john = new Human({
            firstName: 'John',
            lastName: 'Doe'
          });
          var jane = new Human({
            firstName: 'Jane',
            lastName: 'Doe'
          });
          bob.save().done((function() {
            return john.save().done((function() {
              return jane.save().done((function() {
                return $__6.humansCollection.fetch().done(console.log("humans created:", $__6.humansCollection));
              }));
            }));
          }));
        } else {
          console.log("humans loaded:", $__6.humansCollection);
        }
      }));
    },
    update: function() {
      this.humans = this.humansCollection.models;
    }
  });
  return {};
})();
