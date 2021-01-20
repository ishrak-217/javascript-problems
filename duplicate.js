var name = [3, 6, 2, 7, 3, 8, 1, 11, 56, 8, 9];
var uniqueName = [];
for (var i = 0; i < name.length; i++) {
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if (index == -1) {
        uniqueName.push(element);
    }
}
console.log(uniqueName);