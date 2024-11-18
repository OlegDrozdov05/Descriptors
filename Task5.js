function removeKeys(obj, keys) {
    const keyArray = Object.keys(obj);
    keys.forEach(key => {
        if(keyArray.includes(key)) delete obj[key]
    })
}

const obj = { a: 1, b: 2, c: 3, d: 4 };
removeKeys(obj, ['a', 'c']);
console.log(obj); // { b: 2, d: 4 }
