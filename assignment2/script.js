document.querySelector("#myForm").addEventListener("submit", (event) => {
    event.preventDefault();

});

function validate(){
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    let day = weekday[d.getDay()]; 


        if (day == weekday[0] || day == weekday[5] || day == weekday[6]) {
              document.getElementById("demo").innerHTML = " We dont work on" + " " + day;  
           }  else if (name.length == 0 || email.length == 0 || message.length == 0) {
            document.getElementById("error").innerHTML = "Fill out all the input fields!";  
           } else if (message.length < 8) {
            document.getElementById("long").innerHTML = "Message must be longer than 8 characters";  
           }
           else {
            document.getElementById("succes").innerHTML = "Mail sent to Cphbusiness";
            document.getElementById("error").innerHTML = "";
            document.getElementById("long").innerHTML = "";  
            document.getElementById("myForm").reset();   
           }
        }