// var n=require("readline-sync")
// var name=n.question("Enter name:")
// // var age=n.question("Enter age:")
// var a={
//     "user": [
//         {
//             "name": "ss",
//             "password": "as@1"
            
//         },{"name": "sapna",
//             "password": "as@1"

//         },{
//         "name": "siaaaaaa",
//             "password": "as@1",
//         }
//     ]
// }
// // console.log(a["user"][0]["name"])
// for (var i=0;i<a["user"].length;i++){
//     if (a["user"][0]["name"]==name){
//         console.log("Exist")
//     }
//     else{
//         console.log("Not exist")
//     }
// }



var name="sapna"
var a={
    "user": [
        {
            "name": "ss",
            "password": "as@1"
            
        },{"name": "sapna",
            "password": "as@1"

        },{
        "name": "siaaaaaa",
            "password": "as@1",
        }
    ]
}
console.log(a["user"].length)
var i=0
while (i<a["user"].length){
    if (a["user"][i]["name"]==name){
        console.log("Exist")
        break
    }
    else{
      a=a+1
    }
    i++
}