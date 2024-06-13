//get the form
const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault(); // no refresh

  //get the values from the form
  const fullname = form.fullname.value;
  const email = form.email.value;
  const password = form.password.value;
  const gender = form.gender.value;
  const birthday = form.date.value;
  const newsletter = form.newsletter.checked;

//get the error messages
const fullnameErr = document.getElementById("fullnameErr");
const emailErr = document.getElementById("emailErr");
const passErr = document.getElementById("passErr");
const genderErr = document.getElementById("genderErr");
const birthdayErr = document.getElementById("birthdayErr");


//reset the error messages
fullnameErr.innerHTML = "";
emailErr.innerHTML = "";
passErr.innerHTML = "";
genderErr.innerHTML = "";
birthdayErr.innerHTML = "";


//post the data to the server
  try {
    const res = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        password,
        gender,
        birthday,
        newsletter,
     
      }),
    });
const data = await res.json();
console.log(data);
if(data.errors){
  
  fullnameErr.innerHTML = data.errors.fullname;
  emailErr.innerHTML = data.errors.email;
  passErr.innerHTML = data.errors.password;
  genderErr.innerHTML = data.errors.gender;
  birthdayErr.innerHTML = data.errors.birthday;
}
else if(data.user){
  
//redirect to the home page
window.location.assign("/");
}

  } catch (err) {
    console.log(err);
    alert("Something went wrong , please try again");
  }
});
