// -------chap 13---------
// -------Testing sets of conditions---------


var a=29
var b=40
var c=35

if (a==b) {
    console.log("a is equal to be")
} else if (b < c){
    console.log("b is less than c")
}

if (a==b)
if (allowed==true)
{
    console.log("allowed");
}

weight=50
if (weight > 300 && time < 6) {
    alert("Come to our tryout!");
     }
     else {
     alert("Come to our cookout!");
     }
     weight= 20

     if (weight > 300 && time < 6 && age > 17 && gender === "male") {
         alert("Come to our cookout!");
         }
         else {
         alert("Come to our tryout!");
        }

        SAT= 1234
        avg=90
        if (SAT > avg || GPA > 2.5 || sport === "football") {
            alert("Welcome to Bubba State!");
             }
             else {
             alert("Have you looked into appliance repair?");
             }
    
// ----------chap 14---------
// -------if statements nested---------

if ((x === y || a === b) && c === d) {
    g = h;
     }
     else {
     e = f;
     }


     if (c === d) {
         if (x === y) {
         g = h;
         }
         else if (a === b) {
         g = h;
         }
         else {
         e = f;
         }
         }
         else {
         e = f;
         }

// --------chap 15--------
// --------Arrays--------

var resturants = ["kfc" , "macdonalds" , "sizzlers" , "xenders" , "burger lab" , "burrger o clock"]
console.log(resturants)

var city0 = "Atlanta";
var city1 = "Baltimore";
var city2 = "Chicago";
var city3 = "Denver";
var city4 = "Los Angeles";
var city5 = "Seattle";

alert("Welcome to " + city3);

var cities = ["karachi" , "islamadad" , "lahore" , "multan"]
console.log(cities)

var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];
alert("Welcome to " + cities[3]);


// -------chap 16-------
// -------Arrays--------
// -------Adding and removing elements--------

var resturants = ["kfc" , "macdonalds" , "sizzlers" , "xenders" , "burger lab" , "burrger o clock"]
resturants[7] = "california"
console.log(resturants)

var cities = ["karachi" , "islamadad" , "lahore" , "multan"]
cities[4] = "faislabad"

var pets = [];

pets[0] = "dog";
pets[1] = "cat";
pets[2] = "bird";

pets[3] = "lizard";
pets[6] = "snake";

pets[3] = "lizard";
pets[4] = "fish";
pets[5] = "gerbil";
pets[6] = "snake";

pets.pop();
pets.push("fish", "ferret");

// --------------PERCENTAGE CALCULATOR------------- 

var maths = +prompt("enter maths marks")
var english = +prompt("enter english marks")
var artifical_intelligence = +prompt("enter artifical_intelligence marks")
var computer_networking = +prompt("enter computer_networking marks")
var data_science = +prompt("enter data_science marks") 
var total_marks = 500
var obtained_marks = maths + english + artifical_intelligence + computer_networking + data_science
var percentage = obtained_marks / total_marks * 100
console.log(percentage);
console.log(obtained_marks);

if (percentage >= 80) {
    console.log("Grade : A-one")
}
else if (percentage >= 70) {
    console.log("Grade : A")
}
else if (percentage >= 60) {
    console.log("Grade : B")
}
else if (percentage >= 50) {
    console.log("Grade : C")
}
else if (percentage >= 40) {
    console.log("Grade : D")
}
else if (percentage >= 30) {
    console.log("Grade : E")
}
else {
    console.log("Fail")
}




