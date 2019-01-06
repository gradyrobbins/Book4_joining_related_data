console.log("hello world main.js")

import data from "./data"
let bloop = data.fetchData();
// console.log(bloop)

import cardBuilder from "./cardBuilder"
cardBuilder.buildCard(bloop)

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