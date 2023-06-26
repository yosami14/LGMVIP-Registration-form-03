
  function displayInputs() {
    var firstName = document.getElementById("firstName").value;
    var email = document.getElementById("email").value;
    var website = document.getElementById("website").value;
    var imageLink = document.getElementById("imageLink").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var genderValue = gender ? gender.value : '';

    var skills = document.querySelectorAll('input[name="skill"]:checked');
    var selectedSkills = "";
    for (var i = 0; i < skills.length; i++) {
      selectedSkills += skills[i].value + ", ";
    }
    selectedSkills = selectedSkills.slice(0, -2); // Remove trailing comma and space

    var displayDiv = document.querySelector(".display");
    // var newImg = document.createElement("img");
    // newImg.setAttribute('src',imageLink)
    // newImg.classList.add('myImg')
    var newDiv = document.createElement("div");
    newDiv.className = "enrolledClass";
    newDiv.innerHTML = `
    <img src=" ${imageLink}" >
      <p>Name: ${firstName}</p>
      <p>Email: ${email}</p>
      Website link: <a href="${website}">Website Link: ${website}</p>
      
      <p>Gender: ${genderValue}</p>
      <p>Skills: ${selectedSkills}</p>
    `;

    displayDiv.appendChild(newDiv);
    // newDiv.appendChild(newImg)
  }

  function clr() {
    var displayDiv = document.querySelector(".display");
    displayDiv.innerHTML = "";
  }

  var enrollBtn = document.getElementById("enroll");
  enrollBtn.addEventListener("click", displayInputs);

