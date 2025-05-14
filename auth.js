document.addEventListener('DOMContentLoaded', function() {
  // Login form submission
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      
      // Simple validation
      if (!email || !password) {
        alert('Please fill in all fields');
        return;
      }
      
      // Mock login - in a real app, this would call an API
      console.log('Logging in with:', email);
      
      // Simulate loading
      const submitButton = this.querySelector('button[type="submit"]');
      submitButton.disabled = true;
      submitButton.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Logging in...';
      
      // Simulate API call
      setTimeout(() => {
        // Create a user object and store in localStorage
        const user = {
          id: '1',
          name: 'Jane Doe',
          email: email,
          graduationYear: 2018,
          department: 'Computer Science',
          profileImage: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg'
        };
        
        localStorage.setItem('alumniUser', JSON.stringify(user));
        
        // Redirect to home page
        window.location.href = 'index.html';
      }, 1500);
    });
  }
  
  // Registration form submission
  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    // Password strength meter
    const passwordInput = document.getElementById('password');
    const strengthBar = document.querySelector('.strength-bar');
    const strengthText = document.querySelector('.strength-text');
    const strengthContainer = document.querySelector('.password-strength');
    
    if (passwordInput && strengthBar && strengthText && strengthContainer) {
      passwordInput.addEventListener('input', function() {
        const password = this.value;
        
        if (password.length > 0) {
          strengthContainer.classList.remove('hidden');
          
          // Calculate password strength
          let strength = 0;
          
          // Length check
          if (password.length >= 8) strength += 1;
          if (password.length >= 12) strength += 1;
          
          // Character variety checks
          if (/[A-Z]/.test(password)) strength += 1;
          if (/[a-z]/.test(password)) strength += 1;
          if (/[0-9]/.test(password)) strength += 1;
          if (/[^A-Za-z0-9]/.test(password)) strength += 1;
          
          // Update UI based on strength
          strengthContainer.className = 'password-strength';
          
          if (strength <= 2) {
            strengthContainer.classList.add('weak');
            strengthText.textContent = 'Weak';
          } else if (strength <= 4) {
            strengthContainer.classList.add('medium');
            strengthText.textContent = 'Medium';
          } else if (strength <= 5) {
            strengthContainer.classList.add('good');
            strengthText.textContent = 'Good';
          } else {
            strengthContainer.classList.add('strong');
            strengthText.textContent = 'Strong';
          }
        } else {
          strengthContainer.classList.add('hidden');
        }
      });
    }
    
    registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const firstName = document.getElementById('first-name').value;
      const lastName = document.getElementById('last-name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const graduationYear = document.getElementById('graduation-year').value;
      const department = document.getElementById('department').value;
      
      // Simple validation
      if (!firstName || !lastName || !email || !password || !graduationYear || !department) {
        alert('Please fill in all required fields');
        return;
      }
      
      // Validate graduation year
      const currentYear = new Date().getFullYear();
      if (graduationYear < 1900 || graduationYear > currentYear) {
        alert('Please enter a valid graduation year');
        return;
      }
      
      // Check if terms are accepted
      const termsCheckbox = document.querySelector('input[name="terms"]');
      if (!termsCheckbox.checked) {
        alert('You must agree to the Terms of Service and Privacy Policy');
        return;
      }
      
      // Mock registration - in a real app, this would call an API
      console.log('Registering:', firstName, lastName, email);
      
      // Simulate loading
      const submitButton = this.querySelector('button[type="submit"]');
      submitButton.disabled = true;
      submitButton.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Creating account...';
      
      // Simulate API call
      setTimeout(() => {
        // Create a user object and store in localStorage
        const user = {
          id: Date.now().toString(),
          name: `${firstName} ${lastName}`,
          email: email,
          graduationYear: parseInt(graduationYear),
          department: department,
          profileImage: null // No profile image initially
        };
        
        localStorage.setItem('alumniUser', JSON.stringify(user));
        
        // Redirect to home page
        window.location.href = 'index.html';
      }, 1500);
    });
  }
  
  // Password reset form
  const resetPasswordForm = document.getElementById('reset-password-form');
  if (resetPasswordForm) {
    resetPasswordForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = document.getElementById('reset-email').value;
      
      if (!email) {
        alert('Please enter your email address');
        return;
      }
      
      // Simulate loading
      const submitButton = this.querySelector('button[type="submit"]');
      submitButton.disabled = true;
      submitButton.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
      
      // Simulate API call
      setTimeout(() => {
        alert(`Password reset instructions have been sent to ${email}. Please check your inbox.`);
        
        // Reset button and close modal
        submitButton.disabled = false;
        submitButton.innerHTML = 'Send Reset Link';
        
        const modal = this.closest('.modal');
        if (modal) {
          modal.style.display = 'none';
          document.body.style.overflow = '';
        }
      }, 1500);
    });
  }
});