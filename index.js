var employee = {name: 'Chau', streetAdress: '123 ABC St'}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    var newObject = Object.assign({}, employee)
    newObject[key] = value
    return newObject
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    var newObject = Object.assign({}, employee)
    delete newObject[key]
    return newObject
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}