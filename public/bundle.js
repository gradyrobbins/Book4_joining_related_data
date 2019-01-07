(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// sample HTML template
{}
/* <article class="employee">
       <header class="employee__name">
           <h1>Rainu Ittycheriah</h1>
       </header>
       <section class="employee__department">
           Works in the IT department
       </section>
       <section class="employee__computer">
           Currently using a 2015 MacBook Pro
       </section>
   </article> */
// repo creeping: thanks Asia Carter.
// let cardHTML = {
//     buildHTML(value) {
//         let outputArticle = document.querySelector(".output");
//         let employeeCard =document.createElement("article");
//         employeeCard.classList.add("employee");
//         outputArticle.appendChild(employeeCard);
//         let employeeHeader =document.createElement("header");
//         employeeHeader.classList.add("employee__name")
//         employeeHeader.innerHTML = `<h1>${value.name}</h1>`
//         employeeCard.appendChild(employeeHeader);
//         let employeeSection=document.createElement("section");
//         employeeSection.classList.add("employee__department");
//         employeeSection.innerHTML= `Works in the ${value.department.name}`
//         employeeCard.appendChild(employeeSection);
//         let employeeComputerSection = document.createElement("section");
//         employeeComputerSection.classList.add("employee__computer");
//         employeeComputerSection.innerHTML = `Currently using a ${value.computer.name}`
//         employeeCard.appendChild(employeeComputerSection);
//     }
// }

let cardBuilder = {
  buildCard(object) {
    let outputArticle = document.querySelector(".output");
    let employeeCard = document.createElement("article");
    employeeCard.classList.add("employee");
    outputArticle.appendChild(employeeCard);
    let employeeHeader = document.createElement("header");
    employeeHeader.classList.add("employee__name");
    employeeHeader.innerHTML = `<h1>${object.name}</h1>`;
    employeeCard.appendChild(employeeHeader);
    let employeeSection = document.createElement("section");
    employeeSection.classList.add("employee__department");
    employeeSection.innerHTML = `Works in the <strong>${object.departmentName} </strong> Department`;
    employeeCard.appendChild(employeeSection);
    let employeeComputerSection = document.createElement("section");
    employeeComputerSection.classList.add("employee__computer");
    employeeComputerSection.innerHTML = `Using a computer named: <strong> ${object.computerName} </strong>`;
    employeeCard.appendChild(employeeComputerSection);
  }

};
var _default = cardBuilder;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _cardBuilder = _interopRequireDefault(require("./cardBuilder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const data = {
  fetchData() {
    return fetch("http://localhost:8088/Employees/").then(response => response.json()).then(parsedData => parsedData.forEach(obj => {
      console.log("obj: ", obj);
      let bloop = obj.computerId;
      let bleep = obj.departmentId; // console.log("computerId:", bloop)
      // console.log("departmentId:", bleep)

      fetch(`http://localhost:8088/Computers/${bloop}`).then(response => response.json()).then(parsedResponse => {
        // console.log(parsedResponse.name)
        obj.computerName = parsedResponse.name; // cardBuilder.buildCard(obj)

        fetch(`http://localhost:8088/Departments/${bleep}`).then(response => response.json()).then(parsedResponse2 => {
          obj.departmentName = parsedResponse2.name;

          _cardBuilder.default.buildCard(obj);
        });
      });
    }));
  }

};
var _default = data;
exports.default = _default;

},{"./cardBuilder":1}],3:[function(require,module,exports){
"use strict";

var _data = _interopRequireDefault(require("./data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("hello world main.js");

_data.default.fetchData(); // import cardBuilder from "./cardBuilder"
// cardBuilder.buildCard(bloop)
// Once you have retrieved all of the data from your API, display them in the DOM. Create an HTML representation of each object which will display the name, its computer, and its department.
// Create a DOM element in your index.html with a class of output.
// Create a function which returns a string template. The template is the HTML representation for an  item.
// Create a function that inserts an HTML representation of an employee into the DOM
// Example fetch call using functions
// fetch("http://localhost:8088/food")
//     .then(foods => foods.json())
//     .then(parsedFoods => {
//         parsedFoods.forEach(food => {
//             const foodAsHTML = foodFactory(food)
//             addFoodToDom(foodAsHTML)
//         })
//     })

},{"./data":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2NhcmRCdWlsZGVyLmpzIiwiLi4vc2NyaXB0cy9kYXRhLmpzIiwiLi4vc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDRUE7QUFDQSxDQVVrQjtBQVZqQjs7Ozs7Ozs7Ozs7QUFZRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBSSxXQUFXLEdBQUc7QUFDZCxFQUFBLFNBQVMsQ0FBQyxNQUFELEVBQVM7QUFDZCxRQUFJLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFwQjtBQUNBLFFBQUksWUFBWSxHQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLENBQWxCO0FBQ0EsSUFBQSxZQUFZLENBQUMsU0FBYixDQUF1QixHQUF2QixDQUEyQixVQUEzQjtBQUNBLElBQUEsYUFBYSxDQUFDLFdBQWQsQ0FBMEIsWUFBMUI7QUFDQSxRQUFJLGNBQWMsR0FBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixRQUF2QixDQUFwQjtBQUNBLElBQUEsY0FBYyxDQUFDLFNBQWYsQ0FBeUIsR0FBekIsQ0FBNkIsZ0JBQTdCO0FBQ0EsSUFBQSxjQUFjLENBQUMsU0FBZixHQUE0QixPQUFNLE1BQU0sQ0FBQyxJQUFLLE9BQTlDO0FBQ0EsSUFBQSxZQUFZLENBQUMsV0FBYixDQUF5QixjQUF6QjtBQUNBLFFBQUksZUFBZSxHQUFDLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLENBQXBCO0FBQ0EsSUFBQSxlQUFlLENBQUMsU0FBaEIsQ0FBMEIsR0FBMUIsQ0FBOEIsc0JBQTlCO0FBQ0ksSUFBQSxlQUFlLENBQUMsU0FBaEIsR0FBNEIsd0JBQXVCLE1BQU0sQ0FBQyxjQUFlLHVCQUF6RTtBQUNKLElBQUEsWUFBWSxDQUFDLFdBQWIsQ0FBeUIsZUFBekI7QUFDQSxRQUFJLHVCQUF1QixHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLENBQTlCO0FBQ0EsSUFBQSx1QkFBdUIsQ0FBQyxTQUF4QixDQUFrQyxHQUFsQyxDQUFzQyxvQkFBdEM7QUFDSSxJQUFBLHVCQUF1QixDQUFDLFNBQXhCLEdBQXFDLG9DQUFtQyxNQUFNLENBQUMsWUFBYSxZQUE1RjtBQUNKLElBQUEsWUFBWSxDQUFDLFdBQWIsQ0FBeUIsdUJBQXpCO0FBQ0g7O0FBbEJhLENBQWxCO2VBcUJlLFc7Ozs7Ozs7Ozs7O0FDekRmOzs7O0FBRUEsTUFBTSxJQUFJLEdBQUc7QUFFVCxFQUFBLFNBQVMsR0FBRztBQUNULFdBQU8sS0FBSyxDQUFDLGtDQUFELENBQUwsQ0FDTCxJQURLLENBQ0EsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFULEVBRFosRUFFTCxJQUZLLENBRUEsVUFBVSxJQUFJLFVBQVUsQ0FBQyxPQUFYLENBQW1CLEdBQUcsSUFBSTtBQUMxQyxNQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksT0FBWixFQUFxQixHQUFyQjtBQUNBLFVBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxVQUFoQjtBQUNBLFVBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxZQUFoQixDQUgwQyxDQUkxQztBQUNBOztBQUdBLE1BQUEsS0FBSyxDQUFFLG1DQUFrQyxLQUFNLEVBQTFDLENBQUwsQ0FDQyxJQURELENBQ00sUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFULEVBRGxCLEVBRUMsSUFGRCxDQUVNLGNBQWMsSUFBSTtBQUVwQjtBQUNBLFFBQUEsR0FBRyxDQUFDLFlBQUosR0FBbUIsY0FBYyxDQUFDLElBQWxDLENBSG9CLENBSXBCOztBQUVBLFFBQUEsS0FBSyxDQUFFLHFDQUFvQyxLQUFNLEVBQTVDLENBQUwsQ0FDQyxJQURELENBQ00sUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFULEVBRGxCLEVBRUMsSUFGRCxDQUVNLGVBQWUsSUFBSTtBQUVyQixVQUFBLEdBQUcsQ0FBQyxjQUFKLEdBQXFCLGVBQWUsQ0FBQyxJQUFyQzs7QUFDQSwrQkFBWSxTQUFaLENBQXNCLEdBQXRCO0FBQ0gsU0FORDtBQU9ILE9BZkQ7QUFrQkgsS0ExQm1CLENBRmQsQ0FBUDtBQW1DTjs7QUF0Q1ksQ0FBYjtlQTBDZSxJOzs7Ozs7QUMxQ2Y7Ozs7QUFGQSxPQUFPLENBQUMsR0FBUixDQUFZLHFCQUFaOztBQUdBLGNBQUssU0FBTCxHLENBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXG5cbi8vIHNhbXBsZSBIVE1MIHRlbXBsYXRlXG57LyogPGFydGljbGUgY2xhc3M9XCJlbXBsb3llZVwiPlxuICAgICAgICA8aGVhZGVyIGNsYXNzPVwiZW1wbG95ZWVfX25hbWVcIj5cbiAgICAgICAgICAgIDxoMT5SYWludSBJdHR5Y2hlcmlhaDwvaDE+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImVtcGxveWVlX19kZXBhcnRtZW50XCI+XG4gICAgICAgICAgICBXb3JrcyBpbiB0aGUgSVQgZGVwYXJ0bWVudFxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiZW1wbG95ZWVfX2NvbXB1dGVyXCI+XG4gICAgICAgICAgICBDdXJyZW50bHkgdXNpbmcgYSAyMDE1IE1hY0Jvb2sgUHJvXG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2FydGljbGU+ICovfVxuXG4vLyByZXBvIGNyZWVwaW5nOiB0aGFua3MgQXNpYSBDYXJ0ZXIuXG4vLyBsZXQgY2FyZEhUTUwgPSB7XG4vLyAgICAgYnVpbGRIVE1MKHZhbHVlKSB7XG4vLyAgICAgICAgIGxldCBvdXRwdXRBcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXRwdXRcIik7XG4vLyAgICAgICAgIGxldCBlbXBsb3llZUNhcmQgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xuLy8gICAgICAgICBlbXBsb3llZUNhcmQuY2xhc3NMaXN0LmFkZChcImVtcGxveWVlXCIpO1xuLy8gICAgICAgICBvdXRwdXRBcnRpY2xlLmFwcGVuZENoaWxkKGVtcGxveWVlQ2FyZCk7XG4vLyAgICAgICAgIGxldCBlbXBsb3llZUhlYWRlciA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbi8vICAgICAgICAgZW1wbG95ZWVIZWFkZXIuY2xhc3NMaXN0LmFkZChcImVtcGxveWVlX19uYW1lXCIpXG4vLyAgICAgICAgIGVtcGxveWVlSGVhZGVyLmlubmVySFRNTCA9IGA8aDE+JHt2YWx1ZS5uYW1lfTwvaDE+YFxuLy8gICAgICAgICBlbXBsb3llZUNhcmQuYXBwZW5kQ2hpbGQoZW1wbG95ZWVIZWFkZXIpO1xuLy8gICAgICAgICBsZXQgZW1wbG95ZWVTZWN0aW9uPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuLy8gICAgICAgICBlbXBsb3llZVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImVtcGxveWVlX19kZXBhcnRtZW50XCIpO1xuLy8gICAgICAgICBlbXBsb3llZVNlY3Rpb24uaW5uZXJIVE1MPSBgV29ya3MgaW4gdGhlICR7dmFsdWUuZGVwYXJ0bWVudC5uYW1lfWBcbi8vICAgICAgICAgZW1wbG95ZWVDYXJkLmFwcGVuZENoaWxkKGVtcGxveWVlU2VjdGlvbik7XG4vLyAgICAgICAgIGxldCBlbXBsb3llZUNvbXB1dGVyU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuLy8gICAgICAgICBlbXBsb3llZUNvbXB1dGVyU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiZW1wbG95ZWVfX2NvbXB1dGVyXCIpO1xuLy8gICAgICAgICBlbXBsb3llZUNvbXB1dGVyU2VjdGlvbi5pbm5lckhUTUwgPSBgQ3VycmVudGx5IHVzaW5nIGEgJHt2YWx1ZS5jb21wdXRlci5uYW1lfWBcbi8vICAgICAgICAgZW1wbG95ZWVDYXJkLmFwcGVuZENoaWxkKGVtcGxveWVlQ29tcHV0ZXJTZWN0aW9uKTtcbi8vICAgICB9XG4vLyB9XG5sZXQgY2FyZEJ1aWxkZXIgPSB7XG4gICAgYnVpbGRDYXJkKG9iamVjdCkge1xuICAgICAgICBsZXQgb3V0cHV0QXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0cHV0XCIpO1xuICAgICAgICBsZXQgZW1wbG95ZWVDYXJkID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcbiAgICAgICAgZW1wbG95ZWVDYXJkLmNsYXNzTGlzdC5hZGQoXCJlbXBsb3llZVwiKTtcbiAgICAgICAgb3V0cHV0QXJ0aWNsZS5hcHBlbmRDaGlsZChlbXBsb3llZUNhcmQpO1xuICAgICAgICBsZXQgZW1wbG95ZWVIZWFkZXIgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgICAgIGVtcGxveWVlSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJlbXBsb3llZV9fbmFtZVwiKVxuICAgICAgICBlbXBsb3llZUhlYWRlci5pbm5lckhUTUwgPSBgPGgxPiR7b2JqZWN0Lm5hbWV9PC9oMT5gXG4gICAgICAgIGVtcGxveWVlQ2FyZC5hcHBlbmRDaGlsZChlbXBsb3llZUhlYWRlcik7XG4gICAgICAgIGxldCBlbXBsb3llZVNlY3Rpb249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgICAgIGVtcGxveWVlU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiZW1wbG95ZWVfX2RlcGFydG1lbnRcIik7XG4gICAgICAgICAgICBlbXBsb3llZVNlY3Rpb24uaW5uZXJIVE1MPSBgV29ya3MgaW4gdGhlIDxzdHJvbmc+JHtvYmplY3QuZGVwYXJ0bWVudE5hbWV9IDwvc3Ryb25nPiBEZXBhcnRtZW50YFxuICAgICAgICBlbXBsb3llZUNhcmQuYXBwZW5kQ2hpbGQoZW1wbG95ZWVTZWN0aW9uKTtcbiAgICAgICAgbGV0IGVtcGxveWVlQ29tcHV0ZXJTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgICAgIGVtcGxveWVlQ29tcHV0ZXJTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJlbXBsb3llZV9fY29tcHV0ZXJcIik7XG4gICAgICAgICAgICBlbXBsb3llZUNvbXB1dGVyU2VjdGlvbi5pbm5lckhUTUwgPSBgVXNpbmcgYSBjb21wdXRlciBuYW1lZDogPHN0cm9uZz4gJHtvYmplY3QuY29tcHV0ZXJOYW1lfSA8L3N0cm9uZz5gXG4gICAgICAgIGVtcGxveWVlQ2FyZC5hcHBlbmRDaGlsZChlbXBsb3llZUNvbXB1dGVyU2VjdGlvbik7XG4gICAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBjYXJkQnVpbGRlclxuIiwiaW1wb3J0IGNhcmRCdWlsZGVyIGZyb20gXCIuL2NhcmRCdWlsZGVyXCJcblxuY29uc3QgZGF0YSA9IHtcblxuICAgIGZldGNoRGF0YSgpIHtcbiAgICAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODgvRW1wbG95ZWVzL1wiKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKHBhcnNlZERhdGEgPT4gcGFyc2VkRGF0YS5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9iajogXCIsIG9iailcbiAgICAgICAgICAgIGxldCBibG9vcCA9IG9iai5jb21wdXRlcklkXG4gICAgICAgICAgICBsZXQgYmxlZXAgPSBvYmouZGVwYXJ0bWVudElkXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNvbXB1dGVySWQ6XCIsIGJsb29wKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJkZXBhcnRtZW50SWQ6XCIsIGJsZWVwKVxuXG5cbiAgICAgICAgICAgIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODgvQ29tcHV0ZXJzLyR7Ymxvb3B9YClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHBhcnNlZFJlc3BvbnNlID0+IHtcblxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHBhcnNlZFJlc3BvbnNlLm5hbWUpXG4gICAgICAgICAgICAgICAgb2JqLmNvbXB1dGVyTmFtZSA9IHBhcnNlZFJlc3BvbnNlLm5hbWVcbiAgICAgICAgICAgICAgICAvLyBjYXJkQnVpbGRlci5idWlsZENhcmQob2JqKVxuXG4gICAgICAgICAgICAgICAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9EZXBhcnRtZW50cy8ke2JsZWVwfWApXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgICAgIC50aGVuKHBhcnNlZFJlc3BvbnNlMiA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgb2JqLmRlcGFydG1lbnROYW1lID0gcGFyc2VkUmVzcG9uc2UyLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgY2FyZEJ1aWxkZXIuYnVpbGRDYXJkKG9iailcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuXG4gICAgICAgIH0pXG5cbiAgICAgICAgKVxuXG5cblxuXG59XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGF0YSIsImNvbnNvbGUubG9nKFwiaGVsbG8gd29ybGQgbWFpbi5qc1wiKVxuXG5pbXBvcnQgZGF0YSBmcm9tIFwiLi9kYXRhXCJcbmRhdGEuZmV0Y2hEYXRhKCk7XG5cbi8vIGltcG9ydCBjYXJkQnVpbGRlciBmcm9tIFwiLi9jYXJkQnVpbGRlclwiXG4vLyBjYXJkQnVpbGRlci5idWlsZENhcmQoYmxvb3ApXG5cbi8vIE9uY2UgeW91IGhhdmUgcmV0cmlldmVkIGFsbCBvZiB0aGUgZGF0YSBmcm9tIHlvdXIgQVBJLCBkaXNwbGF5IHRoZW0gaW4gdGhlIERPTS4gQ3JlYXRlIGFuIEhUTUwgcmVwcmVzZW50YXRpb24gb2YgZWFjaCBvYmplY3Qgd2hpY2ggd2lsbCBkaXNwbGF5IHRoZSBuYW1lLCBpdHMgY29tcHV0ZXIsIGFuZCBpdHMgZGVwYXJ0bWVudC5cblxuLy8gQ3JlYXRlIGEgRE9NIGVsZW1lbnQgaW4geW91ciBpbmRleC5odG1sIHdpdGggYSBjbGFzcyBvZiBvdXRwdXQuXG4vLyBDcmVhdGUgYSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGEgc3RyaW5nIHRlbXBsYXRlLiBUaGUgdGVtcGxhdGUgaXMgdGhlIEhUTUwgcmVwcmVzZW50YXRpb24gZm9yIGFuICBpdGVtLlxuLy8gQ3JlYXRlIGEgZnVuY3Rpb24gdGhhdCBpbnNlcnRzIGFuIEhUTUwgcmVwcmVzZW50YXRpb24gb2YgYW4gZW1wbG95ZWUgaW50byB0aGUgRE9NXG5cbi8vIEV4YW1wbGUgZmV0Y2ggY2FsbCB1c2luZyBmdW5jdGlvbnNcblxuLy8gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODgvZm9vZFwiKVxuLy8gICAgIC50aGVuKGZvb2RzID0+IGZvb2RzLmpzb24oKSlcbi8vICAgICAudGhlbihwYXJzZWRGb29kcyA9PiB7XG4vLyAgICAgICAgIHBhcnNlZEZvb2RzLmZvckVhY2goZm9vZCA9PiB7XG4vLyAgICAgICAgICAgICBjb25zdCBmb29kQXNIVE1MID0gZm9vZEZhY3RvcnkoZm9vZClcbi8vICAgICAgICAgICAgIGFkZEZvb2RUb0RvbShmb29kQXNIVE1MKVxuLy8gICAgICAgICB9KVxuLy8gICAgIH0pIl19
