function validateForm() {
    // Clear any previous error messages
    document.querySelectorAll('.error').forEach(error => error.innerHTML = '');
  
    // Get form values
    const fname = document.myform.fname.value.trim();
    const lname = document.myform.lname.value.trim();
    const email = document.myform.email.value.trim();
    const password = document.myform.password.value;
    const password2 = document.myform.password2.value;
    const num = document.myform.num.value.trim();
    const pinCode = document.myform.pcname.value.trim();
  
    // Validation flags
    let isValid = true;
  
    // Name validation
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(fname)) {
      document.getElementById('fnameError').innerHTML = 'First Name should contain only alphabets and spaces.';
      isValid = false;
    }
    if (!nameRegex.test(lname)) {
      document.getElementById('lnameError').innerHTML = 'Last Name should contain only alphabets and spaces.';
      isValid = false;
    }
  
    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      document.getElementById('emailError').innerHTML = 'Enter a valid email address (e.g., user@example.com).';
      isValid = false;
    }
  
    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,}$/;
    if (!passwordRegex.test(password)) {
      document.getElementById('passwordError').innerHTML =
        'Password must be at least 9 characters long, contain one uppercase letter, one lowercase letter, one digit, and one special symbol.';
      isValid = false;
    }
  
    // Password match validation
    if (password !== password2) {
      document.getElementById('password2Error').innerHTML = 'Passwords do not match.';
      isValid = false;
    }
  
    // Phone number validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(num)) {
      document.getElementById('phoneError').innerHTML = 'Phone number must be exactly 10 digits.';
      isValid = false;
    }
  
    // Gender validation
    const genderInputs = document.getElementsByName('gender');
    const isGenderSelected = Array.from(genderInputs).some(input => input.checked);
    if (!isGenderSelected) {
      document.getElementById('genderError').innerHTML =   'Please select your gender.';
      isValid = false;
    }
  
    // Pin Code Validation (5 or 6 digits)
    const pinCodeRegex = /^\d{5,6}$/;
    if (!pinCodeRegex.test(pinCode)) {
      document.getElementById('pinCodeError').innerHTML = 'Pin Code must be 5 or 6 digits.';
      isValid = false;
    }
  
    // If all validations pass
    if (!isValid) {
      return false;
    }
  
    alert('Form submitted successfully!');
    return true;
  }
  