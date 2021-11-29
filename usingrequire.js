const usersObj = require("./userDetails");
  
console.log("User details are:\n", usersObj);
    
document.write("User Details are :\n\n ", JSON.stringify(usersObj), "<br><br><br>");

//fullname

document.write("1. All Fullnames using MAP")

const fullname = usersObj.users.map(x => x.firstname + " " + x.lastname);
console.log(fullname);


document.write("<br>", fullname, "<br><br><br>");

//acc ={23 :2, 33:1}

const age = usersObj.users.reduce(
function(acc, curr){
    if(acc[curr.age]){
        acc[curr.age] += 1;
    }
    else{
        acc[curr.age] = 1;
    }
    return acc;
},
    {}
);

console.log(age);

document.write("2. All ages and counts using REDUCE");
document.write("<br>", JSON.stringify(age) , "<br><br><br>");

//firstname whose age is less than 30

const lessthan30 = (usersObj.users.filter(x => x.age < 30)).map(x=>x.firstname);

console.log(lessthan30);

document.write("3. All firstnames of users with age less than 30 using FILTER");
document.write("<br>", lessthan30, "<br><br><br>");

const firstnameslessthan30 = usersObj.users.reduce(
    function(acc,curr){
        if(curr.age <30 ){
            acc.push(curr.firstname);
        }
        return acc;
    },[]
);

