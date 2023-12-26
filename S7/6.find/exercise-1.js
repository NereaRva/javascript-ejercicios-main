const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const mayor18 = ages.filter(function (edad){
    return edad > 18
})
console.log(mayor18);