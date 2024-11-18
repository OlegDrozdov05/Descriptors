function combineKeysAndValues(keys, values) {
    const entries = keys.map((key, i) => [key, values[i]]);
    return Object.fromEntries(entries);
}

const objCombined = combineKeysAndValues(['a','b','c','d'],[10,20,30,40])
console.log(objCombined)
