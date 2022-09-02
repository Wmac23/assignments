function calculate () {
var username = document.getElementById("username").value
var height = document.getElementById("height").value
var weight = document.getElementById("weight").value
var bmi = (weight/(height*height))*10000;
var bmindex = bmi.toFixed(2);


const person ={
    name: username,
    weight: weight,
    height: height,
    bmindex: bmindex
};
    document.getElementById("result").innerHTML = "Name: " + person.name + " <br>  Weight " + person.weight + " <br>  Height " + person.height + " <br> BMI: " + person.bmindex;
    console.log(person);
    document.getElementById("myForm").reset();
}