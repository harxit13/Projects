// Global JavaScript functions used across the site

document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  const currentYearElements = document.querySelectorAll('#current-year');
  const currentYear = new Date().getFullYear();
  currentYearElements.forEach(element => {
    element.textContent = currentYear;
  });

  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (mobileMenuToggle && mobileMenuClose && mobileMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenu.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    mobileMenuClose.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  // Dynamic header (transparent to solid on scroll)
  const dynamicHeader = document.getElementById('dynamic-header');
  if (dynamicHeader) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        dynamicHeader.classList.add('scrolled');
      } else {
        dynamicHeader.classList.remove('scrolled');
      }
    });
    
    // Initial check (in case page is loaded scrolled down)
    if (window.scrollY > 50) {
      dynamicHeader.classList.add('scrolled');
    }
  }

  // Modal functionality
  const modalCloseButtons = document.querySelectorAll('.modal-close');
  modalCloseButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const modal = button.closest('.modal');
      if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  });

  // Close modal when clicking outside
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  });

  // Password toggle visibility
  const passwordToggles = document.querySelectorAll('.password-toggle');
  passwordToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const passwordInput = toggle.previousElementSibling;
      const icon = toggle.querySelector('i');
      
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.replace('fa-eye', 'fa-eye-slash');
      } else {
        passwordInput.type = 'password';
        icon.classList.replace('fa-eye-slash', 'fa-eye');
      }
    });
  });
});

// Utility Functions

/**
 * Format a date string to a more readable format
 * @param {string} dateString - Date string in ISO format
 * @returns {string} Formatted date string
 */
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

/**
 * Truncate text to a specified length and add ellipsis
 * @param {string} text - The text to truncate
 * @param {number} length - Maximum length before truncation
 * @returns {string} Truncated text
 */
function truncateText(text, length = 100) {
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
}

/**
 * Debounce function to limit how often a function can be called
 * @param {Function} func - Function to debounce
 * @param {number} wait - Time to wait in milliseconds
 * @returns {Function} Debounced function
 */
function debounce(func, wait = 300) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

/**
 * Add animation on scroll for elements with data-aos attribute
 * Simple implementation that can be expanded or replaced with a library
 */
function initAOS() {
  const elements = document.querySelectorAll('[data-aos]');
  
  function checkVisibility() {
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight * 0.85) {
        const delay = element.getAttribute('data-aos-delay') || 0;
        setTimeout(() => {
          element.classList.add('aos-animate');
        }, delay);
      }
    });
  }
  
  // Add a basic animation class
  elements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  });
  
  window.addEventListener('scroll', debounce(checkVisibility, 100));
  
  // Initial check
  checkVisibility();
}

// Initialize AOS if elements exist
if (document.querySelector('[data-aos]')) {
  initAOS();
}