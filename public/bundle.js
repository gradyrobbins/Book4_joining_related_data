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
    employeeSection.innerHTML = `Works in the ${object.departmentId}`; //i'm having trouble understanding how to get from "departmentId = 2" to departmentId = "Operations"

    employeeCard.appendChild(employeeSection);
    let employeeComputerSection = document.createElement("section");
    employeeComputerSection.classList.add("employee__computer");
    employeeComputerSection.innerHTML = `Using computer Id #:${object.computerId}`;
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
    return fetch("http://localhost:8088/Employees").then(response => response.json()).then(parsedData => parsedData.forEach(obj => {
      console.log(obj);

      _cardBuilder.default.buildCard(obj); // const foodAsHTML = foodFactory(food)
      // addFoodToDom(foodAsHTML)

    }));
  }

};
var _default = data;
exports.default = _default;

},{"./cardBuilder":1}],3:[function(require,module,exports){
"use strict";

var _data = _interopRequireDefault(require("./data"));

var _cardBuilder = _interopRequireDefault(require("./cardBuilder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("hello world main.js");

let bloop = _data.default.fetchData(); // console.log(bloop)


_cardBuilder.default.buildCard(bloop); // Once you have retrieved all of the data from your API, display them in the DOM. Create an HTML representation of each object which will display the name, its computer, and its department.
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

},{"./cardBuilder":1,"./data":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2NhcmRCdWlsZGVyLmpzIiwiLi4vc2NyaXB0cy9kYXRhLmpzIiwiLi4vc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDRUE7QUFDQSxDQVVjO0FBVmI7Ozs7Ozs7Ozs7O0FBWUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQUksV0FBVyxHQUFHO0FBQ2QsRUFBQSxTQUFTLENBQUMsTUFBRCxFQUFTO0FBQ2QsUUFBSSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBcEI7QUFDQSxRQUFJLFlBQVksR0FBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFsQjtBQUNBLElBQUEsWUFBWSxDQUFDLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBMkIsVUFBM0I7QUFDQSxJQUFBLGFBQWEsQ0FBQyxXQUFkLENBQTBCLFlBQTFCO0FBQ0EsUUFBSSxjQUFjLEdBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBcEI7QUFDQSxJQUFBLGNBQWMsQ0FBQyxTQUFmLENBQXlCLEdBQXpCLENBQTZCLGdCQUE3QjtBQUNBLElBQUEsY0FBYyxDQUFDLFNBQWYsR0FBNEIsT0FBTSxNQUFNLENBQUMsSUFBSyxPQUE5QztBQUNBLElBQUEsWUFBWSxDQUFDLFdBQWIsQ0FBeUIsY0FBekI7QUFDQSxRQUFJLGVBQWUsR0FBQyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFwQjtBQUNBLElBQUEsZUFBZSxDQUFDLFNBQWhCLENBQTBCLEdBQTFCLENBQThCLHNCQUE5QjtBQUNBLElBQUEsZUFBZSxDQUFDLFNBQWhCLEdBQTRCLGdCQUFlLE1BQU0sQ0FBQyxZQUFhLEVBQS9ELENBWGMsQ0FZZDs7QUFDQSxJQUFBLFlBQVksQ0FBQyxXQUFiLENBQXlCLGVBQXpCO0FBQ0EsUUFBSSx1QkFBdUIsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUE5QjtBQUNBLElBQUEsdUJBQXVCLENBQUMsU0FBeEIsQ0FBa0MsR0FBbEMsQ0FBc0Msb0JBQXRDO0FBQ0EsSUFBQSx1QkFBdUIsQ0FBQyxTQUF4QixHQUFxQyx1QkFBc0IsTUFBTSxDQUFDLFVBQVcsRUFBN0U7QUFDQSxJQUFBLFlBQVksQ0FBQyxXQUFiLENBQXlCLHVCQUF6QjtBQUNIOztBQW5CYSxDQUFsQjtlQXFCZSxXOzs7Ozs7Ozs7OztBQ3pEZjs7OztBQUVBLE1BQU0sSUFBSSxHQUFHO0FBQ1QsRUFBQSxTQUFTLEdBQUc7QUFDVCxXQUFPLEtBQUssQ0FBQyxpQ0FBRCxDQUFMLENBQ0wsSUFESyxDQUNBLFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBVCxFQURaLEVBRUwsSUFGSyxDQUVBLFVBQVUsSUFBSSxVQUFVLENBQUMsT0FBWCxDQUFtQixHQUFHLElBQUk7QUFDMUMsTUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLEdBQVo7O0FBQ0EsMkJBQVksU0FBWixDQUFzQixHQUF0QixFQUYwQyxDQUcxQztBQUNBOztBQUNILEtBTG1CLENBRmQsQ0FBUDtBQVFGOztBQVZRLENBQWI7ZUFhZSxJOzs7Ozs7QUNiZjs7QUFJQTs7OztBQU5BLE9BQU8sQ0FBQyxHQUFSLENBQVkscUJBQVo7O0FBR0EsSUFBSSxLQUFLLEdBQUcsY0FBSyxTQUFMLEVBQVosQyxDQUNBOzs7QUFHQSxxQkFBWSxTQUFaLENBQXNCLEtBQXRCLEUsQ0FFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlxuXG4vLyBzYW1wbGUgSFRNTCB0ZW1wbGF0ZVxuey8qIDxhcnRpY2xlIGNsYXNzPVwiZW1wbG95ZWVcIj5cbiAgICA8aGVhZGVyIGNsYXNzPVwiZW1wbG95ZWVfX25hbWVcIj5cbiAgICAgICAgPGgxPlJhaW51IEl0dHljaGVyaWFoPC9oMT5cbiAgICA8L2hlYWRlcj5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImVtcGxveWVlX19kZXBhcnRtZW50XCI+XG4gICAgICAgIFdvcmtzIGluIHRoZSBJVCBkZXBhcnRtZW50XG4gICAgPC9zZWN0aW9uPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZW1wbG95ZWVfX2NvbXB1dGVyXCI+XG4gICAgICAgIEN1cnJlbnRseSB1c2luZyBhIDIwMTUgTWFjQm9vayBQcm9cbiAgICA8L3NlY3Rpb24+XG48L2FydGljbGU+ICovfVxuXG4vLyByZXBvIGNyZWVwaW5nOiB0aGFua3MgQXNpYSBDYXJ0ZXIuXG4vLyBsZXQgY2FyZEhUTUwgPSB7XG4vLyAgICAgYnVpbGRIVE1MKHZhbHVlKSB7XG4vLyAgICAgICAgIGxldCBvdXRwdXRBcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXRwdXRcIik7XG4vLyAgICAgICAgIGxldCBlbXBsb3llZUNhcmQgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xuLy8gICAgICAgICBlbXBsb3llZUNhcmQuY2xhc3NMaXN0LmFkZChcImVtcGxveWVlXCIpO1xuLy8gICAgICAgICBvdXRwdXRBcnRpY2xlLmFwcGVuZENoaWxkKGVtcGxveWVlQ2FyZCk7XG4vLyAgICAgICAgIGxldCBlbXBsb3llZUhlYWRlciA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbi8vICAgICAgICAgZW1wbG95ZWVIZWFkZXIuY2xhc3NMaXN0LmFkZChcImVtcGxveWVlX19uYW1lXCIpXG4vLyAgICAgICAgIGVtcGxveWVlSGVhZGVyLmlubmVySFRNTCA9IGA8aDE+JHt2YWx1ZS5uYW1lfTwvaDE+YFxuLy8gICAgICAgICBlbXBsb3llZUNhcmQuYXBwZW5kQ2hpbGQoZW1wbG95ZWVIZWFkZXIpO1xuLy8gICAgICAgICBsZXQgZW1wbG95ZWVTZWN0aW9uPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuLy8gICAgICAgICBlbXBsb3llZVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImVtcGxveWVlX19kZXBhcnRtZW50XCIpO1xuLy8gICAgICAgICBlbXBsb3llZVNlY3Rpb24uaW5uZXJIVE1MPSBgV29ya3MgaW4gdGhlICR7dmFsdWUuZGVwYXJ0bWVudC5uYW1lfWBcbi8vICAgICAgICAgZW1wbG95ZWVDYXJkLmFwcGVuZENoaWxkKGVtcGxveWVlU2VjdGlvbik7XG4vLyAgICAgICAgIGxldCBlbXBsb3llZUNvbXB1dGVyU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuLy8gICAgICAgICBlbXBsb3llZUNvbXB1dGVyU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiZW1wbG95ZWVfX2NvbXB1dGVyXCIpO1xuLy8gICAgICAgICBlbXBsb3llZUNvbXB1dGVyU2VjdGlvbi5pbm5lckhUTUwgPSBgQ3VycmVudGx5IHVzaW5nIGEgJHt2YWx1ZS5jb21wdXRlci5uYW1lfWBcbi8vICAgICAgICAgZW1wbG95ZWVDYXJkLmFwcGVuZENoaWxkKGVtcGxveWVlQ29tcHV0ZXJTZWN0aW9uKTtcbi8vICAgICB9XG4vLyB9XG5sZXQgY2FyZEJ1aWxkZXIgPSB7XG4gICAgYnVpbGRDYXJkKG9iamVjdCkge1xuICAgICAgICBsZXQgb3V0cHV0QXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0cHV0XCIpO1xuICAgICAgICBsZXQgZW1wbG95ZWVDYXJkID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcbiAgICAgICAgZW1wbG95ZWVDYXJkLmNsYXNzTGlzdC5hZGQoXCJlbXBsb3llZVwiKTtcbiAgICAgICAgb3V0cHV0QXJ0aWNsZS5hcHBlbmRDaGlsZChlbXBsb3llZUNhcmQpO1xuICAgICAgICBsZXQgZW1wbG95ZWVIZWFkZXIgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgICAgIGVtcGxveWVlSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJlbXBsb3llZV9fbmFtZVwiKVxuICAgICAgICBlbXBsb3llZUhlYWRlci5pbm5lckhUTUwgPSBgPGgxPiR7b2JqZWN0Lm5hbWV9PC9oMT5gXG4gICAgICAgIGVtcGxveWVlQ2FyZC5hcHBlbmRDaGlsZChlbXBsb3llZUhlYWRlcik7XG4gICAgICAgIGxldCBlbXBsb3llZVNlY3Rpb249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgICAgIGVtcGxveWVlU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiZW1wbG95ZWVfX2RlcGFydG1lbnRcIik7XG4gICAgICAgIGVtcGxveWVlU2VjdGlvbi5pbm5lckhUTUw9IGBXb3JrcyBpbiB0aGUgJHtvYmplY3QuZGVwYXJ0bWVudElkfWBcbiAgICAgICAgLy9pJ20gaGF2aW5nIHRyb3VibGUgdW5kZXJzdGFuZGluZyBob3cgdG8gZ2V0IGZyb20gXCJkZXBhcnRtZW50SWQgPSAyXCIgdG8gZGVwYXJ0bWVudElkID0gXCJPcGVyYXRpb25zXCJcbiAgICAgICAgZW1wbG95ZWVDYXJkLmFwcGVuZENoaWxkKGVtcGxveWVlU2VjdGlvbik7XG4gICAgICAgIGxldCBlbXBsb3llZUNvbXB1dGVyU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgICAgICBlbXBsb3llZUNvbXB1dGVyU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiZW1wbG95ZWVfX2NvbXB1dGVyXCIpO1xuICAgICAgICBlbXBsb3llZUNvbXB1dGVyU2VjdGlvbi5pbm5lckhUTUwgPSBgVXNpbmcgY29tcHV0ZXIgSWQgIzoke29iamVjdC5jb21wdXRlcklkfWBcbiAgICAgICAgZW1wbG95ZWVDYXJkLmFwcGVuZENoaWxkKGVtcGxveWVlQ29tcHV0ZXJTZWN0aW9uKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjYXJkQnVpbGRlclxuIiwiaW1wb3J0IGNhcmRCdWlsZGVyIGZyb20gXCIuL2NhcmRCdWlsZGVyXCJcblxuY29uc3QgZGF0YSA9IHtcbiAgICBmZXRjaERhdGEoKSB7XG4gICAgICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L0VtcGxveWVlc1wiKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKHBhcnNlZERhdGEgPT4gcGFyc2VkRGF0YS5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhvYmopXG4gICAgICAgICAgICBjYXJkQnVpbGRlci5idWlsZENhcmQob2JqKTtcbiAgICAgICAgICAgIC8vIGNvbnN0IGZvb2RBc0hUTUwgPSBmb29kRmFjdG9yeShmb29kKVxuICAgICAgICAgICAgLy8gYWRkRm9vZFRvRG9tKGZvb2RBc0hUTUwpXG4gICAgICAgIH0pKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGF0YSIsImNvbnNvbGUubG9nKFwiaGVsbG8gd29ybGQgbWFpbi5qc1wiKVxuXG5pbXBvcnQgZGF0YSBmcm9tIFwiLi9kYXRhXCJcbmxldCBibG9vcCA9IGRhdGEuZmV0Y2hEYXRhKCk7XG4vLyBjb25zb2xlLmxvZyhibG9vcClcblxuaW1wb3J0IGNhcmRCdWlsZGVyIGZyb20gXCIuL2NhcmRCdWlsZGVyXCJcbmNhcmRCdWlsZGVyLmJ1aWxkQ2FyZChibG9vcClcblxuLy8gT25jZSB5b3UgaGF2ZSByZXRyaWV2ZWQgYWxsIG9mIHRoZSBkYXRhIGZyb20geW91ciBBUEksIGRpc3BsYXkgdGhlbSBpbiB0aGUgRE9NLiBDcmVhdGUgYW4gSFRNTCByZXByZXNlbnRhdGlvbiBvZiBlYWNoIG9iamVjdCB3aGljaCB3aWxsIGRpc3BsYXkgdGhlIG5hbWUsIGl0cyBjb21wdXRlciwgYW5kIGl0cyBkZXBhcnRtZW50LlxuXG4vLyBDcmVhdGUgYSBET00gZWxlbWVudCBpbiB5b3VyIGluZGV4Lmh0bWwgd2l0aCBhIGNsYXNzIG9mIG91dHB1dC5cbi8vIENyZWF0ZSBhIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYSBzdHJpbmcgdGVtcGxhdGUuIFRoZSB0ZW1wbGF0ZSBpcyB0aGUgSFRNTCByZXByZXNlbnRhdGlvbiBmb3IgYW4gIGl0ZW0uXG4vLyBDcmVhdGUgYSBmdW5jdGlvbiB0aGF0IGluc2VydHMgYW4gSFRNTCByZXByZXNlbnRhdGlvbiBvZiBhbiBlbXBsb3llZSBpbnRvIHRoZSBET01cblxuLy8gRXhhbXBsZSBmZXRjaCBjYWxsIHVzaW5nIGZ1bmN0aW9uc1xuXG4vLyBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9mb29kXCIpXG4vLyAgICAgLnRoZW4oZm9vZHMgPT4gZm9vZHMuanNvbigpKVxuLy8gICAgIC50aGVuKHBhcnNlZEZvb2RzID0+IHtcbi8vICAgICAgICAgcGFyc2VkRm9vZHMuZm9yRWFjaChmb29kID0+IHtcbi8vICAgICAgICAgICAgIGNvbnN0IGZvb2RBc0hUTUwgPSBmb29kRmFjdG9yeShmb29kKVxuLy8gICAgICAgICAgICAgYWRkRm9vZFRvRG9tKGZvb2RBc0hUTUwpXG4vLyAgICAgICAgIH0pXG4vLyAgICAgfSkiXX0=
