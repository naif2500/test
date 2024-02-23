var lastname = "Soufiane"
var names = ["Soufiane", "Zaydi"];
var time = 9


    // Change the inner HTML content of the <h1> element
document.querySelector("h2").innerHTML = lastname;


function changeName() {
    // Get a random index from the array
    var randomIndex = Math.floor(Math.random() * names.length);

    // Get a random name using the random index
    var randomName = names[randomIndex];

    // Update the content of the h1 element
    document.getElementById("name").textContent = randomName;}

function test(){
    lastname = "hello";
    document.getElementById("fullname").textContent = lastname;
}
function hide_name(){
    if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
    
}