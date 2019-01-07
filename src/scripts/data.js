import cardBuilder from "./cardBuilder"

const data = {

    fetchData() {
       return fetch("http://localhost:8088/Employees/")
        .then(response => response.json())
        .then(parsedData => parsedData.forEach(obj => {
            console.log("obj: ", obj)
            let bloop = obj.computerId
            let bleep = obj.departmentId
            // console.log("computerId:", bloop)
            // console.log("departmentId:", bleep)


            fetch(`http://localhost:8088/Computers/${bloop}`)
            .then(response => response.json())
            .then(parsedResponse => {

                // console.log(parsedResponse.name)
                obj.computerName = parsedResponse.name
                // cardBuilder.buildCard(obj)

                fetch(`http://localhost:8088/Departments/${bleep}`)
                .then(response => response.json())
                .then(parsedResponse2 => {

                    obj.departmentName = parsedResponse2.name
                    cardBuilder.buildCard(obj)
                })
            }
            )

        })

        )




}

}

export default data