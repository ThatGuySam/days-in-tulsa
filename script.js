const days = document.querySelector('#days')

const revivalStart = new Date('Febuary 2, 2021 07:00:00')

const timeDifference = Date.now() - revivalStart.getTime()
  
// Calculate the no. of days between two dates
const daysDifference = timeDifference / (1000 * 3600 * 24)

console.log('r', revivalStart)
console.log('d', daysDifference)
  
days.innerHTML = Math.floor(daysDifference)