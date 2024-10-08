function map (elements,modifer) {
   return elements.map(modifer)
}

function isEven(number) { 
    return number % 2 === 0;
}
console.log(map([5, 8, 10], isEven));
