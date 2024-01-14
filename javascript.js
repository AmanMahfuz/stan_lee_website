
    function validated() {
      var emailInput = document.getElementById('emailInput');
      var emailError = document.getElementById('emailError');
      var passwordInput = document.getElementById('passwordInput');
      var passwordError = document.getElementById('passwordError');
      var confirmPasswordInput = document.getElementById('confirmPasswordInput');
      var confirmPasswordError = document.getElementById('confirmPasswordError');
      
      // Validate email
      if (!emailInput.checkValidity()) {
        emailError.style.display = 'block';
        return false;
      } else {
        emailError.style.display = 'none';
      }
      
      // Validate password
      if (passwordInput.value.length < 8) {
        passwordError.style.display = 'block';
        return false;
      } else {
        passwordError.style.display = 'none';
      }
      
      // Validate confirm password
      if (confirmPasswordInput.value != passwordInput.value) {
        confirmPasswordError.style.display = 'block';
        return false;
      } else {
        confirmPasswordError.style.display = 'none';
      }
      
      return true;
    }

