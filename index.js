// Code your solution here

function findMatching(drivers, c) {
  return drivers.filter(n =>
    n.toLowerCase() === c.toLowerCase()
  )
}

function fuzzyMatch(drivers, str) {
  return drivers.filter(x => {
    let firstChar = x.charAt(0)
      return str.charAt(0) === firstChar
  })
}

function matchName(drivers, str) {
    return drivers.filter(n => {
      return n.name === str;
    });
}