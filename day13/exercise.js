// Exercise: Level 1

// 1. Display the countries array as a table

const countries = ['India', 'Estonia', 'Australia', 'Canada', 'Brazil', 'Morocco']
console.table(countries)
/*
┌─────────┬─────────────┐
│ (index) │   Values    │
├─────────┼─────────────┤
│    0    │   'India'   │
│    1    │  'Estonia'  │
│    2    │ 'Australia' │
│    3    │  'Canada'   │
│    4    │  'Brazil'   │
│    5    │  'Morocco'  │
└─────────┴─────────────┘
*/

// 2. Display the countries object as a table

const countriesObj = {1: 'India', 2: 'Estonia', 3: 'Australia', 4: 'Canada', 5: 'Brazil', 6: 'Morocco'}
console.table(countriesObj)

/*
┌─────────┬─────────────┐
│ (index) │   Values    │
├─────────┼─────────────┤
│    1    │   'India'   │
│    2    │  'Estonia'  │
│    3    │ 'Australia' │
│    4    │  'Canada'   │
│    5    │  'Brazil'   │
│    6    │  'Morocco'  │
└─────────┴─────────────┘
*/

// 3. Use console.group() to group logs

const names = ['Asabeneh', 'Brook', 'David', 'John']
const countriesArr = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Names')
console.log(names)
console.groupEnd()

console.group('Countries')
console.log(countriesArr)
console.groupEnd()

console.group('Users')
console.log(user)
console.log(users)
console.groupEnd()

/*
Names
  [ 'Asabeneh', 'Brook', 'David', 'John' ]
Countries
  [
    [ 'Finland', 'Helsinki' ],
    [ 'Sweden', 'Stockholm' ],
    [ 'Norway', 'Oslo' ]
  ]
Users
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  }
  [
    {
      name: 'Asabeneh',
      title: 'Programmer',
      country: 'Finland',
      city: 'Helsinki',
      age: 250
    },
    {
      name: 'Eyob',
      title: 'Teacher',
      country: 'Sweden',
      city: 'London',
      age: 25
    },
    {
      name: 'Asab',
      title: 'Instructor',
      country: 'Norway',
      city: 'Oslo',
      age: 22
    },
    {
      name: 'Matias',
      title: 'Developer',
      country: 'Denmark',
      city: 'Copenhagen',
      age: 28
    }
  ]
*/  

// Exercises: Level 2

// 1. 10 > 2 * 10 use console.assert()

console.assert(10 > 2 * 10, '10 is not greater than 20')  // Assertion failed: 10 is not greater than 20


// 2. Write a warning message using console.warn()

console.warn('This is a warning message!!!') // This is a warning message!!!

// 3. Write an error message using console.error()

console.error('This is an error message!') // This is an error message!

// Exercises: Level 3

// 1. Check the speed difference among the following loops: while, for, for of, forEach


const newCountries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]


  console.time('While loop')
  
  let i=0
  while(i < newCountries.length){
    console.log(newCountries[i][0], newCountries[i][1])
    i++
  }
  console.timeEnd('While loop')
  
  console.time('For loop')
  for (let i = 0; i < newCountries.length; i++) {
    console.log(newCountries[i][0], newCountries[i][1])
  }
  console.timeEnd('For loop')
  
  console.time('for of loop')
  for (const [name, city] of newCountries) {
    console.log(name, city)
  }
  console.timeEnd('for of loop')
  
  console.time('forEach loop')
  countries.forEach(([name, city]) => {
    console.log(name, city)
  })
  console.timeEnd('forEach loop')

/*
While loop: 1.277ms
Finland Helsinki
Sweden Stockholm
Norway Oslo
For loop: 0.178ms
Finland Helsinki
Sweden Stockholm
Norway Oslo
for of loop: 0.565ms
I n
E s
A u
C a
B r
M o
forEach loop: 1.29ms
*/  

