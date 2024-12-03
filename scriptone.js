function greetUser(name){
    let fName = document.getElementById('input').value
   document.getElementById('output').innerText = "Hello, " + fName;
}
greetUser("Christina")

function greet(name){
let fName = document.getElementById('input1').value
   document.getElementById('message').innerText = "Hello, " + fName;
}
greet("world")

function add(firstName, lastName){
    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let fullName = firstName + " " + lastName
    document.getElementById('result').innerText = "Full Name: " + fullName;
}
add("Christina, Sappleton")

function updateTitle(){
    var newTitle = document.getElementById('inputField').value
    document.getElementById('title').textContent = newTitle;
}

function concatenateStrings(){
    var str1 = document.getElementById('input2').value
    var str2 = document.getElementById('input3').value
    var result = str1 + " " + str2
    document.getElementById('combinedText').innerText = result;
}

var button = document.getElementById("changeColorButton")
var colorBox = document.getElementById("colorBox")
button.addEventListener("click", function(){
colorBox.style.backgroundColor = "blue";
})
