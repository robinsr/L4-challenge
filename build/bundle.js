(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _view = require('./view');

var _view2 = _interopRequireDefault(_view);

var _service = require('./service');

var _service2 = _interopRequireDefault(_service);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Entry point of the app
                                                                                                                                                           */

var App = function App() {
  var _this = this;

  _classCallCheck(this, App);

  this.init = function () {
    _this.service.fetchData().then(function (data) {
      _this.view.render(data);
      console.log(data);
    }).catch(function (err) {
      console.error(err);
    });
  };

  this.service = new _service2.default();
  this.view = new _view2.default();
};

var app = new App();

(0, _util.$on)(window, 'load', app.init);

},{"./service":2,"./util":3,"./view":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Handles calling the darksky api
 */

var Service = function () {
  function Service(key) {
    _classCallCheck(this, Service);

    this.key = key;
  }

  _createClass(Service, [{
    key: 'fetchData',
    value: function fetchData() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.getPosition().then(function (coords) {
          var lat = coords.lat;
          var lng = coords.lng;
          //fetch(`/api/${lat},${lng}`)

          fetch('mock-data.json').then(function (req) {
            req.json().then(function (data) {
              return resolve(data.daily.data);
            }).catch(function () {
              return reject('Could not parse response data');
            });
          }).catch(function () {
            return reject('Could not fetch data');
          });
        }).catch(reject);
      });
    }
  }, {
    key: 'getPosition',
    value: function getPosition() {
      var defaultPosition = {
        lat: 47.6062,
        lng: -122.3321
      };

      return new Promise(function (resolve, reject) {
        if (window.navigator.geolocation) {
          var geoSuccess = function geoSuccess(data) {
            return resolve({
              lat: data.coords.latitude,
              lng: data.coords.longitude
            });
          };

          var geoError = function geoError() {
            return reject('There was a problem getting your lat/lng');
          };

          window.navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
        } else {
          return resovle(defaultPosition);
        }
      });
    }
  }]);

  return Service;
}();

exports.default = Service;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var $on = function $on(target, event, handler) {
  target.addEventListener(event, handler);
};

exports.$on = $on;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//import render from './template';

var View = function () {
  function View() {
    _classCallCheck(this, View);
  }

  _createClass(View, [{
    key: "render",
    value: function render(data) {}
  }]);

  return View;
}();

exports.default = View;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi5qcyIsInNyYy9zZXJ2aWNlLmpzIiwic3JjL3V0aWwuanMiLCJzcmMvdmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDSUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztJQUVNLEcsR0FDSixlQUFjO0FBQUE7O0FBQUE7O0FBQUEsT0FLZCxJQUxjLEdBS1AsWUFBTTtBQUNYLFVBQUssT0FBTCxDQUFhLFNBQWIsR0FDRyxJQURILENBQ1EsZ0JBQVE7QUFDWixZQUFLLElBQUwsQ0FBVSxNQUFWLENBQWlCLElBQWpCO0FBQ0EsY0FBUSxHQUFSLENBQVksSUFBWjtBQUNELEtBSkgsRUFLRyxLQUxILENBS1MsZUFBTztBQUNaLGNBQVEsS0FBUixDQUFjLEdBQWQ7QUFDRCxLQVBIO0FBUUQsR0FkYTs7QUFDWixPQUFLLE9BQUwsR0FBZSx1QkFBZjtBQUNBLE9BQUssSUFBTCxHQUFZLG9CQUFaO0FBQ0QsQzs7QUFjSCxJQUFNLE1BQU0sSUFBSSxHQUFKLEVBQVo7O0FBRUEsZUFBSSxNQUFKLEVBQVksTUFBWixFQUFvQixJQUFJLElBQXhCOzs7Ozs7Ozs7Ozs7Ozs7OztJQ3hCcUIsTztBQUNuQixtQkFBWSxHQUFaLEVBQWlCO0FBQUE7O0FBQ2YsU0FBSyxHQUFMLEdBQVcsR0FBWDtBQUNEOzs7O2dDQUVXO0FBQUE7O0FBQ1YsYUFBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBVSxNQUFWLEVBQXFCO0FBQ3RDLGNBQUssV0FBTCxHQUNHLElBREgsQ0FDUSxrQkFBVTtBQUFBLGNBQ1AsR0FETyxHQUNLLE1BREwsQ0FDUCxHQURPO0FBQUEsY0FDRixHQURFLEdBQ0ssTUFETCxDQUNGLEdBREU7OztBQUdkLGdCQUFNLGdCQUFOLEVBQ0csSUFESCxDQUNRLGVBQU87QUFDWCxnQkFBSSxJQUFKLEdBQ0MsSUFERCxDQUNNO0FBQUEscUJBQVEsUUFBUSxLQUFLLEtBQUwsQ0FBVyxJQUFuQixDQUFSO0FBQUEsYUFETixFQUVDLEtBRkQsQ0FFTztBQUFBLHFCQUFNLE9BQU8sK0JBQVAsQ0FBTjtBQUFBLGFBRlA7QUFHRCxXQUxILEVBTUcsS0FOSCxDQU1TO0FBQUEsbUJBQU0sT0FBTyxzQkFBUCxDQUFOO0FBQUEsV0FOVDtBQU9ELFNBWEgsRUFZRyxLQVpILENBWVMsTUFaVDtBQWFDLE9BZEksQ0FBUDtBQWVEOzs7a0NBRWE7QUFDWixVQUFNLGtCQUFrQjtBQUN0QixhQUFLLE9BRGlCO0FBRXRCLGFBQUssQ0FBQztBQUZnQixPQUF4Qjs7QUFLQSxhQUFPLElBQUksT0FBSixDQUFZLFVBQUMsT0FBRCxFQUFVLE1BQVYsRUFBcUI7QUFDdEMsWUFBSSxPQUFPLFNBQVAsQ0FBaUIsV0FBckIsRUFBa0M7QUFDaEMsY0FBTSxhQUFhLFNBQWIsVUFBYSxPQUFRO0FBQ3pCLG1CQUFPLFFBQVE7QUFDYixtQkFBSyxLQUFLLE1BQUwsQ0FBWSxRQURKO0FBRWIsbUJBQUssS0FBSyxNQUFMLENBQVk7QUFGSixhQUFSLENBQVA7QUFJRCxXQUxEOztBQU9BLGNBQU0sV0FBVyxTQUFYLFFBQVcsR0FBTTtBQUNyQixtQkFBTyxPQUFPLDBDQUFQLENBQVA7QUFDRCxXQUZEOztBQUlBLGlCQUFPLFNBQVAsQ0FBaUIsV0FBakIsQ0FBNkIsa0JBQTdCLENBQWdELFVBQWhELEVBQTRELFFBQTVEO0FBQ0QsU0FiRCxNQWFPO0FBQ0wsaUJBQU8sUUFBUSxlQUFSLENBQVA7QUFDRDtBQUNGLE9BakJNLENBQVA7QUFrQkQ7Ozs7OztrQkEvQ2tCLE87Ozs7Ozs7O0FDSnJCLElBQU0sTUFBTSxTQUFOLEdBQU0sQ0FBQyxNQUFELEVBQVMsS0FBVCxFQUFnQixPQUFoQixFQUE0QjtBQUN0QyxTQUFPLGdCQUFQLENBQXdCLEtBQXhCLEVBQStCLE9BQS9CO0FBQ0QsQ0FGRDs7UUFJUyxHLEdBQUEsRzs7Ozs7Ozs7Ozs7Ozs7O0lDRlksSTs7Ozs7OzsyQkFDWixJLEVBQU0sQ0FFWjs7Ozs7O2tCQUhrQixJIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxuICogRW50cnkgcG9pbnQgb2YgdGhlIGFwcFxuICovXG5cbmltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XG5pbXBvcnQgU2VydmljZSBmcm9tICcuL3NlcnZpY2UnO1xuaW1wb3J0IHsgJG9uIH0gZnJvbSAnLi91dGlsJztcblxuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zZXJ2aWNlID0gbmV3IFNlcnZpY2UoKTtcbiAgICB0aGlzLnZpZXcgPSBuZXcgVmlldygpO1xuICB9XG5cbiAgaW5pdCA9ICgpID0+IHtcbiAgICB0aGlzLnNlcnZpY2UuZmV0Y2hEYXRhKClcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLnZpZXcucmVuZGVyKGRhdGEpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9KTtcbiAgfVxufVxuXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XG5cbiRvbih3aW5kb3csICdsb2FkJywgYXBwLmluaXQpOyIsIlxuLyoqXG4gKiBIYW5kbGVzIGNhbGxpbmcgdGhlIGRhcmtza3kgYXBpXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihrZXkpIHtcbiAgICB0aGlzLmtleSA9IGtleTtcbiAgfSBcbiAgXG4gIGZldGNoRGF0YSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5nZXRQb3NpdGlvbigpXG4gICAgICAgIC50aGVuKGNvb3JkcyA9PiB7XG4gICAgICAgICAgY29uc3Qge2xhdCwgbG5nfSA9IGNvb3JkcztcbiAgICAgICAgICAvL2ZldGNoKGAvYXBpLyR7bGF0fSwke2xuZ31gKVxuICAgICAgICAgIGZldGNoKCdtb2NrLWRhdGEuanNvbicpXG4gICAgICAgICAgICAudGhlbihyZXEgPT4ge1xuICAgICAgICAgICAgICByZXEuanNvbigpXG4gICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gcmVzb2x2ZShkYXRhLmRhaWx5LmRhdGEpKVxuICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4gcmVqZWN0KCdDb3VsZCBub3QgcGFyc2UgcmVzcG9uc2UgZGF0YScpKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4gcmVqZWN0KCdDb3VsZCBub3QgZmV0Y2ggZGF0YScpKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKHJlamVjdCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIGNvbnN0IGRlZmF1bHRQb3NpdGlvbiA9IHtcbiAgICAgIGxhdDogNDcuNjA2MixcbiAgICAgIGxuZzogLTEyMi4zMzIxXG4gICAgfTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAod2luZG93Lm5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgICAgICBjb25zdCBnZW9TdWNjZXNzID0gZGF0YSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoe1xuICAgICAgICAgICAgbGF0OiBkYXRhLmNvb3Jkcy5sYXRpdHVkZSxcbiAgICAgICAgICAgIGxuZzogZGF0YS5jb29yZHMubG9uZ2l0dWRlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBjb25zdCBnZW9FcnJvciA9ICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KCdUaGVyZSB3YXMgYSBwcm9ibGVtIGdldHRpbmcgeW91ciBsYXQvbG5nJyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgd2luZG93Lm5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oZ2VvU3VjY2VzcywgZ2VvRXJyb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc292bGUoZGVmYXVsdFBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSIsImNvbnN0ICRvbiA9ICh0YXJnZXQsIGV2ZW50LCBoYW5kbGVyKSA9PiB7XG4gIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbn07XG5cbmV4cG9ydCB7ICRvbiB9IiwiLy9pbXBvcnQgcmVuZGVyIGZyb20gJy4vdGVtcGxhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IHtcbiAgcmVuZGVyKGRhdGEpIHtcblxuICB9XG59Il19
