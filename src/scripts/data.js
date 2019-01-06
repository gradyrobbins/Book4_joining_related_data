import cardBuilder from "./cardBuilder"

const data = {
    fetchData() {
       return fetch("http://localhost:8088/Employees")
        .then(response => response.json())
        .then(parsedData => parsedData.forEach(obj => {
            console.log(obj)
            cardBuilder.buildCard(obj);
            // const foodAsHTML = foodFactory(food)
            // addFoodToDom(foodAsHTML)
        }))
    }
}

export default data