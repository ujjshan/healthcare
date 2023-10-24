// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
  apiKey: "AIzaSyAJkdpIn7K1AcreNh5eZtEfF5WTpjGFz-k",
  authDomain: "database-cfc4c.firebaseapp.com",
  databaseURL: "https://database-cfc4c-default-rtdb.firebaseio.com",
  projectId: "database-cfc4c",
  storageBucket: "database-cfc4c.appspot.com",
  messagingSenderId: "968973542458",
  appId: "1:968973542458:web:66b60c3ee22e1d1a1b4103",
  measurementId: "G-KHH206PB6F",
};

firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref("Computer comp");

// Listen for form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = getInputVal("name");
  var company = getInputVal("company");
  var email = getInputVal("email");
  var phone = getInputVal("phone");
  var weight = getInputVal("weight");
  var bloodpressure = getInputVal("bloodpressure");
  var alergies = getInputVal("alergies");
  var sex = getInputVal("sex");
  var dob = getInputVal("dob");
  var parentname = getInputVal("parentname");
  var parentcontact = getInputVal("parentcontact");

  // Save message
  saveMessage(
    name,
    company,
    email,
    phone,
    message,
    weight,
    bloodpressure,
    alergies,
    sex,
    dob,
    parentname,
    parentcontact
  );

  // Show alert
  document.querySelector(".alert").style.display = "block";

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // Clear form
  document.getElementById("contactForm").reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(
  name,
  company,
  email,
  phone,
  message,
  weight,
  bloodpressure,
  alergies,
  sex,
  dob,
  parentname,
  parentcontact
) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message,
    weight: weight,
    bloodpressure: bloodpressure,
    alergies: alergies,
    sex: sex,
    dob: dob,
    parentname: parentname,
    parentcontact,
  });
}
