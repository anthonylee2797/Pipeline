function minSum(array, target){
  // iterate through array
  for (let i = 0; i < array.length; i++){
    let num = array[i]
    // iterate through every other element in that array
    for (let x = i+1; x < array.length; x++){
      let addNum = array[x]
      // we're going to add the original index + that other element and if it is equal to target
      if (num + addNum === target){
        return true
      }
    }
  }
  return false
}

function minSum2 (array, target){
  // intialize new array to store differences
  let differences = [] // 8, 6 , 5

  // iterate through array
  for (let i = 0; i < array.length; i++){
    let current = array[i] // 5

    if (differences.includes(current)){
      return true
    } else {
      differences.push(target - current)
    }

  }
  return false
}

function reverse (string){
  return string.split('').reverse().join('')
}

console.log(reverse('hello'))




console.log(minSum2([1,3,4,5],9))