document.addEventListener('DOMContentLoaded', function() {
  // Mock data for alumni
  const alumniData = [
    {
      id: '101',
      name: 'Dr. Sarah Johnson',
      graduationYear: 2005,
      department: 'Computer Science',
      location: 'San Francisco, CA',
      currentPosition: 'CTO at TechCorp',
      profileImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
    },
    {
      id: '102',
      name: 'Michael Chen',
      graduationYear: 2010,
      department: 'Business Administration',
      location: 'New York, NY',
      currentPosition: 'Founder & CEO of GreenStart',
      profileImage: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'
    },
    {
      id: '103',
      name: 'Priya Patel',
      graduationYear: 2008,
      department: 'Electrical Engineering',
      location: 'Austin, TX',
      currentPosition: 'Lead Engineer at SpaceX',
      profileImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
    },
    {
      id: '104',
      name: 'James Wilson',
      graduationYear: 2015,
      department: 'Marketing',
      location: 'Chicago, IL',
      currentPosition: 'Marketing Director at Consumer Brands',
      profileImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
    },
    {
      id: '105',
      name: 'Elena Rodriguez',
      graduationYear: 2012,
      department: 'Biomedical Engineering',
      location: 'Boston, MA',
      currentPosition: 'Research Scientist at Pharma Inc.',
      profileImage: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
    },
    {
      id: '106',
      name: 'David Kim',
      graduationYear: 2007,
      department: 'Finance',
      location: 'Seattle, WA',
      currentPosition: 'Investment Banker at Global Finance',
      profileImage: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg'
    }
  ];

  let filteredAlumni = [...alumniData];
  let currentView = 'grid'; // Default view

  const alumniContainer = document.getElementById('alumni-container');
  const alumniCount = document.getElementById('alumni-count');
  const noResults = document.getElementById('no-results');
  const searchInput = document.getElementById('alumni-search-input');
  const filterToggle = document.getElementById('filter-toggle');
  const filterPanel = document.getElementById('filter-panel');
  const departmentFilter = document.getElementById('department-filter');
  const yearFilter = document.getElementById('year-filter');
  const locationFilter = document.getElementById('location-filter');
  const resetFiltersButtons = document.querySelectorAll('#reset-filters, #reset-filters-bottom');
  const gridViewButton = document.getElementById('grid-view');
  const listViewButton = document.getElementById('list-view');

  // Initialize the alumni count
  if (alumniCount) {
    alumniCount.textContent = alumniData.length;
  }

  // Render alumni cards
  function renderAlumni() {
    if (!alumniContainer) return;

    if (filteredAlumni.length === 0) {
      alumniContainer.innerHTML = '';
      noResults.classList.remove('hidden');
      if (alumniCount) alumniCount.textContent = 0;
      return;
    }

    noResults.classList.add('hidden');
    if (alumniCount) alumniCount.textContent = filteredAlumni.length;

    if (currentView === 'grid') {
      alumniContainer.className = 'alumni-grid';
      alumniContainer.innerHTML = filteredAlumni.map(alumni => `
        <div class="alumni-card">
          <div class="alumni-card-header">
            <img src="${alumni.profileImage}" alt="${alumni.name}">
          </div>
          <div class="alumni-card-info">
            <img src="${alumni.profileImage}" alt="${alumni.name}" class="alumni-profile-pic">
            <div class="alumni-card-body">
              <h3>${alumni.name}</h3>
              <p class="alumni-meta">Class of ${alumni.graduationYear} • ${alumni.department}</p>
              <div class="alumni-details">
                <div class="alumni-detail">
                  <i class="fa-solid fa-briefcase"></i>
                  <span>${alumni.currentPosition}</span>
                </div>
                <div class="alumni-detail">
                  <i class="fa-solid fa-location-dot"></i>
                  <span>${alumni.location}</span>
                </div>
              </div>
            </div>
            <div class="alumni-card-footer">
              <a href="profile.html?id=${alumni.id}" class="btn btn-secondary">View Profile</a>
            </div>
          </div>
        </div>
      `).join('');
    } else {
      alumniContainer.className = 'alumni-list';
      alumniContainer.innerHTML = filteredAlumni.map(alumni => `
        <div class="alumni-list-item">
          <div class="alumni-list-image">
            <img src="${alumni.profileImage}" alt="${alumni.name}">
          </div>
          <div class="alumni-list-content">
            <h3>${alumni.name}</h3>
            <p class="alumni-meta">Class of ${alumni.graduationYear} • ${alumni.department}</p>
            <div class="alumni-details">
              <div class="alumni-detail">
                <i class="fa-solid fa-briefcase"></i>
                <span>${alumni.currentPosition}</span>
              </div>
              <div class="alumni-detail">
                <i class="fa-solid fa-location-dot"></i>
                <span>${alumni.location}</span>
              </div>
            </div>
          </div>
          <a href="profile.html?id=${alumni.id}" class="btn btn-secondary">View Profile</a>
        </div>
      `).join('');
    }
  }

  // Filter alumni based on search and filter criteria
  function filterAlumni() {
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const selectedDepartment = departmentFilter ? departmentFilter.value : 'all';
    const selectedYear = yearFilter ? yearFilter.value : 'all';
    const selectedLocation = locationFilter ? locationFilter.value : 'all';

    // Show/hide reset filters button
    if (selectedDepartment !== 'all' || selectedYear !== 'all' || selectedLocation !== 'all' || searchTerm !== '') {
      resetFiltersButtons.forEach(btn => btn.classList.remove('hidden'));
    } else {
      resetFiltersButtons.forEach(btn => btn.classList.add('hidden'));
    }

    filteredAlumni = alumniData.filter(alumni => {
      // Search term filter
      const matchesSearch = searchTerm === '' || 
        alumni.name.toLowerCase().includes(searchTerm) || 
        alumni.currentPosition.toLowerCase().includes(searchTerm) ||
        alumni.department.toLowerCase().includes(searchTerm);
      
      // Department filter
      const matchesDepartment = selectedDepartment === 'all' || alumni.department === selectedDepartment;
      
      // Year filter
      let matchesYear = true;
      if (selectedYear !== 'all') {
        const [start, end] = selectedYear.split('-').map(year => {
          if (year === 'Present') return new Date().getFullYear();
          return parseInt(year);
        });
        
        matchesYear = alumni.graduationYear >= start && alumni.graduationYear <= end;
      }
      
      // Location filter
      const matchesLocation = selectedLocation === 'all' || alumni.location === selectedLocation;
      
      return matchesSearch && matchesDepartment && matchesYear && matchesLocation;
    });

    renderAlumni();
  }

  // Initialize event listeners
  if (searchInput) {
    searchInput.addEventListener('input', debounce(filterAlumni, 300));
  }

  if (filterToggle && filterPanel) {
    filterToggle.addEventListener('click', () => {
      filterPanel.classList.toggle('hidden');
      filterToggle.classList.toggle('active');
    });
  }

  if (departmentFilter) {
    departmentFilter.addEventListener('change', filterAlumni);
  }

  if (yearFilter) {
    yearFilter.addEventListener('change', filterAlumni);
  }

  if (locationFilter) {
    locationFilter.addEventListener('change', filterAlumni);
  }

  resetFiltersButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      if (departmentFilter) departmentFilter.value = 'all';
      if (yearFilter) yearFilter.value = 'all';
      if (locationFilter) locationFilter.value = 'all';
      filterAlumni();
    });
  });

  if (gridViewButton && listViewButton) {
    gridViewButton.addEventListener('click', () => {
      currentView = 'grid';
      gridViewButton.classList.add('active');
      listViewButton.classList.remove('active');
      renderAlumni();
    });

    listViewButton.addEventListener('click', () => {
      currentView = 'list';
      listViewButton.classList.add('active');
      gridViewButton.classList.remove('active');
      renderAlumni();
    });
  }

  // Initial render
  renderAlumni();
});