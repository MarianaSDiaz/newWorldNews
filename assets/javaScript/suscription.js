const errorsElement = document.getElementsByClassName('error');
const fname = document.getElementById('fname');
const email = document.getElementById('email');
const passw = document.getElementById('passw');
const rpassw = document.getElementById('rpassw');
const age = document.getElementById('age');
const phnum = document.getElementById('phnum');
const adrss = document.getElementById('adrss');
const city = document.getElementById('city');
const postalCode = document.getElementById('postalcode');
const dni = document.getElementById('dni');
const susbutton = document.getElementById('sus-button')

// -- name input -- 
fname.onkeydown = function() {keyDown()};
fname.onblur = function() {validNameInput(fname.value)};
fname.onfocus = function() {hideHiddenClass(0)};

function validNameInput(input){
    if(input.length < 6 || (!input.includes(' '))){
        removeHiddenClass(0);
        return false;
    }
    return true;
}
// -- email input --
email.onblur = function() {validateEmail(email.value)};
email.onfocus = function() {hideHiddenClass(1)};



function validateEmail(emailInput){
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailInput.match(mailformat)) {
        removeHiddenClass(1);
        return false;
    }
    return true;
}
// -- password input -- 
passw.onblur = function() {validatePassword(passw.value)};
passw.onfocus = function() {hideHiddenClass(2)};

var passFormat = /[a-z]+[0-9]/;

function validatePassword(passwInput) {
    if(!passwInput.match(passFormat) || passwInput.length < 8){
        removeHiddenClass(2);
        return false;
    } 
    return true;
}
// -- repeat password input --
rpassw.onblur = function() {validateRPassword(rpassw.value)};
rpassw.onfocus = function() {hideHiddenClass(3)};

function validateRPassword(rpasswInput) {
    if(rpasswInput !== passw.value){
        removeHiddenClass(3);
        return false;
    }
    return true;
}
// -- age --
age.onblur = function() {validateAge(age.value)};
age.onfocus = function() {hideHiddenClass(4)};

function validateAge(ageInput) {
    if (ageInput < 18 ) {
        removeHiddenClass(4);
        return false;
    }
    return true; 
}
// -- phone --
phnum.onblur = function() {validatePhnum(phnum.value)};
phnum.onfocus = function() {hideHiddenClass(5)};

function validatePhnum(phnumInput) {
    if(isNaN(phnumInput)){
         removeHiddenClass(5);
         return false;
    } else if (!phnumInput.match(/[0-9]/)){
        removeHiddenClass(5);
        return false
    } else if (phnumInput < 7){
        removeHiddenClass(5);
        return false
    }
    return true;
}
// -- address --
adrss.onblur = function() {validateAdrss(adrss.value)};
adrss.onfocus = function() {hideHiddenClass(6)};

function validateAdrss(adrssInput) {
    if(adrssInput < 5 ){
        removeHiddenClass(6);
        return false;
    } else if (!adrssInput.match(/([a-z]?[0-9])?[' ']?([a-z]?[0-9])/)){
        removeHiddenClass(6);
        return false;
    }  
    return true;  
}
// -- city --
city.onblur = function() {validateCity(city.value)};
city.onfocus = function() {hideHiddenClass(7)};

function validateCity(cityInput) {
    if(cityInput.length < 3 || !cityInput.match(/[a0-z9]/)){
        removeHiddenClass(7);
        return false;
    }
    return true;
}
// -- postal code --
postalCode.onblur = function() {validatePostalCode(postalCode.value)};
postalCode.onfocus = function() {hideHiddenClass(8)};

function validatePostalCode(postalCodeInput) {
    if(postalCodeInput.length < 3){
        removeHiddenClass(8);
        return false;
    }
    return true;
}
// -- dni --
dni.onblur = function() {validateDni(dni.value)};
dni.onfocus = function() {hideHiddenClass(9)};

function validateDni(dniInput) {
    if(dniInput.length < 7 || dniInput.length > 8){
        removeHiddenClass(9);
        return false;
    }
    return true;
}


//****************FUNCTIONS */
function removeHiddenClass(index) {
    errorsElement[index].style.display = 'unset';  
 }
function hideHiddenClass(index) {
     errorsElement[index].style.display = 'none'
 }
// -- button --
 susbutton.onclick = function() {buttonAlert()};

function buttonAlert() {
    var msg = '';
    if (validNameInput(fname.value)){
        msg = msg + 'Full name: ' + fname.value;
    } else {
        msg = msg + 'Full name: ' + 'incorrect';
    }
    if (validateEmail(email.value)){
        msg = msg + 'Email: ' + email.value;
    } else {
        msg = msg + 'Email: ' + 'incorrect';
    }
    if (validatePassword(passw.value)){
        msg = msg + 'Password: ' + passw.value;
    } else {
        msg = msg + 'Password: ' + 'incorrect';
    }
    if (validateRPassword(rpassw.value)){
        msg = msg + 'Repeat password: ' + rpassw.value;
    } else {
        msg = msg + 'Repeat password: ' + 'incorrect';
    }
    if (validateAge(age.value)){
        msg = msg + 'Age: ' + age.value;
    } else {
        msg = msg + 'Age: ' + 'incorrect';
    }
    if (validatePhnum(phnum.value)){
        msg = msg + 'Phone number: ' + phnum.value;
    } else {
        msg = msg + 'Phone number: ' + 'incorrect';
    }
    if (validateAdrss(adrss.value)){
        msg = msg + 'Address: ' + adrss.value;
    } else {
        msg = msg + 'Address: ' + 'incorrect';
    }
    if (validateCity(city.value)){
        msg = msg + 'City: ' + city.value;
    } else {
        msg = msg + 'City: ' + 'incorrect';
    }
    if (validatePostalCode(postalCode.value)){
        msg = msg + 'Postal Code: ' + postalCode.value;
    } else {
        msg = msg + 'Postal Code: ' + 'incorrect';
    }
    if (validateDni(dni.value)){
        msg = msg + 'DNI: ' + dni.value;
    } else {
        msg = msg + 'DNI: ' + 'incorrect';
    }
    alert(msg);
}

// -- title --
// const chTitle = document.getElementsByClassName('chTitle');
// function keyDown() {
    
// }