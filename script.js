const student = {
  name: 'Alex',
  age: 20,
  email: 'alex@email.com'
}

const studentStr = JSON.stringify(student)

console.log(studentStr)
console.log('I made it here')

const jsObject = JSON.parse(studentStr)

console.log(jsObject)