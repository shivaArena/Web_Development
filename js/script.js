// single line comment
/*
this is a
 multi 
 line comment
*/

// variables
/*
var name = "John Doe";
let age = 30;
const mobile = "09123456789";
*/
// var name = "arena" // i can change the value of name
// let age = 25; // error
// age = 25; // no error

// const mobile = "25609899"; // error
// mobile = "9772005699"; // error

// data primitive type in javascript
/*
    1. number
    2. string
    3. boolean
    4. object
    5. null
    6. undefined
*/
/*
// 1. number
let price = 100;
let height = 3.75;

// 2. string
let name = "Ravi Kumar";
let address = "123 Main St";

// 3. boolean
let isStudent = true;
let isMale = false;

// 4. object
let person = {
    name: "John Doe",
    age: 30,
    mobile: "09123456789"
};

// 5. null
let car = null;

// 6. undefined
let age;
*/
/*
console.log(price);
console.log(height);
console.log(name);
console.log(address);
console.log(isStudent);
console.log(isMale);
console.log(person);
console.log(car);
console.log(age);

console.log(typeof price);
console.log(typeof height);
console.log(typeof name);
console.log(typeof address);
console.log(typeof isStudent);
console.log(typeof isMale);
console.log(typeof person);
console.log(typeof car);
console.log(typeof age);
*/

// operators in javascript
/*
    1. arithmetic operators
    2. comparison operators
    3. logical operators
    4. assignment operators
*/

// 1. arithmetic operators
// +, -, *, /, %
/*
let a = 10;
let b = 5;
let c = a + b; // 15
let d = a - b; // 5
let e = a * b; // 50
let f = a / b; // 2
let g = a % b; // 0 

let h = a+b*c
let i = (a+b)*c
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i);
*/

// assignment operator
/*
let a = 10;
let b = 5;

a += 5 //15
console.log(a);
a -= 2 //13
console.log(a);
a *= 3 //39
console.log(a);
a /= 4 //9.75
console.log(a);
a %= 2 //1.75
console.log(a);

a += 1
a ++ 

a -= 1
a --


*/
// comparison operator
/*
< , > , <= , >= , == , != , === , !==
*/

/*
let a = 10;
let b = 5;
let c = "10" // true

console.log(a > b); // true
console.log(a < b); // false
console.log(a >= b); // true
console.log(a <= b); // false
console.log(a == b); // false
console.log(a != b); // true
console.log(a === c); // false
console.log(a == c); // true
console.log(a !== b); // true
console.log(typeof a, typeof c); 
*/
// logical operator

/*
&& , || , !
*/

/*
let a = 10;
let b = 5;
let c = 2;
console.log(a > b && a > c); // true
console.log(a > b && a < c); // false
console.log(a > b || a > c); // true
console.log(a < b || c > b); // false
console.log(!(a > b)); // false
*/

// conditional statement
/*
    1. if statement
    2. if-else statement
    3. nested if-else statement

let a = 10;
let b = 5;
let c = 2;

if (a > b) {
    console.log("a is greater than b");
} else {
    console.log("a is not greater than b");
}

// Add a nested if-else statement to demonstrate more complex conditional logic
if (a < b) {
    console.log("a is greater than b");
} else if (a > c) {
    console.log("a is greater than b & c");
} else {
    console.log("a is not greater than b less then c");
}

let month = 2;
switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    default:
        console.log("Invalid month");
}
*/

// looping statement
/*
    1. for loop
    2. while loop
    3. do-while loop
*/

// 1. for loop

/*
for(let i=0;i<=5;i++){
    if(i == 3){
        continue;
    }
    console.log(i);
}

for(let i=0;i<=5;i++){
    if(i == 3){
        break;
    }
    console.log(i);
}
*/

/*
let output = 0;
while (output <= 5) {
    // console.log(output);
    document.writeln("Arena Animation " + output + "<br>");
    output++;
}

let result = 50;
do{
    result += 10;
    console.log(result);
}while(result <= 10);
*/

// functions in javascript
/*
function add(a, b) {
    return a + b;
}

console.log(add(30, 10)); // 15

let subtract = (a, b)=> {
    return a - b;
}

console.log(subtract(30, 10)); // 20

let multiply = function(a, b) {
    return a * b;
}
console.log(multiply(30, 10)); // 300
*/

// built in objects in javascript
/*
    1. Math object
    2. Date object
    3. String object
    4. Number object
    5. Boolean object
    6. Array object
    7. Object object
*/

// let string = "Hello World";
// let string2 = 'Hello World';
// let string3 = `Hello World`;

// string prototype methods
/*
console.log(string.length); // 11
console.log(string.toUpperCase()); // HELLO WORLD
console.log(string.toLowerCase()); // hello world
console.log(string.charAt(0)); // H
console.log(string.indexOf("World")); // 6
console.log(string.replace("World", "Universe")); // Hello Universe
console.log(string.concat("im learing javascript")); // Hello World! im learing javascript
document.writeln("<h1>" + string + "</h1>"); // Hello World
*/

// let randomNumber = Math.random(); // 0.12345678901234567
// console.log(randomNumber*10); // 1.2345678901234567
// console.log(Math.round(randomNumber*10)); // 1.2345678901234567
// console.log(randomNumber*10); // 1.2345678901234567
// console.log(Math.floor(randomNumber*10)); // 1.2345678901234567
// console.log(Math.ceil(randomNumber*10)); // 1.2345678901234567

/*
let today = new Date();
console.log(today);
console.log(today.getFullYear()); // 2023
console.log(today.getMonth()); // 11 (Note: January is 0, December is 11)
console.log(today.getDate()); // 25
console.log(today.getDay()); // 3 (Note: Sunday is 0, Saturday is 6)
console.log(today.getHours()); // 12
console.log(today.getMinutes()); // 30
console.log(today.getSeconds()); // 45
console.log(today.getMilliseconds()); // 123
*/

// array object & methods

/*
let marks = [80, 90, 75, 95, 88];
console.log(marks);
console.log(marks[0]); // 80
console.log(marks[1]); // 90
console.log(marks[2]); // 75
console.log(marks[3]); // 95
console.log(marks[4]); // 88

marks.push(92);
console.log(marks);
marks.pop();
console.log(marks);
marks.shift();
console.log(marks);
marks.unshift(85);
console.log(marks);
marks.reverse();
console.log(marks);
marks.sort();
console.log(marks);
*/

// window object
// console.log(window)
// window.alert("welcome to javascript");
// alert("welcome to javascript");

/*
let result = confirm("Are you sure?");
console.log(result);

if(result == true){
    window.location.href = "https://www.facebook.com";
} else {
    window.close();
}
*/
// window.prompt("Enter your age");
/*
let age = window.prompt("Enter your age");
console.log(age);

let knowBirthYear = 2026 - parseInt(age);
console.log(knowBirthYear);
*/
/*
let a = window.prompt("Enter number");
let ope = window.prompt("Enter operator (+, -, *, /)");
let b = window.prompt("Enter number");

let result = 0;

switch(ope){
    case "+":
        result = parseInt(a) + parseInt(b);
        console.log(result);
        break;
    case "-":
        result = parseInt(a) - parseInt(b);
        console.log(result);
        break;
    case "*":
        result = parseInt(a) * parseInt(b);
        console.log(result);
        break;
    case "/":
        result = parseInt(a) / parseInt(b);
        console.log(result);
        break;
    default:
        console.log("Invalid operator");
}
*/

//    document object
// console.log(document)

// let homePg = document.getElementById("home");
// console.log(homePg);

// let allLinks = document.getElementsByTagName("a");
// console.log(allLinks);

// let classEle = document.getElementsByClassName("box");
// console.log(classEle);

// css type selector new ways to select element
/*
let homeEle = document.querySelector("#home");
// console.log(homeEle);

let linkEle = document.querySelector("a");
// console.log(linkEle);

let allEle = document.querySelectorAll("ul li a");
// console.log(allEle);
console.log(allEle[2]);

let innerEle = document.querySelector(".box a");
console.log(innerEle);
*/

// DOM Manupilation

/*
let hEle = document.querySelector("h1");
// console.log(hEle)

// innerText innerHTML
// hEle.innerText = "Arena Animation"
// hEle.innerText = "<li>Arena Animation</li>"
// hEle.innerHTML = "<u>Arena Animation</u>"

let emptyEle = document.querySelector("#empty");
console.log(emptyEle);
// emptyEle.innerHTML = "<h3>This a empty div</h3>"
emptyEle.innerHTML = `<div class="box">
 <p>This is a empty div </p>  
 <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Gallery</a></li>
 </ul>
 </div>`
 */

 // attribute manipulation
/*
 let imgEle = document.querySelector("img");
 imgEle.setAttribute("height", "400");
 imgEle.setAttribute("src", "images/BRAND.jpg");
*/

// let linkEle = document.querySelector("ul li a");
// linkEle.setAttribute("href", "http://www.facebook.com");
/*
let galleryEle = document.querySelector("#facebook");
console.log(galleryEle);
galleryEle.removeAttribute("href");
*/
/*
let allNav = document.querySelectorAll("ul li a");
console.log(allNav);
allNav[4].innerText="Login";
*/
// Styles manipulation
// let h1Ele = document.querySelector("h1");
// console.log(h1Ele);
// h1Ele.style.color = "red";
// h1Ele.style.backgroundColor = "yellow";

/*
let allNav = document.querySelectorAll("ul li a");
for(let i=0; i<allNav.length; i++){
    allNav[i].style.color = "red";
}
*/

// CSS manipulation
// let h1Ele = document.querySelector("h1");
// console.log(h1Ele);
// h1Ele.className = "boxBorder";
// let BoxEle = document.querySelector(".box");
// console.log(BoxEle);
// BoxEle.className = "boxBorder";

// let usdEle = document.querySelector("#usd");
// console.log(usdEle);
// usdEle.classList.add("boxBorder");
// usdEle.classList.remove("box");
// usdEle.classList.toggle("box");

// create new div element
/*
let newDiv = document.createElement("div");
newDiv.innerHTML = "<h3>New Div</h3>";
newDiv.className = "boxBorder";
document.body.appendChild(newDiv);
*/

// Events

// browser events
/*
window.onload = ()=>{
    // console.log("the page is loaded");
    // alert("the website is load");
    let elePop = document.createElement("div")
    elePop.innerHTML = `<h1> Welcome to out website </h1>
                    <p>this a javascript onload events</p>
                    <a href="http://facebook.com">Close</a>     
                    `
elePop.classList.add("popup");
document.querySelector("body").appendChild(elePop)
}
*/
// mouse events
// onclick, dblclick,mouseover

// let bodyEle = document.querySelector("body")

// bodyEle.onclick = ()=>{
//     alert("you have clicked on body")
//     changeBg()
// }

// let imgEle = document.querySelector("img")
// imgEle.onclick = ()=>{
//     imgEle.setAttribute("src","images/hero_img.png")
// }

/*
let changeBg = ()=>{
    let divEle = document.querySelector("#gallery")
    divEle.classList.add("boxBorder")
}

bodyEle.oncontextmenu = ()=>{
    alert("right click is disabled");
    return false;
}

let popUp = ()=>{
    let elePop = document.createElement("div")
    elePop.innerHTML = `<h1> Welcome to out website </h1>
                        <p>this a javascript onload events</p>
                        <a href="http://facebook.com">Close</a>  `
    elePop.classList.add("popup");
    document.querySelector("body").appendChild(elePop)
}

bodyEle.ondblclick = popUp

let selectEle = document.querySelector("#usd")

selectEle.onclick = ()=>{
    selectEle.classList.toggle("active")
}

let chatBox = document.querySelector("#chatBox")
let chatBtn = document.querySelector("#chatBtn")
chatBtn.onclick = ()=>{
    
    chatBox.classList.toggle("chatToggle")
    
    if(chatBtn.innerHTML == "Close"){
        chatBtn.innerHTML = "Open"
    }else{
        chatBtn.innerHTML = "Close"   
    }
}
    */

/*
let imgPlaceholder = document.querySelector("#imgPlaceHolder")
let imgGrid = document.querySelector("#imgGallery")
imgGrid.addEventListener("click",(e)=>{
    // console.log(e)
    // console.log(e.target.tagName == "IMG")
    if(e.target.tagName == "IMG" ){
        //  console.log(e.target.attributes.src.nodeValue)
         let imgPath = e.target.attributes.src.nodeValue
            imgPlaceholder.setAttribute("src", imgPath)
    }  
})
    */

// Form Events

let nameInput = document.querySelector("#userName")
let userInputHelp = document.querySelector("#userNameHelp")

nameInput.addEventListener("focus",(e)=>{
    userInputHelp.innerHTML = "User Name should be 6 letter"
})

nameInput.addEventListener("blur",(e)=>{
    if(nameInput.value.length == 0 ){
        userInputHelp.innerHTML = "Please enter the user name"
    }
})

/*
nameInput.onblur = ()=>{
    // let inputNumber = nameInput.value.length
    // console.log(typeof inputNumber)
    // console.log(inputNumber)
    if(nameInput.value.length === 0){
           userInputHelp.innerHTML = "Please enter the user name"
    }  
}
    */