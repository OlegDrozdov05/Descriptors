const car = {}
car.price = 10000
Object.defineProperty(car,'price',{
    enumerable: false,
})
