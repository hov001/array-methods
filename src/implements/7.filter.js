// Filter implement method
const filterImplement = (array, callback) => {
  const filteredArr = []

  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index, array)) filteredArr.push(array[index])
  }

  return filteredArr
}

// Example task
let numbers = [4, 24, 7, 15]

const isPrime = (element) => {
  return element > 5
}

console.log(filterImplement(numbers, isPrime))
