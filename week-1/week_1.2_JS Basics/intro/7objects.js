// const user1 = {
//     firstname: "ripudaman",
//     gender: "male"
// }

//console.log(user1["gender"]);

//array of objects

const allUsers = [{
    firstname : "ripudaman",
    gender : "male",
    metadata : {
        age: 21,
        address: "NYC"
    }
},{
    firstname: "rav",
    gender: "female",
    metadata: {
        age:31,
        address:"Manhatten"
    }
},{
    firstname: "Ish",
    gender:"male",
    metadata:{
        age: 41,
        address: "California"
    }
}
]

for(let i =0;i<allUsers.length;i++){
    if(allUsers[i]["gender"]== "male"){
        console.log(allUsers[i]["firstname"]);
    }
    if(allUsers[i]["metadata"]["address"]== "NYC"){
        console.log(allUsers[i]["metadata"]["age"]);
    }
   // console.log(allUsers[i]["metadata"]);
}