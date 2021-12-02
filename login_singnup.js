var n = require("readline-sync")
console.log("What you want signup or login:");
var user = n.question("Prees 1 for signup & 2 for login:")
var dic = {}
if (user == "1") {
    var user1 = n.question("Enter username:")
    var pass = n.question("Enter password:")
    var l = 0
    var p = 0
    var d = 0
    if (pass.length) {
        for (var i = 0; i < pass.length; i++) {
            if (pass[i] >= "0" && pass[i] <= "9") {
                l++
            }
            else if (pass[i] >= "a" && pass[i] <= "z") {
                p++
            }
            else if (pass[i] == "@" || pass[i] == "#") {
                d++
            }
        }
        if (l >= 1 && p >= 1 && d >= 1 && l + p + d == pass.length) {
            var pass1 = n.question("Conferm password:")
            if (pass == pass1) {
                var fs = require("fs")
                var k = fs.readFileSync("myFile.json", "utf-8")
                if (k.length == 0) {
                    var detail_list = []
                    var full_detail = {}
                    var user_name_password = {}
                    user_name_password["name"] = user1
                    user_name_password["password"] = pass
                    var dis = n.question("Enter dob:")
                    var dob = n.question("Enter Discription:")
                    var hobby = n.question("Enter hobby:")
                    var gender = n.question("Enter gender:")
                    user_name_password["profile"] = {
                        "dis": dis,
                        "dob": dob,
                        "hobby": hobby,
                        "gender": gender

                    }
                    detail_list.push(user_name_password)
                    full_detail["user"] = detail_list
                    var data = full_detail


                    const data1 = JSON.stringify(data, null, 4)
                    fs.writeFile('./myFile.json', data1, 'utf8', (err) => {
                        if (err) {
                            console.log("Error writing file");
                        }
                        else {
                            console.log("🌸🌸🌸🌸Congratulations , You signup sucessfully 🌸🌸🌸🌸");
                        }
                    })
                }
                else {
                    var j = fs.readFileSync("myFile.json", "utf-8")
                    //need to convert into object.
                    let convertIntoObject = JSON.parse(j)
                    let createNewUserState = true
                    for (i of convertIntoObject['user']) {
                        // here is not needed to check password in the if condition
                        if (i["name"] == user1) {
                            console.log("User already exist")
                            createNewUserState = false
                            break
                        }
                    }
                    if (createNewUserState) {
                        var user_name_password = {}
                        user_name_password["name"] = user1
                        user_name_password["password"] = pass
                        var dis = n.question("Enter dob:")
                        var dob = n.question("Enter Discription:")
                        var hobby = n.question("Enter hobby:")
                        var gender = n.question("Enter gender:")
                        user_name_password["profile"] = {
                            "dis": dis,
                            "dob": dob,
                            "hobby": hobby,
                            "gender": gender

                        }
                        convertIntoObject['user'].push(user_name_password)
                        let convertIntoString = JSON.stringify(convertIntoObject, null, 4)
                        fs.writeFile('./myFile.json', convertIntoString, 'utf8', (err) => {
                            if (err) {
                                console.log("Error writing file");
                            }
                            else {
                                console.log("File is written sucessfully");
                            }
                        })
                    }



                }
            }
            else {
                console.log('password did not match');
            }
        }
        else {
            console.log('password is not strong');
        }
    }
}
if (user == "2") {
    var login_user = n.question("Enter username:")
    var login_pass = n.question("Enter password:")
    var fs = require("fs")
    var count = 0
    var login_store = fs.readFileSync("myFile.json", "utf-8")
    let convertIntoObject = JSON.parse(login_store)
    let createNewUserState = true
    for (i of convertIntoObject["user"]) {
        if (count == 0)
            if (i["name"] == login_user && i["password"] == login_pass) {
                console.log("🌸🌸🌸🌸Congratulations You login Sucessfully🌸🌸🌸🌸")
                count++
                break
            }
    }
    if (count == 0) {
        console.log("You entered incorrect input....Please try again")
    }
}