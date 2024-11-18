function deepCopy(obj) {
    if(obj === null || typeof obj !== 'object' || Array.isArray(obj)) return obj
    
    const result = {};
    for(key in obj) {
        result[key] = deepCopy(obj[key]);
    }
    return result;
}


const original = {
    a: 20,
    b: 30,
    c: [1,2,3,4],
    deep: {
        d: true
    }
}

const copy = deepCopy(original)
copy.a = 50;
copy.deep = false;
console.log(original)
console.log(copy)
