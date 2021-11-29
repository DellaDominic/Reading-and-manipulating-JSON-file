(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
    "users": [{"firstname" : "Della", "lastname" : "Dominic", "age" : 23},
    {"firstname" : "Dona", "lastname" : "Dominic", "age" : 23},
    {"firstname" : "kissan", "lastname" : "sharma", "age": 33}]
}
},{}],2:[function(require,module,exports){
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


},{"./userDetails":1}]},{},[2]);
