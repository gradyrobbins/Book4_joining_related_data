(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const data = {
  fetchData() {
    return fetch("http://localhost:8088/Employees?_expand=Departments&_expand=Computers").then(response => response.json()).then(data2 => console.log(data2));
  }

};
var _default = data;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

var _data = _interopRequireDefault(require("./data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("hello world main.js");

},{"./data":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RhdGEuanMiLCIuLi9zY3JpcHRzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBQSxNQUFNLElBQUksR0FBRztBQUNULEVBQUEsU0FBUyxHQUFHO0FBQ1QsV0FBTyxLQUFLLENBQUMsdUVBQUQsQ0FBTCxDQUNMLElBREssQ0FDQSxRQUFRLElBQUksUUFBUSxDQUFDLElBQVQsRUFEWixFQUVMLElBRkssQ0FFQSxLQUFLLElBQUksT0FBTyxDQUFDLEdBQVIsQ0FBWSxLQUFaLENBRlQsQ0FBUDtBQUdGOztBQUxRLENBQWI7ZUFRZSxJOzs7Ozs7QUNOZjs7OztBQUZBLE9BQU8sQ0FBQyxHQUFSLENBQVkscUJBQVoiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBkYXRhID0ge1xuICAgIGZldGNoRGF0YSgpIHtcbiAgICAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODgvRW1wbG95ZWVzP19leHBhbmQ9RGVwYXJ0bWVudHMmX2V4cGFuZD1Db21wdXRlcnNcIilcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhMiA9PiBjb25zb2xlLmxvZyhkYXRhMikpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkYXRhIiwiY29uc29sZS5sb2coXCJoZWxsbyB3b3JsZCBtYWluLmpzXCIpXG5cbmltcG9ydCBkYXRhIGZyb20gXCIuL2RhdGFcIlxuXG4iXX0=
