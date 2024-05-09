document.getElementById('booking-form').addEventListener('submit', function(event) {
    // Prevent form submission
    event.preventDefault();

    // Retrieve form values
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var date = document.getElementById('date').value.trim();

    // Validate form fields
    if (name === '' || email === '' || date === '') {
      document.getElementById('error-message').innerText = 'Please fill out all fields.';
    } else {
      // Form submission logic (e.g., send data to server)
      alert('Booking confirmed!\nName: ' + name + '\nEmail: ' + email + '\nDate: ' + date);
      
      // Clear form fields
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('date').value = '';

      // Clear error message
      document.getElementById('error-message').innerText = '';
    }
  });