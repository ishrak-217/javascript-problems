var business = 450;
var minister = 650;
var shochib = 750;

// if else method
if (business > minister) {
    if (business > shochib) {
        console.log("Business is bigger");
    }
    else {
        console.log("Shochib is bigger");
    }
}
else {
    if (minister > shochib) {
        console.log("Minister is bigger");
    }
    else {
        console.log("Shochib is bigger");
    }
}
// Math.max() method
var max = Math.max(business, minister, shochib);
console.log(max);