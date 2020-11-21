export const App = () => {
  return (
    <div>
      <h1>JavaScript:</h1>
      <h2>The Good Parts</h2>
    </div>
  );
};

var testing = function () {
  // Object literals

  var emptyObject = {};

  var stooge = {
    "firstName": "Jerome",
    "lastName": "Howard"
  };

  var flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
      IATA: "SYD",
      city: "Syndney"
    }
  };

  // Retrieveal

  var stoogeName = stooge["firstName"];
  var destination = flight.departure.city;

  // || operator

  var status = flight.status || "unknown";

  // Prototype

  // very object is linked to a prototype object from which it can inherit properties.
  // All object created from object literals are linked to Object.prototype
  // an object that comes stard with JavaScript

  if (typeof Object.create !== 'function') {
    Object.create = function (o) {
      var F = function () { };
      F.prototype = o;
      return F();
    }
  }

  // skipping sections...

  // Prototypal

  // useful object
  var myMammel = {
    name: "Herb the Mammal",
    getName: function () {
      return this.name;
    },
    speak: function () {
      return this.say || '';
    }
  };

  // new instance
  var myCat = Object.create(myMammel);
  myCat.name = "Harry";
  myCat.say = "meow";
  myCat.purr = function (n) {
    var i, s = "";
    for (i = 0; i < n; i += 1) {
      if (s) {
        s += "-";
      }
      s += "r";
    }
    return s;
  }
  myCat.getName = function () {
    return this.speak() + ' ' + this.name + ' ' + this.speak()
  }
  // differential inheritance
  // customize the new object by specifying the differences from the prototype

  console.log(myCat.getName());

}();