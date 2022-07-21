//this function is used for insert the values into table
var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];
var list6 = [];
var list7 = [];
var list8 = [];
var list9 = [];
var list10 = [];

var n = 1;
var x = 0;

function AddRow() {
  var AddRown = document.getElementById("show");
  var NewRow = AddRown.insertRow(n);

  list1[x] = document.getElementById("fname").value;
  list2[x] = document.getElementById("lname").value;
  list3[x] = document.getElementById("email").value;
  list4[x] = document.getElementById("dob").value;
  list5[x] = document.getElementById("mobile").value;
  list6[x] = document.getElementById("company").value;
  list7[x] = document.getElementById("exp").value;
  list8[x] = document.getElementById("gender").value;
  list9[x] = document.getElementById("passport").value;

  var cel1 = NewRow.insertCell(0);
  var cel2 = NewRow.insertCell(1);
  var cel3 = NewRow.insertCell(2);
  var cel4 = NewRow.insertCell(3);
  var cel5 = NewRow.insertCell(4);
  var cel6 = NewRow.insertCell(5);
  var cel7 = NewRow.insertCell(6);
  var cel8 = NewRow.insertCell(7);
  var cel9 = NewRow.insertCell(8);

  cel1.innerHTML = list1[x];
  cel2.innerHTML = list2[x];
  cel3.innerHTML = list3[x];
  cel4.innerHTML = list4[x];
  cel5.innerHTML = list5[x];
  cel6.innerHTML = list6[x];
  cel7.innerHTML = list7[x];
  cel8.innerHTML = list8[x];
  cel9.innerHTML = list9[x];

  n++;
  x++;
}
//-------------------------------------validation part starts----------------------------------------
// Defining a function to display error message
function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form
function validateForm(e) {
  e.preventDefault();
  // Retrieving the values of form elements
  var fname = document.contactForm.fname.value;
  var lname = document.contactForm.lname.value;
  var email = document.contactForm.email.value;
  var dob = document.contactForm.dob.value;
  var mobile = document.contactForm.mobile.value;
  var cname = document.contactForm.cname.value;
  var exp = document.contactForm.exp.value;
  var gender = document.contactForm.gender.value;
  var passport = document.contactForm.passport.value;
  // var place = document.contactForm.place.value;
  // var profile = document.contactForm.profile.value;

  // var hobbies = [];
  // var checkboxes = document.getElementsByName("hobbies[]");
  // for (var i = 0; i < checkboxes.length; i++) {
  //   if (checkboxes[i].checked) {
  //     // Populate hobbies array with selected values
  //     hobbies.push(checkboxes[i].value);
  //   }
  // }

  // Defining error variables with a default value
  var fnameErr =
    (lnameErr =
    emailErr =
    dobErr =
    mobileErr =
    genderErr =
    passportErr =
    companyErr =
    expErr =
      true);

  // Validate name
  if (fname == "") {
    printError("fnameErr", "Please enter your Firstname");
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(fname) === false) {
      printError("fnameErr", "Please enter a valid Firstname");
    } else {
      printError("fnameErr", "");
      fnameErr = false;
    }
  }

  if (lname == "") {
    printError("lnameErr", "Please enter your Lastname");
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(lname) === false) {
      printError("lnameErr", "Please enter a valid Lastname");
    } else {
      printError("lnameErr", "");
      lnameErr = false;
    }
  }

  // Validate email address
  if (email == "") {
    printError("emailErr", "Please enter your email address");
  } else {
    // Regular expression for basic email validation
    var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email) === false) {
      printError("emailErr", "Please enter a valid email address");
    } else {
      printError("emailErr", "");
      emailErr = false;
    }
  }
  if (dob == "") {
    printError("dobErr", "Please select your DOB");
  } else {
    printError("dobErr", "");
    dobErr = false;
  }

  // Validate mobile number
  if (mobile == "") {
    printError("mobileErr", "Please enter your mobile number");
  } else {
    var regex = /^[1-9]\d{9}$/;
    if (regex.test(mobile) === false) {
      printError("mobileErr", "Please enter a valid 10 digit mobile number");
    } else {
      printError("mobileErr", "");
      mobileErr = false;
    }
  }

  // Validate gender
  if (gender == "Select") {
    printError("genderErr", "Please select your Gender");
  } else {
    printError("genderErr", "");
    genderErr = false;
  }

  // Validate passport
  if (passport == "") {
    printError("passportErr", "Please select you Have Passport or Not");
  } else {
    printError("passportErr", "");
    passportErr = false;
  }
  if (cname == "") {
    printError("companyErr", "Please select your CompanyName");
  } else {
    printError("companyErr", "");
    companyErr = false;
  }
  if (exp == "") {
    printError("expErr", "Please select your Experience in years");
  } else {
    printError("expErr", "");
    expErr = false;
  }
  // Prevent the form from being submitted if there are any errors
  // if (
  //   (fnameErr ||
  //     emailErr ||
  //     dobErr ||
  //     mobileErr ||
  //     genderErr ||
  //     passportErr ||
  //     companyErr ||
  //     expErr) == true
  // ) {
  //   return false;
  // } else {
  //   // Creating a string from input data for preview
  //   var dataPreview =
  //     "You've entered the following details: \n" +
  //     "First Name: " +
  //     fname +
  //     "\n" +
  //     "Last Name: " +
  //     lname +
  //     "\n" +
  //     "Email Address: " +
  //     email +
  //     "\n" +
  //     "Date Of Birth: " +
  //     dob +
  //     "\n" +
  //     "Mobile Number: " +
  //     mobile +
  //     "\n" +
  //     "Gender: " +
  //     gender +
  //     "\n" +
  //     "Passport: " +
  //     passport +
  //     "\n" +
  //     "Company Name: " +
  //     cname +
  //     "\n" +
  //     "Experience In Years: " +
  //     exp +
  //     "\n";
  //   // Display input data in a dialog box before submitting the form
  //   alert(dataPreview);
  // }
}
//tender