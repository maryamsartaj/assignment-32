// Array of current Users
var current_users = ["Usman", "Ali", "Areeba", "Zain", "Usama"];
// Array of New users
var new_users = ["Hamza", "Ayesha", "Ali", "Mahad", "Areeba"];
// Loop through new_users to check for usernames avaibility
new_users.forEach(function (new_one_user) {
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() == new_one_user.toLowerCase(); });
    //print Different messages using If.Else statement
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available"));
    }
});
