// Code your solution here
function findMatching(drivers,string) {
    return drivers.filter((user)=> user.toLowerCase()===string.toLowerCase())
}


function fuzzyMatch(drivers,string) {
    return drivers.filter((firstLetter)=> firstLetter[0]===string[0])
}



function matchName(drivers,string) {
return drivers.filter((item) => item.name === string)
}