var marks = [45, 64, 87, 95, 49, 57, 51];
var max = marks[0];
for (var i = 0; i < marks.length; i++) {
    var element = marks[i];
    if (element > max) {
        max = element;
    }
}
console.log("Highest value is: ", max);