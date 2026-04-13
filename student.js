const studentregisterform = document.getElementById('studentregisterform');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const city = document.getElementById('city');
const year = document.getElementById('year');
const pincode = document.getElementById('pincode');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

// const terms = document.getElementById('termsCheck');


// add event
studentregisterform.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
})


const sendData = (fnameVal) => {
    swal("Welcome! " + fnameVal, "Registration Successful", "success").then(() => {
        studentregisterform.submit();
    });
}

// for final data validation
const successMsg = (fnameVal) => {
    const validatedElements = [fname, lname, email, phone, city, year, pincode, password, cpassword];

    let allValid = true;

    for (let i = 0; i < validatedElements.length; i++) {
        if (validatedElements[i].parentElement.className !== "form-controls success") {
            allValid = false;
            break;
        }
    }

    if (allValid) {
        sendData(fnameVal);
    }
}


// detail email validation
const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf("@");
    if (atSymbol < 1) return false;

    var dot = emailVal.lastIndexOf('.');
    if (dot <= atSymbol + 2) return false;
    if (dot === emailVal.length - 1) return false;
    return true;
}


// define the validate function

const validate = () => {
    const fnameVal = fname.value.trim();
    const lnameVal = lname.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const cityVal = city.value.trim();
    const yearVal = year.value.trim();
    const pincodeVal = pincode.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();



    // validate first name
    if (fnameVal === "") {
        setErrorMsg(fname, 'first name cannot be blank');
    }
    else if (fnameVal.length < 3) {
        setErrorMsg(fname, 'first name min 3 character');
    }
    else {
        setSuccessMsg(fname);
    }

    // validate last name
    if (lnameVal === "") {
        setErrorMsg(lname, 'last name cannot be blank');
    }
    else if (lnameVal.length < 3) {
        setErrorMsg(lname, 'last name min 3 character');
    }
    else {
        setSuccessMsg(lname);
    }

    // validate city 
    if (cityVal === "") {
        setErrorMsg(city, 'city cannot be blank');
    }
    else if (cityVal.length < 3) {
        setErrorMsg(city, 'city name min 3 character');
    }
    else {
        setSuccessMsg(city);
    }

    // validate email
    if (emailVal === "") {
        setErrorMsg(email, 'email cannot be blank');
    }
    else if (!isEmail(emailVal)) {
        setErrorMsg(email, 'Not a valid Email');
    }
    else {
        setSuccessMsg(email);
    }

    // validate phone
    if (phoneVal === "") {
        setErrorMsg(phone, 'phone no. cannot be blank');
    }
    else if (phoneVal.length != 10) {
        setErrorMsg(phone, 'Not a valid phone no.');
    }
    else {
        setSuccessMsg(phone);
    }


    // validate pincode
    if (pincodeVal === "") {
        setErrorMsg(pincode, 'pincode cannot be blank');
    }
    else if (pincodeVal.length != 6) {
        setErrorMsg(pincode, 'pincode must be 6 digits');
    }
    else {
        setSuccessMsg(pincode);
    }


    // validate year
    if (yearVal === "") {
        setErrorMsg(year, 'year cannot be blank');
    }
    else if (!/^\d{4}$/.test(yearVal)) {
        setErrorMsg(year, 'year must be 4 digits');
    }
    else {
        setSuccessMsg(year);
    }


    // validate password
    const pwd = passwordVal;
    const cp = /[A-Z]/.test(pwd);
    const lw = /[a-z]/.test(pwd);
    const dg = /\d/.test(pwd);

    if (pwd === "") {
        setErrorMsg(password, 'Password cannot be blank');
    }
    else if (pwd.length < 8) {
        setErrorMsg(password, 'Password must be at least 8 characters');
    }
    else if (cp && lw && dg) {
        setSuccessMsg(password);
    }
    else {
        setErrorMsg(password, 'Must include uppercase, lowercase, and number');
    }


    // validate cpassword

    if (cpasswordVal == "") {
        setErrorMsg(cpassword, 'Cpassword cannot be blank');
    }
    else if (cpasswordVal !== passwordVal) {
        setErrorMsg(cpassword, 'passwords are not matching');
    }
    else {
        setSuccessMsg(cpassword);
    }


    // for term and condition
    // if (terms == "") {
    //     alert("Please accept Terms & Conditions");
    //     setErrorMsg("Check this box");
    //     return;
    // }

    // console.log("Terms: " , terms.value);


    successMsg(fnameVal);
}


function setErrorMsg(input, errormsgs) {
    const formControls = input.parentElement;
    const small = formControls.querySelector('small');

    formControls.className = "form-controls error";

    small.innerText = errormsgs;
}

function setSuccessMsg(input) {
    const formControls = input.parentElement;

    formControls.className = "form-controls success";

}