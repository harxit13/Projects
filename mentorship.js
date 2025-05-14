document.addEventListener('DOMContentLoaded', function() {
  // Tab functionality
  const tabs = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab-content');
  
  function showTab(tabId) {
    // Hide all tab contents
    tabContents.forEach(content => {
      content.classList.add('hidden');
    });
    
    // Remove active class from all tabs
    tabs.forEach(tab => {
      tab.classList.remove('active');
    });
    
    // Show selected tab content
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
      selectedTab.classList.remove('hidden');
    }
    
    // Add active class to selected tab
    const activeTab = document.querySelector(`[data-tab="${tabId.replace('-content', '')}"]`);
    if (activeTab) {
      activeTab.classList.add('active');
    }
  }
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabId = tab.getAttribute('data-tab') + '-content';
      showTab(tabId);
    });
  });
  
  // CTA button event listeners
  const becomeMentorBtn = document.getElementById('become-mentor-btn');
  const findMentorBtn = document.getElementById('find-mentor-btn');
  
  if (becomeMentorBtn) {
    becomeMentorBtn.addEventListener('click', () => {
      showTab('become-mentor-content');
    });
  }
  
  if (findMentorBtn) {
    findMentorBtn.addEventListener('click', () => {
      showTab('find-mentor-content');
    });
  }
  
  // Mentor registration form
  const mentorRegistrationForm = document.getElementById('mentor-registration-form');
  if (mentorRegistrationForm) {
    mentorRegistrationForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Validate form
      const expertiseCheckboxes = document.querySelectorAll('input[name="expertise"]:checked');
      if (expertiseCheckboxes.length === 0) {
        alert('Please select at least one area of expertise.');
        return;
      }
      
      // Show success message
      alert('Congratulations! You are now registered as a mentor. Students will be able to find and connect with you through the platform.');
      
      // Redirect to mentor dashboard would go here in a real implementation
      showTab('overview-content');
    });
  }
  
  // Mock data for mentors
  const mentorsData = [
    {
      id: '401',
      name: 'Dr. Sarah Johnson',
      graduationYear: 2005,
      department: 'Computer Science',
      position: 'CTO at TechCorp',
      expertise: ['technical-skills', 'career-guidance', 'research'],
      bio: 'With 15+ years in the tech industry, I've led teams at major tech companies and startups. I'm passionate about helping students navigate career paths in tech, especially in AI and machine learning.',
      availability: '5 hours/month',
      profileImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
    },
    {
      id: '402',
      name: 'Michael Chen',
      graduationYear: 2010,
      department: 'Business Administration',
      position: 'Founder & CEO of GreenStart',
      expertise: ['entrepreneurship', 'career-guidance'],
      bio: 'As a founder who has successfully raised multiple rounds of funding, I enjoy mentoring aspiring entrepreneurs. I can help with business plans, pitching to investors, and startup strategy.',
      availability: '3 hours/month',
      profileImage: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'
    },
    {
      id: '403',
      name: 'Priya Patel',
      graduationYear: 2008,
      department: 'Electrical Engineering',
      position: 'Lead Engineer at SpaceX',
      expertise: ['technical-skills', 'research', 'internships'],
      bio: 'I've worked on cutting-edge aerospace projects and can provide guidance on engineering careers, research opportunities, and securing competitive internships in the industry.',
      availability: '4 hours/month',
      profileImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
    },
    {
      id: '404',
      name: 'James Wilson',
      graduationYear: 2015,
      department: 'Marketing',
      position: 'Marketing Director at Consumer Brands',
      expertise: ['career-guidance', 'internships'],
      bio: 'I specialize in digital marketing and brand strategy. I can help students understand various marketing career paths and prepare for interviews in the field.',
      availability: '6 hours/month',
      profileImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
    },
    {
      id: '405',
      name: 'Elena Rodriguez',
      graduationYear: 2012,
      department: 'Biomedical Engineering',
      position: 'Research Scientist at Pharma Inc.',
      expertise: ['research', 'graduate-school', 'technical-skills'],
      bio: 'With a PhD in Biomedical Engineering, I can guide students interested in graduate studies and research careers in the medical and pharmaceutical industries.',
      availability: '3 hours/month',
      profileImage: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
    },
    {
      id: '406',
      name: 'David Kim',
      graduationYear: 2007,
      department: 'Finance',
      position: 'Investment Banker at Global Finance',
      expertise: ['career-guidance', 'internships'],
      bio: 'I've worked in investment banking for over a decade and can provide insights into finance careers, from preparation for interviews to long-term career planning.',
      availability: '2 hours/month',
      profileImage: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg'
    }
  ];
  
  let filteredMentors = [...mentorsData];
  const mentorsContainer = document.getElementById('mentors-container');
  const noMentors = document.getElementById('no-mentors');
  const mentorSearchInput = document.getElementById('mentor-search-input');
  const resetMentorFiltersBtn = document.getElementById('reset-mentor-filters');
  
  // Filter dropdown functionality
  const filterDropdown = document.querySelector('.filter-dropdown');
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');
  
  if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener('click', () => {
      dropdownMenu.classList.toggle('active');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!filterDropdown.contains(e.target)) {
        dropdownMenu.classList.remove('active');
      }
    });
  }
  
  // Render mentors
  function renderMentors() {
    if (!mentorsContainer) return;
    
    if (filteredMentors.length === 0) {
      mentorsContainer.innerHTML = '';
      if (noMentors) noMentors.classList.remove('hidden');
      return;
    }
    
    if (noMentors) noMentors.classList.add('hidden');
    
    mentorsContainer.innerHTML = filteredMentors.map(mentor => `
      <div class="mentor-card">
        <div class="mentor-header">
          <div class="mentor-avatar">
            <img src="${mentor.profileImage}" alt="${mentor.name}">
          </div>
          <div class="mentor-header-text">
            <h3>${mentor.name}</h3>
            <p>${mentor.position}</p>
          </div>
        </div>
        <div class="mentor-body">
          <div class="mentor-expertise">
            ${mentor.expertise.map(area => {
              const areaName = area.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
              return `<span class="expertise-tag">${areaName}</span>`;
            }).join('')}
          </div>
          <p class="mentor-bio">${mentor.bio}</p>
        </div>
        <div class="mentor-footer">
          <div class="mentor-availability">
            <i class="fa-solid fa-clock"></i>
            <span>Available ${mentor.availability}</span>
          </div>
          <a href="#" class="btn btn-primary btn-sm">Request Mentorship</a>
        </div>
      </div>
    `).join('');
  }
  
  // Filter mentors based on search and expertise
  function filterMentors() {
    const searchTerm = mentorSearchInput ? mentorSearchInput.value.toLowerCase() : '';
    const expertiseFilters = document.querySelectorAll('.dropdown-menu input[name="filter"]:checked:not([value="all"])');
    
    // Get selected expertise areas
    const selectedExpertise = Array.from(expertiseFilters).map(input => input.value);
    
    // Check if "All Areas" is selected
    const allAreasSelected = document.querySelector('.dropdown-menu input[value="all"]').checked;
    
    filteredMentors = mentorsData.filter(mentor => {
      // Search term filter
      const matchesSearch = searchTerm === '' || 
        mentor.name.toLowerCase().includes(searchTerm) || 
        mentor.position.toLowerCase().includes(searchTerm) ||
        mentor.department.toLowerCase().includes(searchTerm) ||
        mentor.bio.toLowerCase().includes(searchTerm);
      
      // Expertise filter
      const matchesExpertise = allAreasSelected || 
        selectedExpertise.length === 0 || 
        mentor.expertise.some(area => selectedExpertise.includes(area));
      
      return matchesSearch && matchesExpertise;
    });
    
    renderMentors();
  }
  
  // Initialize event listeners for mentor search
  if (mentorSearchInput) {
    mentorSearchInput.addEventListener('input', debounce(filterMentors, 300));
  }
  
  // Expertise filter checkboxes
  const expertiseCheckboxes = document.querySelectorAll('.dropdown-menu input[name="filter"]');
  expertiseCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      // If "All Areas" is checked, uncheck other options
      if (checkbox.value === 'all' && checkbox.checked) {
        expertiseCheckboxes.forEach(cb => {
          if (cb.value !== 'all') {
            cb.checked = false;
          }
        });
      } 
      // If any other option is checked, uncheck "All Areas"
      else if (checkbox.value !== 'all' && checkbox.checked) {
        const allAreasCheckbox = document.querySelector('.dropdown-menu input[value="all"]');
        if (allAreasCheckbox) {
          allAreasCheckbox.checked = false;
        }
      }
      
      filterMentors();
    });
  });
  
  if (resetMentorFiltersBtn) {
    resetMentorFiltersBtn.addEventListener('click', () => {
      // Reset search
      if (mentorSearchInput) mentorSearchInput.value = '';
      
      // Reset checkboxes
      expertiseCheckboxes.forEach(cb => {
        cb.checked = cb.value === 'all';
      });
      
      // Refilter mentors
      filterMentors();
    });
  }
  
  // Initial render
  renderMentors();
});