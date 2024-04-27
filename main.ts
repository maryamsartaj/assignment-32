// Array of current Users
let current_users = ["Usman","Ali","Areeba","Zain","Usama"]

// Array of New users
let new_users = ["Hamza","Ayesha","Ali","Mahad","Areeba"]

// Loop through new_users to check for usernames avaibility
new_users.forEach(new_one_user => {
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() == new_one_user.toLowerCase())
//print Different messages using If.Else statement
if(our_condition){
    console.log(`Sorry ${new_one_user} is already taken!`)
}else{
    console.log(`This Username ${new_one_user} is available`)
}
})