const petNames = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam']
console.log(petNames)

let withSal = petNames
withSal.push('Sal')
console.log(withSal)

// let pet3 = petNames[2]
console.log(`The third pet is named ${petNames[2]}`)

let withSalLength = withSal.length
console.log(withSalLength)

withSal.pop()
console.log(withSal)