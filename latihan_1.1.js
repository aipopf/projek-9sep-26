function calculateDiscountPrice(price, dicountPercent){
    return price - (price * dicountPercent / 100);
}

console.log(calculateDiscountPrice(10000, 10));