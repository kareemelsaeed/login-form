// index.html js_code 
 function validation() {
  let myFirstLabel , myFirstInput , myLastLabel , myLastInput , myEmailLabel , myEmailInput ,
       myPhoneLabel , myPhoneInput , mypasswordLabel , mypasswordInput , myConfPasswordLabel ,
       myConfPasswordInput , myBirthdateLabel, myBirthdateInput, myGenderLabel , myGenderInput1 ,
       myGenderInput2, phoneCheek , emailCheek , valid;
  valid = true ;
  myFirstLabel = document.querySelector('#fnameLabel')
  myFirstInput = document.querySelector('#fNameInput')
  myLastLabel = document.querySelector('#lnameLabel')
  myLastInput = document.querySelector('#lNameInput')
  emailCheek = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/ ;
  myEmailLabel = document.querySelector('#emailLabel')
  myEmailInput = document.querySelector('#emailInput')
  phoneCheek = /^\+(?:[0-9] ?){6,14}[0-9]$/ ;
  myPhoneLabel = document.querySelector('#phoneLabel')
  myPhoneInput = document.querySelector('#phoneInput')
  mypasswordLabel = document.querySelector('#passLabel')
  mypasswordInput = document.querySelector('#passInput')
  myConfPasswordLabel = document.querySelector('#confPassLabel')
  myConfPasswordInput = document.querySelector('#confPassInput')
  myBirthdateLabel = document.querySelector('#birthLabel')
  myBirthdateInput = document.querySelector('#birthInput')
  myGenderLabel = document.querySelector('#genderLabel')
  myGenderInput1 = document.querySelector('#genderInput1')
  myGenderInput2 = document.querySelector('#genderInput2')
  // console.log(myGenderInput2);

  if (
    myFirstInput.value === "" || 
    !isNaN(myFirstInput.value) || 
    myFirstInput.value.indexOf(" ") != -1
    ) {
    myFirstLabel.innerHTML = "invalid username"
    myFirstLabel.style.color = 'red'
    return ( valid = false ) ;
  } else if (
    myLastInput.value === "" || 
    !isNaN(myLastInput.value) || 
    myLastInput.value.indexOf(" ") != -1
    ) {
    myFirstLabel.innerHTML = "First Name :"
    myFirstLabel.style.color = 'blue'
    myLastLabel.innerHTML = "invalid lastname"
    myLastLabel.style.color = 'red'
    return ( valid = false ) ;
  } else if (!emailCheek.test(myEmailInput.value)) {
    myLastLabel.innerHTML = "Last Name :"
    myLastLabel.style.color = 'blue'
    myEmailLabel.innerHTML = "invalid Email"
    myEmailLabel.style.color = 'red'
    return ( valid = false ) ;
  } else if (!phoneCheek.test(myPhoneInput.value)) {
    myEmailLabel.innerHTML = "Email :"
    myEmailLabel.style.color = 'blue'
    myPhoneLabel.innerHTML = "invalid Phone Number"
    myPhoneLabel.style.color = 'red'
    return ( valid = false ) ;
  } else if (mypasswordInput.value === '' || mypasswordInput.value.length < 8) {
    myPhoneLabel.innerHTML = "Phone Number :"
    myPhoneLabel.style.color = 'blue'
    mypasswordLabel.innerHTML = "invalid Password"
    mypasswordLabel.style.color = 'red'
    return ( valid = false ) ;
  } else if (myConfPasswordInput.value !== mypasswordInput.value) {
    mypasswordLabel.innerHTML = "Password :"
    mypasswordLabel.style.color = 'blue'
    myConfPasswordLabel.innerHTML = "invalid Confirm Password"
    myConfPasswordLabel.style.color = 'red'
    return ( valid = false ) ;
  } else if (!myGenderInput1.checked & !myGenderInput2.checked) {
    myConfPasswordLabel.innerHTML = "Confirm Password :"
    myConfPasswordLabel.style.color = 'blue'
    myGenderLabel.innerHTML = "invalid Gender"
    myGenderLabel.style.color = 'red'
    return ( valid = false ) ;
  } else if (myBirthdateInput.value === "") {
    myGenderLabel.innerHTML = "Gender :"
    myGenderLabel.style.color = 'blue'
    myBirthdateLabel.innerHTML = "invalid Birthdate"
    myBirthdateLabel.style.color = 'red'
    return ( valid = false ) ;
  }
   else {
    myBirthdateLabel.innerHTML = "Birthdate :"
    myBirthdateLabel.style.color = 'blue'
    return ( valid = true ) ;
  }
}

// main.html js_code 

function aboutValidation() {
  let aboutEmail , aboutPassword , valid , emailCheek , myspanEmail , myspanPass;

  aboutEmail = document.querySelector('#aboutEmail');
  emailCheek = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/ ;
  myspanEmail = document.querySelector('#spanemail')
  aboutPassword = document.querySelector('#aboutPass');
  myspanPass = document.querySelector('#spanpass');
  valid = true ;
  // console.log(aboutPassword);

  if (!emailCheek.test(aboutEmail.value)) {
    myspanEmail.innerHTML = 'please enter valid email address'
    myspanEmail.style.color = 'red'
    return ( valid = false);
  } else if (aboutPassword.value === '' || aboutPassword.value.length < 8) {
    myspanEmail.innerHTML = ''
    myspanPass.innerHTML = 'please enter valid password'
    myspanPass.style.color = 'red'
    return ( valid = false);
  } else {
    myspanPass.innerHTML = ''
    return ( valid = true );
  }
} 

// showpass js_code
let myShowPass , aboutPassword;

myShowPass = document.querySelector('#showPass')
aboutPassword = document.querySelector('#aboutPass');

myShowPass.addEventListener('click' , ()=>{
  if (myShowPass.innerHTML == 'Show Password') {
    myShowPass.innerHTML = 'Hide Password'
    aboutPassword.type = 'text'
  } else {
    myShowPass.innerHTML = 'Show Password'
    aboutPassword.type = 'password'
  }
})

