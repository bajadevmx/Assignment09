async function init() {

    try {
        const response= await fetch('/data/employees.json')
        const employees= await response.json()
        for (let employee of employees) {
            document.body.innerHTML += `Employees Name: ${employees.name}, Extension: ${employees.extension}, Email: ${employees.email} `
        }
    } catch(e) {
        console.log(e.message)
    }
}

init()