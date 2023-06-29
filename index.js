function displayInputs() {
  var firstName = document.getElementById("firstName").value;
  var email = document.getElementById("email").value;
  var website = document.getElementById("website").value;
  var imageLink = document.getElementById("imageLink").value;
  var gender = document.querySelector('input[name="gender"]:checked');
  var genderValue = gender ? gender.getAttribute("value") : '';

  var skills = document.querySelectorAll('input[name="skill"]:checked');
  var selectedSkills = "";
  for (var i = 0; i < skills.length; i++) {
    selectedSkills += skills[i].value + ", ";
  }
  selectedSkills = selectedSkills.slice(0, -2); 
  var displayDiv = document.querySelector(".display");

  var newDiv = document.createElement("div");
  newDiv.className = "enrolledClass";
  newDiv.innerHTML = `
    <img src="${imageLink}">
    <p>Name: ${firstName}</p>
    <p>Email: ${email}</p>
    Website link: <a href="${website}">${website}</a>
    
    <p>Gender: ${genderValue}</p>
    <p>Skills: ${selectedSkills}</p>
  `;

  displayDiv.appendChild(newDiv);
}

function clr() {
  var displayDiv = document.querySelector(".display");
  displayDiv.innerHTML = "";
}

var enrollBtn = document.getElementById("enroll");
enrollBtn.addEventListener("click", displayInputs);
