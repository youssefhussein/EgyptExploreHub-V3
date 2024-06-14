const form = document.querySelector('form');
form.addEventListener( 'submit', async (e)=> {
  e.preventDefault(); // no refresh

  //get the values from the form
  
  const email = form.email.value;
  const password = form.password.value;
 
//get the error messages

const passErr = document.getElementById("passErr");


//reset the error messages

passErr.innerHTML = "";


//post the data to the server
  try {
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        
        email,
        password,
       
     
      }),
    });
const data = await res.json();

if(data.errorsLogin){

 
  passErr.innerHTML = data.errorsLogin.errors.password || data.errorsLogin.errors.email;
  
}
 if(data.user){
 
 
  location.assign("/");

}

  } catch (err) {
    console.log(err);
    alert("Something went wrong , please try again");
  }

})