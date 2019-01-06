

// sample HTML template
{/* <article class="employee">
    <header class="employee__name">
        <h1>Rainu Ittycheriah</h1>
    </header>
    <section class="employee__department">
        Works in the IT department
    </section>
    <section class="employee__computer">
        Currently using a 2015 MacBook Pro
    </section>
</article> */}

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
        let employeeCard =document.createElement("article");
        employeeCard.classList.add("employee");
        outputArticle.appendChild(employeeCard);
        let employeeHeader =document.createElement("header");
        employeeHeader.classList.add("employee__name")
        employeeHeader.innerHTML = `<h1>${object.name}</h1>`
        employeeCard.appendChild(employeeHeader);
        let employeeSection=document.createElement("section");
        employeeSection.classList.add("employee__department");
        employeeSection.innerHTML= `Works in the ${object.departmentId}`
        //i'm having trouble understanding how to get from "departmentId = 2" to departmentId = "Operations"
        employeeCard.appendChild(employeeSection);
        let employeeComputerSection = document.createElement("section");
        employeeComputerSection.classList.add("employee__computer");
        employeeComputerSection.innerHTML = `Using computer Id #:${object.computerId}`
        employeeCard.appendChild(employeeComputerSection);
    }
}
export default cardBuilder
