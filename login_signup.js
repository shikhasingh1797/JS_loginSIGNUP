var n=require("readline-sync")
var user=n.question("Login or signup:")
var dic={}
if (user=="1"){
    var user1=n.question("Enter username:")
    var pass=n.question("Enter password:")
    var l=0
    var p=0
    var d=0
    if(pass.length==4){
        for(var i=0;i<pass.length;i++){
            if(pass[i]>="0" && pass[i]<="9"){
                l++
            }
            else if(pass[i]>="a" && pass[i]<="z"){
                p++
            }
            else if(pass[i]=="@" || pass[i]=="#"){
                d++
            }
        }
        if(l>=1 && p>=1 && d>=1 && l+p+d==pass.length){
            var pass1=n.question("Conferm password:")
            if(pass==pass1){
                var fs=require("fs")
                var k=fs.readFileSync("myFile.json","utf-8")
                console.log(k)
                if (k==""){
                    var detail_list=[]
                    var full_detail={}
                    var user_name_password={}
                    user_name_password["name"]=user1
                    user_name_password["password"]=pass
                    var dis=n.question("Enter dob:")
                    var dob=n.question("Enter Discription:")
                    var hobby=n.question("Enter hobby:")
                    var gender=n.question("Enter gender:")
                    user_name_password["profile"]={
                        "dis":dis,
                        "dob":dob,
                        "hobby":hobby,
                        "gender":gender

                    }
                    detail_list.push(user_name_password)
                    full_detail["user"]=detail_list
                    var data=full_detail


                    const data1=JSON.stringify(data,null,4)
                    fs.writeFile('./myFile.json',data1,'utf8',(err)=>{
                        if(err){
                            console.log("Error writing file");
                        }
                        else{
                            console.log("File is written sucessfully");
                        }
                    })
                }
                else{
                    var j=fs.readFileSync("myFile.json","utf-8")
                    for (i in k["user"]){
                        if(i["name"]==user1 && i["password"]==pass){
                            console.log("user already exist")
                        }
                        else{
                            var user_name_password={}
                            user_name_password["name"]=user1
                            user_name_password["password"]=pass
                            var dis=n.question("Enter dob:")
                            var dob=n.question("Enter Discription:")
                            var hobby=n.question("Enter hobby:")
                            var gender=n.question("Enter gender:")
                            user_name_password["profile"]={
                                "dis":dis,
                                "dob":dob,
                                "hobby":hobby,
                                "gender":gender

                            }
                            k["user"].push(user_name_password)
                            console.log(k)
                        }
                    }

                }
            }
        }
    }
}