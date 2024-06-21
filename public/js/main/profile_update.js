
const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault(); // no refresh

  //get the values from the form
  const fullname = form.fullname.value;
  const email = form.email.value;
  const password = form.password.value;
  

//get the error messages
const fullnameErr = document.getElementById("fullnameErr");
const emailErr = document.getElementById("emailErr");
const passErr = document.getElementById("passErr");



//reset the error messages
fullnameErr.innerHTML = ""; 
emailErr.innerHTML = "";
passErr.innerHTML = "";


//post the data to the server
  try {
    const res = await fetch("/profile-route", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        password,
       
     
      }),
    });
const data = await res.json();

if(data.errors){
  
  fullnameErr.innerHTML = data.errors.fullname;
  emailErr.innerHTML = data.errors.email;
  passErr.innerHTML = data.errors.password;
  
}

else{

    alert("Profile updated successfully");


}
  } catch (err) {
    console.log(err);
    alert("Something went wrong , please try again");
  }
});