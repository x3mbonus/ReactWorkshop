// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"Fact.ts":[function(require,module,exports) {
"use strict";

exports.__esModule = true;

var Fact =
/** @class */
function () {
  function Fact() {}

  return Fact;
}();

exports["default"] = Fact;

var Upvote =
/** @class */
function () {
  function Upvote() {}

  return Upvote;
}();

exports.Upvote = Upvote;

var User =
/** @class */
function () {
  function User() {}

  return User;
}();

exports.User = User;

var Name =
/** @class */
function () {
  function Name() {}

  return Name;
}();

exports.Name = Name;
},{}],"facts.json":[function(require,module,exports) {
module.exports = {
  "all": [{
    "_id": "5887e1d85c873e0011036889",
    "text": "Cats make about 100 different sounds. Dogs make only about 10.",
    "upvotes": [{
      "user": "588e677c06ac2b00110e59ae"
    }, {
      "user": "588e6e8806ac2b00110e59c3"
    }]
  }, {
    "_id": "5894af975cdc7400113ef7f9",
    "text": "The technical term for a cat’s hairball is a bezoar.",
    "user": {
      "_id": "587288f6e6f85e64ae1c7ef7",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "5872812829f7f43cacb0c4de"
    }]
  }, {
    "_id": "58e007db0aac31001185ecf7",
    "text": "There are cats who have survived falls from over 32 stories (320 meters) onto concrete.",
    "user": {
      "_id": "58e007480aac31001185ecef",
      "name": {
        "first": "Kasimir",
        "last": "Schulz"
      }
    },
    "upvotes": [{
      "user": "5872812829f7f43cacb0c4de"
    }]
  }, {
    "_id": "58e008780aac31001185ed05",
    "text": "Owning a cat can reduce the risk of stroke and heart attack by a third.",
    "user": {
      "_id": "58e007480aac31001185ecef",
      "name": {
        "first": "Kasimir",
        "last": "Schulz"
      }
    },
    "upvotes": [{
      "user": "5872812829f7f43cacb0c4de"
    }]
  }, {
    "_id": "58e008800aac31001185ed07",
    "text": "Wikipedia has a recording of a cat meowing, because why not?",
    "user": {
      "_id": "58e007480aac31001185ecef",
      "name": {
        "first": "Kasimir",
        "last": "Schulz"
      }
    },
    "upvotes": [{
      "user": "5872812829f7f43cacb0c4de"
    }]
  }, {
    "_id": "58e008b80aac31001185ed0d",
    "text": "Adult cats only meow to communicate with humans.",
    "user": {
      "_id": "58e007480aac31001185ecef",
      "name": {
        "first": "Kasimir",
        "last": "Schulz"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5910d0475467050020a4dac5",
    "text": "Peltaco's cat Hemingway is the worlds best cat.",
    "user": {
      "_id": "58e007480aac31001185ecef",
      "name": {
        "first": "Kasimir",
        "last": "Schulz"
      }
    },
    "upvotes": [{
      "user": "58e2757db1ae2a001173061d"
    }]
  }, {
    "_id": "58e0086f0aac31001185ed02",
    "text": "Cats can't taste sweetness.",
    "user": {
      "_id": "58e007480aac31001185ecef",
      "name": {
        "first": "Kasimir",
        "last": "Schulz"
      }
    },
    "upvotes": [{
      "user": "588e6e8806ac2b00110e59c3"
    }]
  }, {
    "_id": "58f9b96132ffea00208fe9b7",
    "text": "rerewr",
    "upvotes": [{
      "user": "5872812829f7f43cacb0c4de"
    }, {
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5b0c5e3e7ab3c50014df65fe",
    "text": "People who own cats have on average 2.1 pets per household, where dog owners have about 1.6.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "58e009390aac31001185ed10",
    "text": "Cats are often lactose intolerant, so stop givin' them milk!",
    "user": {
      "_id": "58e007480aac31001185ecef",
      "name": {
        "first": "Kasimir",
        "last": "Schulz"
      }
    },
    "upvotes": [{
      "user": "588e6e8806ac2b00110e59c3"
    }]
  }, {
    "_id": "58e009420aac31001185ed11",
    "text": "Basically all cartoon cats lied to us: Raw fish is off the table for cats as well.",
    "user": {
      "_id": "58e007480aac31001185ecef",
      "name": {
        "first": "Kasimir",
        "last": "Schulz"
      }
    },
    "upvotes": [{
      "user": "588e6e8806ac2b00110e59c3"
    }]
  }, {
    "_id": "58e009550aac31001185ed12",
    "text": "The oldest cat video on YouTube dates back to 1894.",
    "user": {
      "_id": "58e007480aac31001185ecef",
      "name": {
        "first": "Kasimir",
        "last": "Schulz"
      }
    },
    "upvotes": [{
      "user": "588e6e8806ac2b00110e59c3"
    }, {
      "user": "5872812829f7f43cacb0c4de"
    }]
  }, {
    "_id": "58e009790aac31001185ed14",
    "text": "The technical term for \"hairball\" is \"bezoar.\"",
    "user": {
      "_id": "58e007480aac31001185ecef",
      "name": {
        "first": "Kasimir",
        "last": "Schulz"
      }
    },
    "upvotes": [{
      "user": "588e6e8806ac2b00110e59c3"
    }]
  }, {
    "_id": "58e00a090aac31001185ed16",
    "text": "Cats make more than 100 different sounds whereas dogs make around 10.",
    "user": {
      "_id": "58e007480aac31001185ecef",
      "name": {
        "first": "Kasimir",
        "last": "Schulz"
      }
    },
    "upvotes": [{
      "user": "588e6e8806ac2b00110e59c3"
    }]
  }, {
    "_id": "58e00a120aac31001185ed17",
    "text": "A cat's brain is 90% similar to a human's — more similar than to a dog's.",
    "user": {
      "_id": "58e007480aac31001185ecef",
      "name": {
        "first": "Kasimir",
        "last": "Schulz"
      }
    },
    "upvotes": [{
      "user": "588e6e8806ac2b00110e59c3"
    }]
  }, {
    "_id": "58e00a1a0aac31001185ed18",
    "text": "Cats and humans have nearly identical sections of the brain that control emotion.",
    "user": {
      "_id": "58e007480aac31001185ecef",
      "name": {
        "first": "Kasimir",
        "last": "Schulz"
      }
    },
    "upvotes": [{
      "user": "588e6e8806ac2b00110e59c3"
    }]
  }, {
    "_id": "58e00b2b0aac31001185ed1f",
    "text": "A cat has five toes on his front paws, and four on the back, unless he's a polydactyl.",
    "user": {
      "_id": "58e007480aac31001185ecef",
      "name": {
        "first": "Kasimir",
        "last": "Schulz"
      }
    },
    "upvotes": [{
      "user": "588e6e8806ac2b00110e59c3"
    }, {
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "58e00b450aac31001185ed21",
    "text": "There are 45 Hemingway cats living at the author's former home in Key West, Fla.",
    "user": {
      "_id": "58e007480aac31001185ecef",
      "name": {
        "first": "Kasimir",
        "last": "Schulz"
      }
    },
    "upvotes": [{
      "user": "588e6e8806ac2b00110e59c3"
    }]
  }, {
    "_id": "58e00b560aac31001185ed23",
    "text": "Abraham Lincoln kept four cats in the White House.",
    "user": {
      "_id": "58e007480aac31001185ecef",
      "name": {
        "first": "Kasimir",
        "last": "Schulz"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }, {
      "user": "5b8fe52fb764b700143d66b9"
    }]
  }, {
    "_id": "58e00be30aac31001185edfe",
    "text": "Cats use their whiskers to detect if they can fit through a space.",
    "user": {
      "_id": "58e007480aac31001185ecef",
      "name": {
        "first": "Kasimir",
        "last": "Schulz"
      }
    },
    "upvotes": [{
      "user": "588e6e8806ac2b00110e59c3"
    }]
  }, {
    "_id": "58f89cff11658e00113ddd26",
    "text": "Cats love to eat olives or for that matter anything preserved in brine.",
    "user": {
      "_id": "58f89c8d11658e00113ddd24",
      "name": {
        "first": "Malvika",
        "last": "Tewari"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }, {
      "user": "5872812829f7f43cacb0c4de"
    }]
  }, {
    "_id": "590b9d90229d260020af0b06",
    "text": "Evidence suggests domesticated cats have been around since 3600 B.C., 2,000 years before Egypt's pharaohs.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "591d9b2f227c1a0020d26823",
    "text": "Every year, nearly four million cats are eaten in China as a delicacy.",
    "user": {
      "_id": "587288f6e6f85e64ae1c7ef7",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "59057485ed3e3800204fc406"
    }]
  }, {
    "_id": "58923f2fc3878c0011784c79",
    "text": "I don't know anything about cats.",
    "user": {
      "_id": "5887e9f65c873e001103688d",
      "name": {
        "first": "Jackson",
        "last": "Sippe"
      }
    },
    "upvotes": [{
      "user": "588e5fe7bf04070011a456a7"
    }]
  }, {
    "_id": "58e007f50aac31001185ecf8",
    "text": "A group of cats is called a clowder.",
    "user": {
      "_id": "58e007480aac31001185ecef",
      "name": {
        "first": "Kasimir",
        "last": "Schulz"
      }
    },
    "upvotes": [{
      "user": "588e6e8806ac2b00110e59c3"
    }, {
      "user": "5ba514d4ea48490014dc19ac"
    }]
  }, {
    "_id": "58e008340aac31001185ecfb",
    "text": "Cats sleep 70% of their lives.",
    "user": {
      "_id": "58e007480aac31001185ecef",
      "name": {
        "first": "Kasimir",
        "last": "Schulz"
      }
    },
    "upvotes": [{
      "user": "588e6e8806ac2b00110e59c3"
    }, {
      "user": "5872812829f7f43cacb0c4de"
    }, {
      "user": "5ba514d4ea48490014dc19ac"
    }]
  }, {
    "_id": "58e00b8b0aac31001185edf8",
    "text": "A cat can jump up to six times its length.",
    "user": {
      "_id": "58e007480aac31001185ecef",
      "name": {
        "first": "Kasimir",
        "last": "Schulz"
      }
    },
    "upvotes": [{
      "user": "588e6e8806ac2b00110e59c3"
    }]
  }, {
    "_id": "58e00b970aac31001185edf9",
    "text": "A house cat is faster than Usain Bolt.",
    "user": {
      "_id": "58e007480aac31001185ecef",
      "name": {
        "first": "Kasimir",
        "last": "Schulz"
      }
    },
    "upvotes": [{
      "user": "5872812829f7f43cacb0c4de"
    }, {
      "user": "5ba514d4ea48490014dc19ac"
    }]
  }, {
    "_id": "58e00c080aac31001185ee01",
    "text": "Cats only sweat through their foot pads.",
    "user": {
      "_id": "58e007480aac31001185ecef",
      "name": {
        "first": "Kasimir",
        "last": "Schulz"
      }
    },
    "upvotes": [{
      "user": "588e6e8806ac2b00110e59c3"
    }]
  }, {
    "_id": "590c752b5363e000200d5141",
    "text": "Kangaroos can't hop backwards",
    "user": {
      "_id": "590c74045363e000200d5140",
      "name": {
        "first": "Hampton",
        "last": "McGrath"
      }
    },
    "upvotes": [{
      "user": "59057485ed3e3800204fc406"
    }]
  }, {
    "_id": "58e00b4d0aac31001185ed22",
    "text": "Original kitty litter was made out of sand but it was replaced by more absorbent clay in 1948.",
    "user": {
      "_id": "58e007480aac31001185ecef",
      "name": {
        "first": "Kasimir",
        "last": "Schulz"
      }
    },
    "upvotes": [{
      "user": "588e6e8806ac2b00110e59c3"
    }, {
      "user": "59057485ed3e3800204fc406"
    }, {
      "user": "5ba514d4ea48490014dc19ac"
    }]
  }, {
    "_id": "591d9bb2227c1a0020d26826",
    "text": "The CIA spent US$20 million in the 60s training cats to spy on the Soviets. The first spy cat was hit by a taxi.",
    "user": {
      "_id": "587288f6e6f85e64ae1c7ef7",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "59057485ed3e3800204fc406"
    }, {
      "user": "5ba514d4ea48490014dc19ac"
    }]
  }, {
    "_id": "599f89639a11040c4a163440",
    "text": "Here is a video of some cats in zero gravity. youtu.be/O9XtK6R1QAk",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "5905764caa88af0020f310be"
    }]
  }, {
    "_id": "59cd7a97c828120020f7d3a1",
    "text": "Since cats treat us like cats and depend on us for things like food, water, and opening the door to let them out, they do recognize, that we are in some way in charge — the “big cat” in the shared territory. As territorial animals, our cats are constantly wondering why we’re not doing other cat things that the big cat would normally do in their territory. In fact, the “let me in, let me out, let me in” phenomenon is a good example. The bigger cat ostensibly rules the territory and therefore should be the one patrolling and marking it with pee so other cats stay away. But since humans don’t do this, indoor-outdoor cats reluctantly take on the role themselves. The apparent neuroticism of cats wanting to go outside every five minutes only to be let right back in is funny to us because it seems so silly and unnecessary. But to the cats, it’s very necessary (and frustrating) to cover for their dumb pals.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5b199196ce456e001424256a",
    "text": "Cats can distinguish different flavors in water.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }, {
      "user": "5b199205ce456e001424256c"
    }]
  }, {
    "_id": "5b1b40cc841d9700146158d7",
    "text": "In most US states, declawing cats is legal but in the European Union it is not.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5b4910ae0508220014ccfe90",
    "text": "Cats can hear the ultrasonic noises that rodents and dolphins make to communicate.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }, {
      "user": "5b501e5e476747001455798b"
    }]
  }, {
    "_id": "5b4911940508220014ccfe94",
    "text": "By the time a cat is 9 years old, it will only have been awake for three years of its life.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5b4911e60508220014ccfe95",
    "text": "A female cat is called a “molly” or a “queen”.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }, {
      "user": "5b501e5e476747001455798b"
    }]
  }, {
    "_id": "588e746706ac2b00110e59ff",
    "text": "Domestic cats spend about 70 percent of the day sleeping. And 15 percent of the day grooming.",
    "user": {
      "_id": "588e6e8806ac2b00110e59c3",
      "name": {
        "first": "Thomas",
        "last": "Lockwood"
      }
    },
    "upvotes": [{
      "user": "588e677c06ac2b00110e59ae"
    }, {
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "58cafac6ffae36001108d586",
    "text": "Cats have fur",
    "user": {
      "_id": "58c86fe52341fc0011d7b151",
      "name": {
        "first": "Alex",
        "last": "Simon"
      }
    },
    "upvotes": [{
      "user": "5872812829f7f43cacb0c4de"
    }]
  }, {
    "_id": "58e007cc0aac31001185ecf5",
    "text": "Cats are the most popular pet in the United States: There are 88 million pet cats and 74 million dogs.",
    "user": {
      "_id": "58e007480aac31001185ecef",
      "name": {
        "first": "Kasimir",
        "last": "Schulz"
      }
    },
    "upvotes": [{
      "user": "5872812829f7f43cacb0c4de"
    }]
  }, {
    "_id": "58e008510aac31001185ecfe",
    "text": "In tigers and tabbies, the middle of the tongue is covered in backward-pointing spines, used for breaking off and gripping meat.",
    "user": {
      "_id": "58e007480aac31001185ecef",
      "name": {
        "first": "Kasimir",
        "last": "Schulz"
      }
    },
    "upvotes": [{
      "user": "5872812829f7f43cacb0c4de"
    }]
  }, {
    "_id": "58e008c50aac31001185ed0e",
    "text": "The world's richest cat is worth $13 million after his human passed away and left her fortune to him.",
    "user": {
      "_id": "58e007480aac31001185ecef",
      "name": {
        "first": "Kasimir",
        "last": "Schulz"
      }
    },
    "upvotes": [{
      "user": "5872812829f7f43cacb0c4de"
    }]
  }, {
    "_id": "58e008ad0aac31001185ed0c",
    "text": "The frequency of a domestic cat's purr is the same at which muscles and bones repair themselves.",
    "user": {
      "_id": "58e007480aac31001185ecef",
      "name": {
        "first": "Kasimir",
        "last": "Schulz"
      }
    },
    "upvotes": [{
      "user": "588e6e8806ac2b00110e59c3"
    }, {
      "user": "5ba514d4ea48490014dc19ac"
    }]
  }, {
    "_id": "58e008630aac31001185ed01",
    "text": "When cats grimace, they are usually \"taste-scenting.\" They have an extra organ that, with some breathing control, allows the cats to taste-sense the air.",
    "user": {
      "_id": "58e007480aac31001185ecef",
      "name": {
        "first": "Kasimir",
        "last": "Schulz"
      }
    },
    "upvotes": [{
      "user": "5872812829f7f43cacb0c4de"
    }]
  }, {
    "_id": "58e008a30aac31001185ed0b",
    "text": "A cat's purr may be a form of self-healing, as it can be a sign of nervousness as well as contentment.",
    "user": {
      "_id": "58e007480aac31001185ecef",
      "name": {
        "first": "Kasimir",
        "last": "Schulz"
      }
    },
    "upvotes": [{
      "user": "5872812829f7f43cacb0c4de"
    }]
  }, {
    "_id": "58e008d00aac31001185ed0f",
    "text": "Your cat recognizes your voice but just acts too cool to care (probably because they are).",
    "user": {
      "_id": "58e007480aac31001185ecef",
      "name": {
        "first": "Kasimir",
        "last": "Schulz"
      }
    },
    "upvotes": [{
      "user": "5872812829f7f43cacb0c4de"
    }]
  }, {
    "_id": "58e00a850aac31001185ed1a",
    "text": "Cats have a longer-term memory than dogs, especially when they learn by actually doing rather than simply seeing.",
    "user": {
      "_id": "58e007480aac31001185ecef",
      "name": {
        "first": "Kasimir",
        "last": "Schulz"
      }
    },
    "upvotes": [{
      "user": "588e6e8806ac2b00110e59c3"
    }]
  }, {
    "_id": "58e00b3a0aac31001185ed20",
    "text": "Polydactyl cats are also referred to as \"Hemingway cats\" because the author was so fond of them.",
    "user": {
      "_id": "58e007480aac31001185ecef",
      "name": {
        "first": "Kasimir",
        "last": "Schulz"
      }
    },
    "upvotes": [{
      "user": "588e6e8806ac2b00110e59c3"
    }]
  }, {
    "_id": "58e00b5f0aac31001185ed24",
    "text": "When asked if her husband had any hobbies, Mary Todd Lincoln is said to have replied \"cats.\"",
    "user": {
      "_id": "58e007480aac31001185ecef",
      "name": {
        "first": "Kasimir",
        "last": "Schulz"
      }
    },
    "upvotes": [{
      "user": "588e6e8806ac2b00110e59c3"
    }]
  }, {
    "_id": "58e00bdb0aac31001185edfd",
    "text": "Cats can change their meow to manipulate a human. They often imitate a human baby when they need food, for example.",
    "user": {
      "_id": "58e007480aac31001185ecef",
      "name": {
        "first": "Kasimir",
        "last": "Schulz"
      }
    },
    "upvotes": [{
      "user": "588e6e8806ac2b00110e59c3"
    }]
  }, {
    "_id": "58e00b820aac31001185edf7",
    "text": "One legend claims that cats were created when a lion on Noah's Ark sneezed and two kittens came out.",
    "user": {
      "_id": "58e007480aac31001185ecef",
      "name": {
        "first": "Kasimir",
        "last": "Schulz"
      }
    },
    "upvotes": [{
      "user": "588e6e8806ac2b00110e59c3"
    }]
  }, {
    "_id": "58e00af60aac31001185ed1d",
    "text": "It was illegal to slay cats in ancient Egypt, in large part because they provided the great service of controlling the rat population.",
    "user": {
      "_id": "58e007480aac31001185ecef",
      "name": {
        "first": "Kasimir",
        "last": "Schulz"
      }
    },
    "upvotes": [{
      "user": "588e6e8806ac2b00110e59c3"
    }, {
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "591d9bce227c1a0020d26827",
    "text": "In Korea and Japan, there is a Cat Cafe where you can go to drink coffee and hang out with cats for hours.",
    "user": {
      "_id": "587288f6e6f85e64ae1c7ef7",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "59057485ed3e3800204fc406"
    }]
  }, {
    "_id": "58e00ba00aac31001185edfa",
    "text": "When cats leave their poop uncovered, it is a sign of aggression to let you know they don't fear you.",
    "user": {
      "_id": "58e007480aac31001185ecef",
      "name": {
        "first": "Kasimir",
        "last": "Schulz"
      }
    },
    "upvotes": [{
      "user": "5872812829f7f43cacb0c4de"
    }]
  }, {
    "_id": "591d9bab227c1a0020d26825",
    "text": "Owning a cat can reduce the risk of heart attacks and strokes by more than a third, researchers found.",
    "user": {
      "_id": "587288f6e6f85e64ae1c7ef7",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "59057485ed3e3800204fc406"
    }]
  }, {
    "_id": "5955792c7b77520020799431",
    "text": "Cats \"knead\" because of seperation from their mothers",
    "user": {
      "_id": "595579027b77520020799430",
      "name": {
        "first": "Is It Still Memes That",
        "last": "Make You Sweat?"
      }
    },
    "upvotes": [{
      "user": "59057485ed3e3800204fc406"
    }]
  }, {
    "_id": "59664b1f474ba80020ef8592",
    "text": "Your cat's instincts tell her that a paperweight or knickknack could turn out to be a mouse. Her poking paw would send it scurrying, giving her a good game. This is probably why cats always seem to be knocking the glasses off your counter tops!",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "59669484bf604b00205c20e3",
    "text": "The fear of cats is called \"Ailurophobia\"",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "5905764caa88af0020f310be"
    }]
  }, {
    "_id": "596e4989b863f300203102f4",
    "text": "Black cats are less likely to be adopted because of their \"appearance\".",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "596f4f50a8d3440020e2d77d",
    "text": "Due to the controversy, though loved by most, the Kashmir is overlooked by many cat fanciers.",
    "user": {
      "_id": "596ea14ed4d9720020401f7b",
      "name": {
        "first": "Kenny",
        "last": "Corsig"
      }
    },
    "upvotes": [{
      "user": "59057485ed3e3800204fc406"
    }]
  }, {
    "_id": "5974fb4dfedacb0020b5b4cc",
    "text": "Cats can survive falls from up to 65 feet or more.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "599f87db9a11040c4a16343f",
    "text": "The goddess of love, beauty, and fertility in Norse mythology, Freyja was the first cat lady. She is depicted in stories as riding a chariot that was drawn by cats.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "5905764caa88af0020f310be"
    }]
  }, {
    "_id": "59a60b896acf530020f3586d",
    "text": "Cat owners are 25% likely to pick George Harrison as their favorite Beatle.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "59952efaeefbfb18fd97beb7"
    }]
  }, {
    "_id": "59a60b8e6acf530020f3586e",
    "text": "Cat owners are 17% more likely to have a graduate degree than non cat owners.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "59952efaeefbfb18fd97beb7"
    }, {
      "user": "5accb07115a7f60020355258"
    }]
  }, {
    "_id": "59a60b936acf530020f3586f",
    "text": "Only 11.5% of people consider themselves \"cat people\".",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "59952efaeefbfb18fd97beb7"
    }]
  }, {
    "_id": "59a60b996acf530020f35870",
    "text": "\"Cat people\" are 11% more likely to be introverted than others.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "59952efaeefbfb18fd97beb7"
    }]
  }, {
    "_id": "59a60b9e6acf530020f35871",
    "text": "The Egyptian Mau is the oldest breed of cat, and is the fastest pedigreed cat.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "59952efaeefbfb18fd97beb7"
    }]
  }, {
    "_id": "59a60ba66acf530020f35873",
    "text": "Most cats don't like water because their coats do not insulate them well enough.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "59952efaeefbfb18fd97beb7"
    }, {
      "user": "5905764caa88af0020f310be"
    }]
  }, {
    "_id": "59a60bae6acf530020f35875",
    "text": "Cats were mythic symbols of divinity in ancient Egypt.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "59952efaeefbfb18fd97beb7"
    }]
  }, {
    "_id": "59b15b18d6eb960020d6767a",
    "text": "The place where Julius Caesar was murdered is now a cat sanctuary.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "59ceab6d5c87bf0020b94e0a",
    "text": "The Bombay cat breed was developed to resemble a miniature panther.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "59d297abc6671e0020957eb8",
    "text": "Cats use their whiskers to judge whether they’ll fit through a space.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "59d297b7c6671e0020957eb9",
    "text": "Kittens sleep so much because the growth hormone is only released when they sleep.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5a026058134ec2001f032f92",
    "text": "For a cat at rest, the average heart rate usually is between 150 and 180 bpm, more than twice that of a human, which averages 70 bpm.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5a026092134ec2001f032f95",
    "text": "Compared to other felines, domestic cats have narrowly spaced canine teeth, adapted to their preferred prey of small rodents.",
    "user": {
      "_id": "587288f6e6f85e64ae1c7ef7",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "59057485ed3e3800204fc406"
    }]
  }, {
    "_id": "5a0260d1134ec2001f032f98",
    "text": "Cats, like dogs, are digitigrades. They walk directly on their toes, with the bones of their feet making up the lower part of the visible leg.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5a038bb98e3dbc001f71978d",
    "text": "The domestic cat (Felis catus) is a small, typically furry, carnivorous mammal.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5a038c178e3dbc001f71978e",
    "text": "A cat's kidneys are so efficient, it can survive on a diet consisting only of meat, with no additional water, and can even rehydrate by drinking seawater.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5a038c628e3dbc001f71978f",
    "text": "Most breeds of cat have a noted fondness for settling in high places, or perching. In the wild, a higher place may serve as a concealed site from which to hunt.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5a038cdf8e3dbc001f719790",
    "text": "The ability of a cat to reflexively twist its body and balance itself during a fall is known as the \"cat righting reflex\".",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5a038d5a8e3dbc001f719791",
    "text": "Cats have 38 chromosomes in each zygote cell.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5a038dae8e3dbc001f719792",
    "text": "Cucumbers look enough like a snake to cause a cat's instinctive fear of snakes to kick in, causing it to panic and flee.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5a038e188e3dbc001f719793",
    "text": "The cat's tongue has backwards-facing spines about 500 μm long, which are called papillae. These contain keratin which makes them rigid so the papillae act like a hairbrush.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5a038fba8e3dbc001f719794",
    "text": "Among domestic cats, males are more likely to fight than females.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5a12460add20f9001fb45060",
    "text": "The softest part of a cat is most definitely its cheek area.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5a21a9fb425e43002132f045",
    "text": "Hank the Cat was a Maine Coon feline that was put up as a joke candidate in the 2012 United States Senate election in Virginia, a feat which gained international coverage after Hank reportedly came third behind the two major candidates, including Vice Presidential candidate Tim Kaine.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5a36eb68ae877e0021ed79f3",
    "text": "When a cat yawns, it's mouth opens so wide that you can count every tooth.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5a36ec5fae877e0021ed79f5",
    "text": "It has been estimated that a cat yawns on the average of 109,500 times in his life.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }, {
      "user": "5a9ac18c7478810ea6c06381"
    }]
  }, {
    "_id": "5a456246255f4b0021f54c04",
    "text": "A cat can die from essential oils",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5a4aab252c99ee00219e11c3",
    "text": "Cats can move their ears 180 degrees.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5a4aab2c2c99ee00219e11c4",
    "text": "Hearing is the strongest of cat's senses: They can hear sounds as high as 64 kHz — compared with humans, who can hear only as high as 20 kHz.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5a4aab322c99ee00219e11c5",
    "text": "Cats have free-floating clavicle bones that attach their shoulders to their forelimbs, which allows them to squeeze through very small spaces.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5a4bfbbab0810f0021748b91",
    "text": "Lil' Bunny Sue Roux is a cat who was born with no front legs, and walks upright like a kangaroo. https://www.instagram.com/lilbunnysueroux",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5a4bfc91b0810f0021748b92",
    "text": "Blackie became the richest cat in history when he inherited 15 million British Pounds.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5a4bfcd3b0810f0021748b93",
    "text": "Colonel Meow, a Himalayan-Persian mix who became famous on social media websites for his extremely long fur and scowling face, holds the Guinness world record for longest hair on a cat (nine inches).",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5a4bfdf8b0810f0021748b94",
    "text": "Towser \"The Mouser\" of Glenturret Distillery in Crieff, Scotland, holds the Guinness World Record for the most mice caught (28,899).",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5a4d75a38827521790281b99",
    "text": "A cat can’t climb head first down a tree because every claw on a cat’s paw points the same way. To get down from a tree, a cat must back down.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5a4d75ac8827521790281b9a",
    "text": "The cat who holds the record for the longest non-fatal fall is Andy. He fell from the 16th floor of an apartment building (about 200 ft/.06 km) and survived.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "5af8da604222db0014e75f37"
    }]
  }, {
    "_id": "5a4d75e46ef087002174c284",
    "text": "Cats have about 130,000 hairs per square inch (20,155 hairs per square centimeter).",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "5ac54a203db38b00202ae36f"
    }]
  }, {
    "_id": "5a4d76106ef087002174c285",
    "text": "A cat’s eyesight is both better and worse than humans. It is better because cats can see in much dimmer light and they have a wider peripheral view. It’s worse because they don’t see color as well as humans do. Scientists believe grass appears red to cats.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "5b199205ce456e001424256c"
    }]
  }, {
    "_id": "5a4d76516ef087002174c287",
    "text": "If they have ample water, cats can tolerate temperatures up to 133 °F.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "5accb07115a7f60020355258"
    }]
  }, {
    "_id": "5a4d766c6ef087002174c288",
    "text": "Some Siamese cats appear cross-eyed because the nerves from the left side of the brain go to mostly the right eye and the nerves from the right side of the brain go mostly to the left eye. This causes some double vision, which the cat tries to correct by “crossing” its eyes.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "5b199205ce456e001424256c"
    }, {
      "user": "5b2342cc9372b40014417471"
    }]
  }, {
    "_id": "5a4d76736ef087002174c289",
    "text": "The lightest cat on record is a blue point Himalayan called Tinker Toy, who weighed 1 pound, 6 ounces (616 g). Tinker Toy was 2.75 inches (7 cm) tall and 7.5 inches (19 cm) long.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "5b199205ce456e001424256c"
    }]
  }, {
    "_id": "5a4d767c6ef087002174c28a",
    "text": "Many Egyptians worshipped the goddess Bast, who had a woman’s body and a cat’s head.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5a4d76916ef087002174c28b",
    "text": "A cat’s nose pad is ridged with a unique pattern, just like the fingerprint of a human.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "5b199205ce456e001424256c"
    }, {
      "user": "5b2342cc9372b40014417471"
    }]
  }, {
    "_id": "5a4d76b16ef087002174c28c",
    "text": "The first cartoon cat was Felix the Cat in 1919. In 1940, Tom and Jerry starred in the first theatrical cartoon “Puss Gets the Boot.” In 1981 Andrew Lloyd Weber created the musical Cats, based on T.S. Eliot’s Old Possum’s Book of Practical Cats.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5a4d77446ef087002174c290",
    "text": "Approximately 1/3 of cat owners think their pets are able to read their minds.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "5b199205ce456e001424256c"
    }]
  }, {
    "_id": "5a4d776e6ef087002174c291",
    "text": "The claws on the cat’s back paws aren’t as sharp as the claws on the front paws because the claws in the back don’t retract and, consequently, become worn.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5a4d78136ef087002174c292",
    "text": "Like humans, cats tend to favor one paw over another.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "5ac54a203db38b00202ae36f"
    }]
  }, {
    "_id": "5a4d79016ef087002174c293",
    "text": "The most traveled cat is Hamlet, who escaped from his carrier while on a flight. He hid for seven weeks behind a panel on the airplane. By the time he was discovered, he had traveled nearly 373,000 miles (600,000 km).",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "5ba514d4ea48490014dc19ac"
    }]
  }, {
    "_id": "5a4d79496ef087002174c294",
    "text": "Approximately 40,000 people are bitten by cats in the U.S. annually.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5a4d79fb6ef087002174c295",
    "text": "The little tufts of hair in a cat’s ear that help keep out dirt direct sounds into the ear, and insulate the ears are called \"ear furnishings.\"",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "5ba514d4ea48490014dc19ac"
    }]
  }, {
    "_id": "5b01a447c6914f0014cc9a30",
    "text": "The special sensory organ called the Jacobson's organ allows a cat to have 14 times the sense of smell of a human. It consists of two fluid-filled sacs that connect to the cat's nasal cavity and is located on the roof of their mouth behind their teeth.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5b085f85be3157001432164f",
    "text": "The Australian Wildlife Conservancy completed a 44km cat-proof fence in 2018 to prevent feral cats from entering the Newhaven wildlife sanctuary, who kill about a million native birds every night across Australia and have caused the extinction of 20 native species.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "59a60baa6acf530020f35874",
    "text": "Black cats are bad luck in the United States, but they are good luck in the United Kingdom and Australia.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "59952efaeefbfb18fd97beb7"
    }]
  }, {
    "_id": "5a026087134ec2001f032f94",
    "text": "The cat skull is unusual among mammals in having very large eye sockets and a powerful and specialized jaw.",
    "user": {
      "_id": "587288f6e6f85e64ae1c7ef7",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "59057485ed3e3800204fc406"
    }]
  }, {
    "_id": "5a4aab132c99ee00219e11c2",
    "text": "Cats have scent glands along their tail, their forehead, lips, chin, and the underside of their front paws.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5a4aab372c99ee00219e11c6",
    "text": "The french tuxedo kitty, Félix, aka \"Astrocat\", was the first cat to go to space. She survived the trip.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5b0ecc7287c6b21e6fafdf01",
    "text": "A male cat is called a tom.",
    "user": {
      "_id": "587288f6e6f85e64ae1c7ef7",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "5a9ac18c7478810ea6c06381"
    }]
  }, {
    "_id": "5b1b4014841d9700146158d0",
    "text": "In 1879, Belgium unsuccessfully tried to use cats to deliver mail.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5b49110d0508220014ccfe91",
    "text": "Issac Newton decided to invent the cat flap because his own cat, Spithead, kept opening the door and spoiling his light experiments.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5b4911340508220014ccfe92",
    "text": "Kittens start to dream when they’re about a week old.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5b1b3fd8841d9700146158ce",
    "text": "Thank to an extremely efficient pair of kidneys, cats can hydrate themselves by drinking salt water.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5b183fea64c2b20014b38f52",
    "text": "A cats whiskers are the exact width of their body.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5b1b3f48841d9700146158cb",
    "text": "At night, Disneyland is overrun by cats. The theme park feeds them and takes care of them though, because they keep the rodent population in check.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5b1b3f56841d9700146158cc",
    "text": "Cats lack antibodies against dog blood so they can only receive it via a transfusion once. The second time would kill them.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5b1b3f6c841d9700146158cd",
    "text": "The Indiana State Prison allows prisoners to adopt a cat and keep it in their cell. They are meant to improve the mood of the prisoners.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5b1b3feb841d9700146158cf",
    "text": "In Islam, cats are revered for their cleanliness. Muhammad is reported to have said that \"a love of cats is an aspect of faith\".",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5b1b4022841d9700146158d1",
    "text": "Oftentimes shelters won't let black cats be adopted around Halloween out of a fear that they may be sacrificed.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5b1b4039841d9700146158d2",
    "text": "When cats bring dead animals back to their humans, they are \"teaching them to hunt\" as they would with a younger cat.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5b1b4055841d9700146158d3",
    "text": "Scottish sailer Alexander Selkirk once survived for 4 years on a deserted island thanks to feral cats that protected him from large rats during the night.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5b1b4065841d9700146158d4",
    "text": "A cat named Emmy lived aboard the RMS Empress of Ireland and she never missed a voyage. On May 28,1914, however, she refused to board. The ship left without her and then sank the following day.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5b1b408a841d9700146158d5",
    "text": "Domestic cats will try not to drink from a water bowl that is next to their food. This is because in the wild, water next to their kill could be contaminated.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5b1b40d4841d9700146158d8",
    "text": "Koko the gorilla got a pet cat for her birthday in 1985 after she requested to have one as a birthday present.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5b1b411d841d9700146158d9",
    "text": "The Egyptian Mau’s name is derived from the Middle Egyptian word mjw, which means cat. But contrary to its name, it’s unclear whether the modern Egyptian Mau actually originated in Egypt.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5b1b4241841d9700146158da",
    "text": "Cat fanciers bred and exhibited Maus in Europe until World War II, when attention toward the cat waned and it nearly went extinct.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "5b199205ce456e001424256c"
    }]
  }, {
    "_id": "5b1b455f841d9700146158db",
    "text": "The Egyptian Mau breed was saved from extinciton when Russian princess Natalie Trubetskaya was given a Mau that was imported from the Middle East. When she emigrated to New York City in 1956, she brought along three Mau cats. She used these kitties to establish the Fatima Egyptian Mau cattery, which produced many of the ancestors of today’s Egyptian Maus in America.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }, {
      "user": "5b199205ce456e001424256c"
    }]
  }, {
    "_id": "5b3bd7d24cf4e10014bfd199",
    "text": "The myth that a cat has nine lives comes from their ability to jump and land from high places. The number 9 is believed by some to originate from William Shakespeare's Romeo and Juliet: \"A cat has nine lives. For three he plays, for three he strays, and for the last three he stays.\"",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5b3d8e4960d3890713ca39a8",
    "text": "A Chinese cat named Baidianr (meaning \"white spot\") had a unique ability to choose World Cup winners. He predicted the winner of the soccer competition 6 years in a row, before he died on June 2, 2018, just before the event ended.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5b453e380fd3a600147f32f3",
    "text": "Exposure to UV light with hairless or partially-hairless cats can result in sunburn, even during cloudy or shady conditions. If your cat risks overexposure, consider applying sunscreen daily.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }, {
      "user": "5a8b1dce4709d90020cb1285"
    }]
  }, {
    "_id": "5b4909af0508220014ccfe8a",
    "text": "Cats have a layer called the tapetum lucidum just behind their retina which reflects light inside the eye, helping it capture more light. This reflected light is the glow you see when taking a photo of a cat with the flash on.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5b2440d680595d0014f53365",
    "text": "Parker's cat is a Maine Coon and weights 20 pounds.",
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5b4911770508220014ccfe93",
    "text": "Unlike kittens, adult cats don’t release any particular key hormones during sleep. They snooze all day just because they can. :)",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "5b501e5e476747001455798b"
    }]
  }, {
    "_id": "5b4912650508220014ccfe98",
    "text": "Russian scientists discovered in the 1930s that Siamese kittens kept in very warm rooms didn't develop the breed's signature dark patches.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5b4912000508220014ccfe96",
    "text": "Cats have a third eyelid called a “haw”. It’s generally only visible when they’re unwell.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "5b4912320508220014ccfe97",
    "text": "In the original Italian version of Cinderella, the benevolent fairy godmother figure was a cat.",
    "user": {
      "_id": "5a9ac18c7478810ea6c06381",
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      }
    },
    "upvotes": [{
      "user": "587288f6e6f85e64ae1c7ef7"
    }]
  }, {
    "_id": "58e008450aac31001185ecfd",
    "text": "A cat was mayor of Talkeetna, Alaska, for 20 years. His name is Stubbs, and he died on July 23, 2017.",
    "upvotes": [{
      "user": "5872812829f7f43cacb0c4de"
    }]
  }, {
    "_id": "5bd4ad8b34fc7300144c3b65",
    "text": "Vote Dog",
    "user": {
      "_id": "5bd4ad4f34fc7300144c3b64",
      "name": {
        "first": "Raj",
        "last": "Bista"
      }
    },
    "upvotes": []
  }],
  "me": []
};
},{}],"FactService.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var Fact_1 = __importDefault(require("./Fact"));

var FactService =
/** @class */
function () {
  function FactService() {}

  FactService.prototype.getFacts = function () {
    var factsJson = require('./facts.json');

    var facts = factsJson.all.map(function (item) {
      var fact = new Fact_1["default"]();
      fact.text = item.text;
      fact._id = item._id;
      return fact;
    });
    return facts;
  };

  return FactService;
}();

exports["default"] = FactService;
},{"./Fact":"Fact.ts","./facts.json":"facts.json"}],"FactViewModel.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var FactService_1 = __importDefault(require("./FactService"));

var FactViewModel =
/** @class */
function () {
  function FactViewModel() {
    this.factService = new FactService_1["default"]();
  }

  FactViewModel.prototype.Render = function () {
    var facts = this.factService.getFacts();

    for (var i = 0; i < facts.length; i++) {
      var fact = facts[i];
      document.write("<div class=\"card\"><p class=\"card-text\">" + fact.text + "</p><small>" + fact._id + "</small></div>");
    }
  };

  return FactViewModel;
}();

exports["default"] = FactViewModel;
},{"./FactService":"FactService.ts"}],"index.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var FactViewModel_1 = __importDefault(require("./FactViewModel"));

var factViewModel = new FactViewModel_1["default"]();
factViewModel.Render();
},{"./FactViewModel":"FactViewModel.ts"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60813" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","index.ts"], null)
//# sourceMappingURL=/cat-facts.77de5100.map