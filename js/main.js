// index.html JS_code 

let myFLabel = document.querySelector('#fLabel');
let myFInput = document.querySelector('#fInput');
let myLLabel = document.querySelector('#lLabel');
let myLInput = document.querySelector('#lInput');
let myELabel = document.querySelector('#eLabel');
let myEInput = document.querySelector('#eInput');
let myPhLabel = document.querySelector('#phLabel');
let myPhInput = document.querySelector('#phInput');
let myPaLabel = document.querySelector('#paLabel');
let myPaInput = document.querySelector('#paInput');
let myCpaLabel = document.querySelector('#cPaLabel');
let myCpaInput = document.querySelector('#cPaInput');
let myGLabel = document.querySelector('#gLabel');
let myGInput1 = document.querySelector('#gInput1');
let myGInput2 = document.querySelector('#gInput2');
let myBLabel = document.querySelector('#bLabel');
let myBInput = document.querySelector('#bInput');
let valid = true ;
let emailCheek = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/ ;
let phoneCheek = /^\+(?:[0-9] ?){6,14}[0-9]$/ ;

// console.log(myCpaInput);

function validation() {
  
  if (myFInput.value == '' || 
      !isNaN(myFInput.value) || 
      myFInput.value.length < 4 || 
      myFInput.value.indexOf(' ') != -1
      ) {
    validInput(myFLabel , 'Invalid UserName')
    return ( valid = false)

  } else if (myLInput.value == '' ||
             !isNaN(myLInput.value) ||
             myLInput.value.length < 4 ||
             myLInput.value.indexOf(' ') != -1 
  ) {
    resetLabel() 
    validInput(myLLabel , 'Invalid UserName')
    return ( valid = false)

  } else  if (!emailCheek.test(myEInput.value) &
              !phoneCheek.test(myEInput.value)
  ) {
    resetLabel() 
    validInput(myELabel , 'Invalid Email or Phone')
    return ( valid = false)

  } else if (!phoneCheek.test(myPhInput.value)) {
    resetLabel() 
    validInput(myPhLabel , 'Invalid Phone Number')
    return ( valid = false)

  } else if (myPaInput.value == '' ||
             myPaInput.value.length < 8
  ) {
    resetLabel() 
    validInput(myPaLabel , 'Invalid Password  ')
    return ( valid = false)

  } else if (myPaInput.value !== myCpaInput.value) {
    resetLabel() 
    validInput(myCpaLabel , 'Invalid Confirm Password  ')
    return ( valid = false)

  } else if (!myGInput1.checked & !myGInput2.checked) {
    resetLabel() 
    validInput(myGLabel , 'Invalid Gender')
    return ( valid = false)

  } else if (myBInput.value == "") {
    resetLabel() 
    validInput(myBLabel , 'Invalid Birthdate')
    return ( valid = false)

  } else {
    resetLabel()
    return ( valid = true)
  }
}

function validInput(LabelName , text) {
  LabelName.innerHTML = text
  LabelName.style.color = 'red'
}

function resetLabel() {
  myFLabel.innerHTML = 'First Name :'
  myFLabel.style.color = 'blue'
  myLLabel.innerHTML = 'Last Name :'
  myLLabel.style.color = 'blue'
  myELabel.innerHTML = 'Email OR Phone :'
  myELabel.style.color = 'blue'
  myPhLabel.innerHTML = 'Phone Number :'
  myPhLabel.style.color = 'blue'
  myPaLabel.innerHTML = 'Password :'
  myPaLabel.style.color = 'blue'
  myCpaLabel.innerHTML = 'Confirm Password :'
  myCpaLabel.style.color = 'blue'
  myGLabel.innerHTML = 'Gender :'
  myGLabel.style.color = 'blue'
  myBLabel.innerHTML = 'Birthdate :'
  myBLabel.style.color = 'blue'
}

// about.html js_code 

let myIemail = document.querySelector('#aEmail');
let mySemail = document.querySelector('#sEmail');
let myIpass = document.querySelector('#aPass');
let mySpass = document.querySelector('#spass');
let myShowP = document.querySelector('#showP')
console.log(myIpass);

function aValidation() {
  
  if (!emailCheek.test(myIemail.value) &
      !phoneCheek.test(myIemail.value)  
  ) {
    validInput2(mySemail , 'please enter valid email address')
    return ( valid = false)

  } else if (myIpass.value === ''  || 
             myIpass.value.length < 8 
  ) {
    resetSpan()
    validInput2(mySpass , 'please enter valid Phone Number')
    return ( valid = false)

  } else {
    resetSpan()
    return ( valid = true)
  }

}

       
function validInput2(nLabel , text) {
    nLabel.innerHTML = text ;
    nLabel.style.color = 'red';
}

function resetSpan() {
    mySemail.innerHTML = '';
    mySpass.innerHTML = '';
}


myShowP.addEventListener('click', ()=>{
  if (myShowP.innerHTML == 'Show Password') {
    myShowP.innerHTML = 'Hide Password'
    myIpass.type = 'text'

  } else {
    myShowP.innerHTML = 'Show Password'
    myIpass.type = 'password'

  }
})


