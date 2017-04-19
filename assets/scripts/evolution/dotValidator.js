/*dotValidator
Written by: Nathan J Plummer
Contributions by: Melissa Miller*/

/*jslint plusplus: true*/
var i; //used in loop

/*****Define dot colors******/
//no input
var dotNoInput = "#EDBE69";
var dotInvalid = "#F2617A";
var dotValid = "#31E96B";

/*****START INTERNAL VALIDATION LIBRARY*****/
//backend libraries used for validation

var validator = {};

//EMAIL
validator.isEmail = (function (input) {
    //Test for valid Email address
    return /\w+([\.-]?\w+)+@[a-z0-9][a-z0-9-]+[a-z0-9]*?(\.[a-z0-9]{2,})+/gi.test(input);
});

//Phone Numbers
validator.isPhoneNumber = (function (input) {
    //remove hyphens
    input = input.split("-");
    input = input.join("");

    //Remove USA Country Code
    if (input.substring(0, 1) === "1") {
        input = input.substring(1);
    }

    //Check input is 10 digits and a number.  Report Errors if need be.
    try {
        if (input.length !== 10) {
            throw "Not a valid USA Phone Number with 10 digits";
        } else if (isNaN(input) === true) {
            throw "Not a number";
        }
    } catch (err) {
        console.log("ERROR: " + err);
        return false;
    }
    return true;
});

//check if input is a valid date
validator.isDate = (function (input) {
    //convert input to string
    input = input.toString();

    var isItDate = new Date(input);
    console.log(isItDate);

    try {
        if (Number.isNaN(isItDate.getTime()) === true) {
            throw input + " is not a valid date";
        }
    } catch (err) {
        console.log("ERROR: " + err);
        return false;
    }

    return true;
});

//removes symbols from a string.  Used in the Password validator and alphanumeric validator
validator.withoutSymbols = (function (input) {
    return input.replace(/[^a-z0-9]/gi, "");
});

//check for strong password
validator.password = (function (input) {
    //convert input to string
    input = input.toString();

    //check for minimum length of 12 characters
    if (input.length < 12) {
        return false;
    }

    //check for at least one symbol
    if (input === validator.withoutSymbols(input)) {
        return false;
    }

    return true;
});

//test inout is alphanumeric, used in username validator
validator.isAlphanumeric = (function (input) {
    //checks if input is alphanumeric only
    return /^[a-z0-9]+$/gi.test(input);
});

//checks username is valid
validator.username = (function (input) {
  return input.length >= 5 && validator.isAlphanumeric(input);
});

//validate zipcode
validator.zipcode = (function (input) {

    //check input length is not six
    //fixes edge case of five digits plus hyphen
    //with no additional digits
    if (input.length === 6) {
        return false;
    }

    //convert to string
    input = input.toString();

    //remove hyphen if present
    input = input.replace("-", "");

    //check length is 5 or 9 digits
    if ((input.length !== 5) && (input.length !== 9)) {
        return false;
    }

    //check string is only digits
    if (Number.isNaN(input) === true) {
        return false;
    }

    return true;

});

/*****END INTERNAL VALIDATION LIBRARAY*****/

/*****validateMe sub functions- validation procedure via content type*****/

var inputCode = {};

//Email
inputCode.email = (function (targ) {
    if (targ.value === "") {
        targ.nextElementSibling.style.backgroundColor = dotNoInput;
    } else if (validator.isEmail(targ.value)) {
        targ.nextElementSibling.style.backgroundColor = dotValid;
    } else {
        targ.nextElementSibling.style.backgroundColor = dotInvalid;
    }
});

//search
inputCode.search = (function (targ) {
    if (targ.value === "") {
        targ.nextElementSibling.style.backgroundColor = dotNoInput;
    } else if (targ.value.length > 2) {
        targ.nextElementSibling.style.backgroundColor = dotValid;
    } else {
        targ.nextElementSibling.style.backgroundColor = dotInvalid;
    }
});

//telephone number
inputCode.tel = (function (targ) {
    if (targ.value === "") {
        targ.nextElementSibling.style.backgroundColor = dotNoInput;
    } else if (validator.isPhoneNumber(targ.value)) {
        targ.nextElementSibling.style.backgroundColor = dotValid;
    } else {
        targ.nextElementSibling.style.backgroundColor = dotInvalid;
    }
});

//check input in number input is actually a number
inputCode.number = (function (targ) {
    if (targ.value === "") {
        targ.nextElementSibling.style.backgroundColor = dotNoInput;
    } else if (!Number.isNaN(targ.value)) {
        targ.nextElementSibling.style.backgroundColor = dotValid;
    } else {
        targ.nextElementSibling.style.backgroundColor = dotInvalid;
    }
});

//NOTE: Once date is validated value is sent to the Age Box
//The Age Box is then validated
inputCode.date = (function (targ) {

    //calculate age based on DOB and then send results to the age box
    function sendAge(DOB) {
        var today = new Date();
        var birthDate = new Date(DOB);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        var ageDisplay = document.getElementById("evo-c-dotValidator-age-id");
        console.log(age);
        ageDisplay.innerHTML = age;
        if (age < 18) {
            ageDisplay.nextElementSibling.style.backgroundColor = dotInvalid;
        } else {
            ageDisplay.nextElementSibling.style.backgroundColor = dotValid;
        }
        ageDisplay.classList.remove("evo-c-dotValidator-age-inactive");
    }
    //check if DOB if a valid date
    if (targ.value === "") {
        targ.nextElementSibling.style.backgroundColor = dotInvalid;
    } else if (validator.isDate(targ.value)) {
        targ.nextElementSibling.style.backgroundColor = dotValid;
        sendAge(targ.value);
    } else {
        targ.nextElementSibling.style.backgroundColor = dotInvalid;
    }
});

inputCode.password = (function (targ) {
    if (targ.value === "") {
        targ.nextElementSibling.style.backgroundColor = dotNoInput;
    } else if (validator.password(targ.value)) {
        targ.nextElementSibling.style.backgroundColor = dotValid;
    } else {
        targ.nextElementSibling.style.backgroundColor = dotInvalid;
    }
});

inputCode.username = (function (targ) {
    if (targ.value === "") {
        targ.nextElementSibling.style.backgroundColor = dotNoInput;
    } else if (validator.username(targ.value)) {
        targ.nextElementSibling.style.backgroundColor = dotValid;
    } else {
        targ.nextElementSibling.style.backgroundColor = dotInvalid;
    }
});

inputCode.zipcode = (function (targ) {
    if (targ.value === "") {
        targ.nextElementSibling.style.backgroundColor = dotNoInput;
    } else if (validator.zipcode(targ.value)) {
        targ.nextElementSibling.style.backgroundColor = dotValid;
    } else {
        targ.nextElementSibling.style.backgroundColor = dotInvalid;
    }
});

//select all inputs with dotValidator enabled
var validotMe = document.querySelectorAll("[data-dotValidator='true']");
//provides check validotMe is present.  If not, skip script.
var len = validotMe && validotMe.length || false;


//based on input type load appropriate function
function validateMe(targ) {
    if (targ.type === "search") {
        inputCode.search(targ);
    } else if (targ.type === "email") {
        inputCode.email(targ);
    } else if (targ.type === "tel") {
        inputCode.tel(targ);
    } else if (targ.type === "number") {
        inputCode.number(targ);
    } else if (targ.type === "date") {
        inputCode.date(targ);
    } else if (targ.type === "password") {
        inputCode.password(targ);
    } else if ((targ.type === "text") && (targ.previousElementSibling.innerHTML === "Username")) {
        inputCode.username(targ);
    } else if ((targ.type === "text") && (targ.previousElementSibling.innerHTML === "Zipcode")) {
        inputCode.zipcode(targ);
    }

}


//for loop will add event listener to inputs
//will automatically detect the appropriate event listener
//len checks that validotMe is present
//if not skip rest of script
if (len) {
    for (i = 0; i < validotMe.length; i++) {
        if (validotMe[i].type === "date") {
            validotMe[i].addEventListener("blur", function (event) {
                validateMe(this);
            });
        } else {
            validotMe[i].addEventListener("input", function (event) {
                validateMe(this);
            });
        }
    }
}
