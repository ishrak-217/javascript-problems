
function megaFriend(names) {
    var lgth = 0;
    var longest;

    for (var i = 0; i < names.length; i++) {
        if (names[i].length > lgth) {
            var lgth = names[i].length;
            longest = names[i];
        }
    }
    return longest;
}
var marks = megaFriend(['kalam', 'salluuu', 'dada', 'yoo', 'hi']);
console.log("Highest value is: ", marks);