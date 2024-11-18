function countNumericValues(obj) {
   return Object.values(obj).filter(value => typeof value === "number").length
}

let obj = {
    a: 25,
    b: 30,
    c: true,
    d: "abc"
}
console.log(countNumericValues(obj))
