document.addEventListener('DOMContentLoaded', function() {
  // Mock data for events
  const eventsData = [
    {
      id: '201',
      title: 'Annual Alumni Gala',
      date: '2025-06-15',
      time: '18:00',
      location: 'Grand Hotel Ballroom',
      description: 'Join us for an elegant evening celebrating alumni achievements. The event will feature keynote speakers, awards ceremony, dinner, and networking opportunities.',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
      category: 'networking'
    },
    {
      id: '202',
      title: 'Tech Industry Panel',
      date: '2025-07-10',
      time: '14:00',
      location: 'Virtual Event',
      description: 'Hear from our successful alumni in the tech industry about current trends and career opportunities.',
      image: 'https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg',
      category: 'webinar'
    },
    {
      id: '203',
      title: 'Class of 2015 Reunion',
      date: '2025-08-22',
      time: '16:00',
      location: 'University Campus',
      description: 'Celebrate 10 years since graduation with your fellow classmates. Activities include campus tours, dinner, and an evening social event.',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg',
      category: 'reunion'
    },
    {
      id: '204',
      title: 'Career Development Workshop',
      date: '2025-09-05',
      time: '10:00',
      location: 'Business School Auditorium',
      description: 'A hands-on workshop focused on resume building, interview skills, and personal branding. Led by career professionals and successful alumni.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      category: 'workshop'
    },
    {
      id: '205',
      title: 'AI in Healthcare Webinar',
      date: '2025-09-18',
      time: '15:00',
      location: 'Virtual Event',
      description: 'Learn about the latest applications of artificial intelligence in healthcare from industry experts and researchers.',
      image: 'https://images.pexels.com/photos/4031409/pexels-photo-4031409.jpeg',
      category: 'webinar'
    },
    {
      id: '206',
      title: 'Networking Mixer',
      date: '2025-10-12',
      time: '19:00',
      location: 'Skyline Lounge',
      description: 'Connect with fellow alumni from various industries in a casual setting. Great opportunity to expand your professional network.',
      image: 'https://images.pexels.com/photos/4349926/pexels-photo-4349926.jpeg',
      category: 'networking'
    }
  ];

  // Mock data for past events
  const pastEventsData = [
    {
      id: '301',
      title: 'Alumni Weekend 2024',
      date: '2024-10-05',
      location: 'University Campus',
      image: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg',
      attendees: 320
    },
    {
      id: '302',
      title: 'Spring Career Fair',
      date: '2024-03-15',
      location: 'Student Center',
      image: 'https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg',
      attendees: 450
    },
    {
      id: '303',
      title: 'Class of 2014 Reunion',
      date: '2024-06-22',
      location: 'Grand Hotel',
      image: 'https://images.pexels.com/photos/5325096/pexels-photo-5325096.jpeg',
      attendees: 175
    },
    {
      id: '304',
      title: 'Business Leadership Summit',
      date: '2024-05-10',
      location: 'Business School',
      image: 'https://images.pexels.com/photos/5325105/pexels-photo-5325105.jpeg',
      attendees: 280
    }
  ];

  let filteredEvents = [...eventsData];
  const eventsContainer = document.getElementById('events-container');
  const noEvents = document.getElementById('no-events');
  const filterTabs = document.querySelectorAll('.filter-tab');
  const eventsSearchInput = document.getElementById('events-search-input');
  const resetEventsFilter = document.getElementById('reset-events-filter');
  const pastEventsSlider = document.getElementById('past-events-slider');
  const sliderPrev = document.querySelector('.slider-prev');
  const sliderNext = document.querySelector('.slider-next');

  // Event registration form
  const eventRegistrationForm = document.getElementById('event-registration-form');
  if (eventRegistrationForm) {
    eventRegistrationForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Registration submitted successfully! You will receive a confirmation email shortly.');
      const modal = this.closest('.modal');
      if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  }

  // Render events
  function renderEvents() {
    if (!eventsContainer) return;

    if (filteredEvents.length === 0) {
      eventsContainer.innerHTML = '';
      if (noEvents) noEvents.classList.remove('hidden');
      return;
    }

    if (noEvents) noEvents.classList.add('hidden');

    eventsContainer.innerHTML = filteredEvents.map(event => `
      <div class="event-card">
        <div class="event-card-image">
          <img src="${event.image}" alt="${event.title}">
          <div class="event-date">
            <span class="date-day">${new Date(event.date).getDate()}</span>
            <span class="date-month">${new Date(event.date).toLocaleString('default', { month: 'short' }).toUpperCase()}</span>
          </div>
        </div>
        <div class="event-card-content">
          <span class="event-category ${event.category}">${event.category.charAt(0).toUpperCase() + event.category.slice(1)}</span>
          <h3>${event.title}</h3>
          <div class="event-card-details">
            <div class="event-detail">
              <i class="fa-solid fa-calendar"></i>
              <span>${formatDate(event.date)}</span>
            </div>
            <div class="event-detail">
              <i class="fa-solid fa-clock"></i>
              <span>${event.time}</span>
            </div>
            <div class="event-detail">
              <i class="fa-solid fa-location-dot"></i>
              <span>${event.location}</span>
            </div>
          </div>
          <p>${truncateText(event.description, 100)}</p>
          <div class="event-card-footer">
            <a href="event-details.html?id=${event.id}">Details</a>
            <a href="#register-modal" class="btn btn-primary btn-sm">Register</a>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Render past events slider
  function renderPastEvents() {
    if (!pastEventsSlider) return;

    pastEventsSlider.innerHTML = pastEventsData.map(event => `
      <div class="slider-item">
        <div class="past-event-card">
          <div class="past-event-image">
            <img src="${event.image}" alt="${event.title}">
          </div>
          <div class="past-event-content">
            <h3>${event.title}</h3>
            <p>A successful event that brought together alumni from across the country for networking and celebration.</p>
            <div class="past-event-meta">
              <span>${formatDate(event.date)}</span>
              <span>${event.attendees} Attendees</span>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Filter events based on search and category
  function filterEvents() {
    const searchTerm = eventsSearchInput ? eventsSearchInput.value.toLowerCase() : '';
    const activeFilter = document.querySelector('.filter-tab.active');
    const categoryFilter = activeFilter ? activeFilter.getAttribute('data-filter') : 'all';

    filteredEvents = eventsData.filter(event => {
      // Search term filter
      const matchesSearch = searchTerm === '' || 
        event.title.toLowerCase().includes(searchTerm) || 
        event.description.toLowerCase().includes(searchTerm) ||
        event.location.toLowerCase().includes(searchTerm);
      
      // Category filter
      const matchesCategory = categoryFilter === 'all' || event.category === categoryFilter;
      
      return matchesSearch && matchesCategory;
    });

    renderEvents();
  }

  // Initialize event listeners
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      filterTabs.forEach(t => t.classList.remove('active'));
      // Add active class to clicked tab
      tab.classList.add('active');
      // Filter events
      filterEvents();
    });
  });

  if (eventsSearchInput) {
    eventsSearchInput.addEventListener('input', debounce(filterEvents, 300));
  }

  if (resetEventsFilter) {
    resetEventsFilter.addEventListener('click', () => {
      // Reset active filter
      filterTabs.forEach(t => {
        if (t.getAttribute('data-filter') === 'all') {
          t.classList.add('active');
        } else {
          t.classList.remove('active');
        }
      });
      
      // Reset search
      if (eventsSearchInput) eventsSearchInput.value = '';
      
      // Refilter events
      filterEvents();
    });
  }

  // Slider controls
  if (sliderPrev && sliderNext && pastEventsSlider) {
    sliderPrev.addEventListener('click', () => {
      pastEventsSlider.scrollBy({ left: -300, behavior: 'smooth' });
    });

    sliderNext.addEventListener('click', () => {
      pastEventsSlider.scrollBy({ left: 300, behavior: 'smooth' });
    });
  }

  // Initial render
  renderEvents();
  renderPastEvents();
});