function getArraySum(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [45, 64, 87, 95, 49, 57, 74];
var result = getArraySum(numbers);
console.log("Total of the numbers:", result);