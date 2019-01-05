const data = {
    fetchData() {
       return fetch("http://localhost:8088/Employees?_expand=Departments&_expand=Computers")
        .then(response => response.json())
        .then(data2 => console.log(data2))
    }
}

export default data