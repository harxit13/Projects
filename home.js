document.addEventListener('DOMContentLoaded', function() {
  // Mock data for featured alumni
  const featuredAlumni = [
    {
      id: '101',
      name: 'Dr. Sarah Johnson',
      graduationYear: 2005,
      department: 'Computer Science',
      currentPosition: 'CTO at TechCorp',
      achievements: 'Led development of breakthrough AI system, 3x patent holder',
      profileImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
    },
    {
      id: '102',
      name: 'Michael Chen',
      graduationYear: 2010,
      department: 'Business Administration',
      currentPosition: 'Founder & CEO of GreenStart',
      achievements: 'Forbes 30 Under 30, raised $50M in venture capital',
      profileImage: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'
    },
    {
      id: '103',
      name: 'Priya Patel',
      graduationYear: 2008,
      department: 'Electrical Engineering',
      currentPosition: 'Lead Engineer at SpaceX',
      achievements: 'NASA Innovation Award, Lead engineer on Mars rover project',
      profileImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
    }
  ];

  // Mock data for upcoming events
  const upcomingEvents = [
    {
      id: '201',
      title: 'Annual Alumni Gala',
      date: '2025-06-15',
      time: '18:00',
      location: 'Grand Hotel Ballroom',
      description: 'Join us for an evening of celebration and networking with fellow alumni.',
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
    }
  ];

  // Render featured alumni
  const featuredAlumniContainer = document.getElementById('featured-alumni');
  if (featuredAlumniContainer) {
    featuredAlumniContainer.innerHTML = featuredAlumni.map(alumni => `
      <div class="alumni-card" data-aos="fade-up">
        <div class="alumni-card-header">
          <img src="${alumni.profileImage}" alt="${alumni.name}">
          <div class="alumni-card-overlay"></div>
        </div>
        <div class="alumni-card-info">
          <div class="alumni-card-body">
            <h3>${alumni.name}</h3>
            <p class="alumni-meta">Class of ${alumni.graduationYear} • ${alumni.department}</p>
            <div class="alumni-position">
              <i class="fa-solid fa-briefcase"></i>
              <span>${alumni.currentPosition}</span>
            </div>
            <p>${alumni.achievements}</p>
          </div>
          <div class="alumni-card-footer">
            <a href="profile.html?id=${alumni.id}" class="btn btn-secondary">View Profile</a>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Render upcoming events
  const upcomingEventsContainer = document.getElementById('upcoming-events');
  if (upcomingEventsContainer) {
    upcomingEventsContainer.innerHTML = upcomingEvents.map(event => `
      <div class="event-card" data-aos="fade-up">
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
});