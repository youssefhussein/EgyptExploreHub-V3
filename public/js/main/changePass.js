const form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
  e.preventDefault(); // prevent form from refreshing the page

  // Get the values from the form
  const currentPassword = form.querySelector('input[name="current-password"]').value;
  const newPassword = form.querySelector('input[name="new-password"]').value;
  const confirmPassword = form.querySelector('input[name="confirm-password"]').value;

  // Get the error messages elements
  const currentPassErr = document.getElementById("currentPassErr");
  const newPassErr = document.getElementById("newPassErr");
  const confirmPassErr = document.getElementById("confirmPassErr");

  // Reset the error messages
  currentPassErr.innerHTML = "";
  newPassErr.innerHTML = "";
  confirmPassErr.innerHTML = "";

  // Check that the new password and confirm password are equal
  if (newPassword !== confirmPassword) {
    confirmPassErr.innerHTML = "New password and confirm password do not match.";
    return;
  }

  // Post the data to the server
  try {
    const res = await fetch("/changePass", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        currentPassword,
        newPassword,
      }),
    });

    const data = await res.json();

    if (data.errors) {
        console.log("error505")
      // Display server-side validation errors
      if (data.errors.currentPassword) {
        currentPassErr.innerHTML = data.errors.currentPassword;
        console.log("error505")
      }
      if (data.errors.newPassword) {
        newPassErr.innerHTML = data.errors.newPassword;
        console.log("error505")
      }
      if (data.errors.confirmPassword) {
        confirmPassErr.innerHTML = data.errors.confirmPassword;
        console.log("error505")
      }
    } else if (data.success) {
      // Redirect to the home page on successful password change
      location.assign("/");
      console.log("error505")
    }
  } catch (err) {
    console.log(err);
    alert("Something went wrong, please try again.");
    console.log("error505")
  }
});
