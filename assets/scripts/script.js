// create a storage holder for the user name
var userName = '';

// fetch the elements we created in the html, save to a variable for future use

var inputNameElm = document.querySelector('#q_user_name')
var nameElm = document.querySelector('#userName')
var checkbox1 = document.querySelector('#checkbox1')
var aboutCat = document.querySelector('#aboutCat')
var inputAgeElm = document.querySelector('#q_cat_age')
var catAgeElm = document.querySelector('#catAge')
var checkbox2 = document.querySelector('#checkbox2')
var aboutPet = document.querySelector('#aboutPet')
var checkbox3 = document.querySelector('#checkbox3')
var aboutPetAge = document.querySelector('#aboutPetAge')


var petName = "Meeses";
var petType = "Tuxedo Cat";
var petAge = 5;
var petIsCat = true;

// on keyboard key press up EVENT
inputNameElm.onkeyup = (eventOutput) => {
    
    if(eventOutput.keyCode >= 65 && eventOutput.keyCode <= 90) {
            userName += eventOutput.key
            nameElm.innerHTML = userName
    }
};


 // let's see if we like cats   

checkbox1.onclick = function(eventOutput){
    if(checkbox1.checked) {
        aboutCat.innerHTML = `My pet's name is ${petName}, and she is a ${petType} that is ${petAge} years old!`
     } 
     else {
        aboutCat.innerHTML = 'You don\'t get my cat\'s information'
    }
};     


 // let's see if we like cats   

 checkbox2.onclick = function(eventOutput){
    if(checkbox2.checked) {
        aboutPet.innerHTML = `My pet is a cat`
     } 
     else {
        aboutPet.innerHTML = 'My pet is not a cat!'
    }
};     


checkbox3.onclick = function(eventOutput){
    // console.log(eventOutput)
  
    //.checked returns a value of either true or false
    // if the checkbox is checked (has value true)
    if(checkbox3.checked) {
        aboutPetAge.innerHTML = 'Yes. My cat is not 7'
        if(petAge !== 7) aboutPetAge.innerHTML = `I am glad your cat is an age other than 7`
        // display a message if the user HAS provided their cats name
        if(catName !== '') aboutPetAge.innerHTML = `I am so happy for ${petName}`

    }
    else {
        aboutPetAge.innerHTML = 'No. My cat is 7 years old'
    }
  };


//   // display a message if the user HAS NOT provided their cats name
//   if(petAge === 7) answer.innerHTML = `I am glad you like cats`
//   // display a message if the user HAS provided their cats name
//   if(catName !== '') answer.innerHTML = `I am so happy for ${catName}

// if (petAge !== 7) {
// alert("My pet is not 7 years old");
// }

// if (petAge === 5) {
// alert("My pet is 5 years old");
// }
// else if (petAge < 5) {
// alert("My pet is less than 5 years old");
// }
// else if (petAge > 5) {
// alert("My pet is older than 5 years old");
// }

// logs the value in your chrome de
// veloper console
// console.log("Welcome to our page " + userName);

// var catAge = prompt("How old is your cat?");

// Won't work as expected
// alert(catAge + 2);

// Works as expected
// alert(parseInt(catAge) + 2);