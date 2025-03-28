const eventsData = [
  {
    id: 1,
    title: "Tech Conference",
    date: "2023-10-15",
    time: "10:00 AM - 4:00 PM",
    location: "Main Auditorium",
    description: "Join us for a day of technology, innovation and networking. This conference will feature talks from industry leaders and hands-on workshops.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "Technical Events",
    tags: ["tech", "cse", "workshop"],
    organizers: [
      { name: "CS Department", image: "https://randomuser.me/api/portraits/men/1.jpg" },
      { name: "Tech Club", image: "https://randomuser.me/api/portraits/women/1.jpg" }
    ]
  },
  {
    id: 2,
    title: "Cultural Night",
    date: "2023-10-20",
    time: "6:00 PM - 10:00 PM",
    location: "Open Air Theatre",
    description: "Experience a night filled with music, dance and art. Showcase your talent or enjoy performances by your peers in this cultural extravaganza.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "Cultural Events",
    tags: ["non-tech", "cultural", "performance"],
    organizers: [
      { name: "Cultural Committee", image: "https://randomuser.me/api/portraits/women/2.jpg" }
    ]
  },
  {
    id: 3,
    title: "Basketball Tournament",
    date: "2023-10-22",
    time: "9:00 AM - 5:00 PM",
    location: "College Gymnasium",
    description: "Witness the excitement of our inter-department basketball tournament. Cheer for your favorite teams and experience the thrill of competition.",
    image: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "Sports Events",
    tags: ["non-tech", "sports", "tournament"],
    organizers: [
      { name: "Sports Committee", image: "https://randomuser.me/api/portraits/men/3.jpg" }
    ]
  },
  {
    id: 4,
    title: "Hackathon 2023",
    date: "2023-10-25",
    time: "8:00 AM - 8:00 PM",
    location: "Computer Labs",
    description: "Challenge yourself in this 12-hour coding marathon. Solve real-world problems and stand a chance to win exciting prizes and internship opportunities.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "Technical Events",
    tags: ["tech", "cse", "competition"],
    organizers: [
      { name: "Developer Club", image: "https://randomuser.me/api/portraits/men/4.jpg" }
    ]
  },
  {
    id: 5,
    title: "Debate Competition",
    date: "2023-10-18",
    time: "2:00 PM - 5:00 PM",
    location: "Seminar Hall",
    description: "Showcase your oratory skills in this inter-college debate competition. Topics range from technology ethics to environmental conservation.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "Cultural Events",
    tags: ["non-tech", "debate", "competition"],
    organizers: [
      { name: "Literary Club", image: "https://randomuser.me/api/portraits/women/4.jpg" }
    ]
  },
  {
    id: 6,
    title: "Tech Workshop: Web Development",
    date: "2023-10-27",
    time: "10:00 AM - 1:00 PM",
    location: "Lab 101",
    description: "Learn the basics of modern web development in this hands-on workshop. Topics include HTML, CSS, JavaScript and responsive design.",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "Technical Events",
    tags: ["tech", "cse", "workshop"],
    organizers: [
      { name: "Web Development Club", image: "https://randomuser.me/api/portraits/men/5.jpg" }
    ]
  },
  {
    id: 7,
    title: "Cricket Match: CSE vs ECE",
    date: "2023-10-28",
    time: "3:00 PM - 6:00 PM",
    location: "College Ground",
    description: "Don't miss the epic cricket showdown between the Computer Science and Electronics departments in this friendly yet competitive match.",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "Sports Events",
    tags: ["non-tech", "sports", "cse", "ece"],
    organizers: [
      { name: "Sports Committee", image: "https://randomuser.me/api/portraits/men/6.jpg" }
    ]
  },
  {
    id: 8,
    title: "Photography Exhibition",
    date: "2023-10-30",
    time: "11:00 AM - 4:00 PM",
    location: "Art Gallery",
    description: "Experience the world through different lenses at our annual photography exhibition. Featuring work from students across all departments.",
    image: "https://images.unsplash.com/photo-1552168324-d612d77725e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "Cultural Events",
    tags: ["non-tech", "art", "exhibition"],
    organizers: [
      { name: "Photography Club", image: "https://randomuser.me/api/portraits/women/6.jpg" }
    ]
  },
  {
    id: 9,
    title: "Robotics Workshop",
    date: "2023-11-02",
    time: "10:00 AM - 2:00 PM",
    location: "Mech Lab",
    description: "Get hands-on experience with robotics in this interactive workshop. Learn about sensors, actuators, and programming fundamentals for robotics.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22731ce444?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "Technical Events",
    tags: ["tech", "mech", "workshop"],
    organizers: [
      { name: "Robotics Club", image: "https://randomuser.me/api/portraits/men/7.jpg" }
    ]
  },
  {
    id: 10,
    title: "Inter-College Football Tournament",
    date: "2023-11-05",
    time: "9:00 AM - 6:00 PM",
    location: "College Ground",
    description: "Cheer for your college team as they compete against other institutions in this exciting football tournament. May the best team win!",
    image: "https://images.unsplash.com/photo-1550881111-7cfde14b8073?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "Sports Events",
    tags: ["non-tech", "sports", "tournament"],
    organizers: [
      { name: "Sports Committee", image: "https://randomuser.me/api/portraits/men/8.jpg" }
    ]
  },
  {
    id: 11,
    title: "Civil Engineering Exhibition",
    date: "2023-11-08",
    time: "10:00 AM - 3:00 PM",
    location: "Civil Department",
    description: "Explore innovative civil engineering projects and models created by our students. Learn about sustainable construction and modern architectural concepts.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "Technical Events",
    tags: ["tech", "civil", "exhibition"],
    organizers: [
      { name: "Civil Engineering Department", image: "https://randomuser.me/api/portraits/men/9.jpg" }
    ]
  },
  {
    id: 12,
    title: "Movie Night",
    date: "2023-11-10",
    time: "7:00 PM - 10:00 PM",
    location: "Open Air Theatre",
    description: "Relax and enjoy a blockbuster movie under the stars with your friends. Snacks and beverages will be available.",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "Cultural Events",
    tags: ["non-tech", "entertainment"],
    organizers: [
      { name: "Student Council", image: "https://randomuser.me/api/portraits/women/9.jpg" }
    ]
  }
];

// Carousel Data
const carouselData = [
  {
    title: "Tech Conference 2023",
    description: "Join the biggest tech event of the year",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    link: "#tech-conference"
  },
  {
    title: "Cultural Festival",
    description: "Experience a night of music, dance and art",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    link: "#cultural-night"
  },
  {
    title: "Sports Tournament",
    description: "Cheer for your favorite teams",
    image: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    link: "#sports-tournament"
  }
];

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const indicators = document.querySelector('.carousel-indicators');
const modal = document.getElementById('event-modal');
const closeModal = document.querySelector('.close-modal');
const eventDetails = document.getElementById('event-details');
const selectedDateElement = document.getElementById('selected-date');
const eventsByDate = document.getElementById('events-by-date');
const categoryContainers = document.querySelectorAll('.category-container');
const branchFilter = document.getElementById('branch-filter');
const typeFilter = document.getElementById('type-filter');
const dateFilter = document.getElementById('date-filter');
const applyFiltersBtn = document.getElementById('apply-filters');
const resetFiltersBtn = document.getElementById('reset-filters');
const filteredResults = document.getElementById('filtered-results');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Mobile Menu
  initMobileMenu();
  
  // Initialize Carousel
  initCarousel();
  
  // Initialize Modal
  initModal();
  
  // Initialize Calendar
  initCalendar();
  
  // Load Events by Category
  loadEventsByCategory();
  
  // Initialize Filters
  initFilters();
});

// Mobile Menu Toggle
function initMobileMenu() {
  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
  
  // Close menu when clicking on a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
}

// Carousel Functionality
function initCarousel() {
  let currentSlide = 0;
  
  // Create carousel items
  carouselData.forEach((item, index) => {
    const carouselItem = document.createElement('div');
    carouselItem.className = 'carousel-item';
    carouselItem.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <div class="carousel-content">
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        <a href="${item.link}" class="register-btn">Learn More</a>
      </div>
    `;
    carousel.appendChild(carouselItem);
    
    // Create indicator
    const indicator = document.createElement('div');
    indicator.className = 'indicator';
    if (index === 0) indicator.classList.add('active');
    indicator.dataset.index = index;
    indicators.appendChild(indicator);
    
    // Add click event to indicator
    indicator.addEventListener('click', () => {
      goToSlide(index);
    });
  });
  
  // Next and Prev buttons
  nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % carouselData.length;
    goToSlide(currentSlide);
  });
  
  prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + carouselData.length) % carouselData.length;
    goToSlide(currentSlide);
  });
  
  // Go to slide function
  function goToSlide(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
    document.querySelectorAll('.indicator').forEach((ind, i) => {
      ind.classList.toggle('active', i === index);
    });
    currentSlide = index;
  }
  
  // Auto slide
  setInterval(() => {
    currentSlide = (currentSlide + 1) % carouselData.length;
    goToSlide(currentSlide);
  }, 5000);
}

// Modal functionality
function initModal() {
  closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
  });
  
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
}

// Show event details in modal
function showEventDetails(eventId) {
  const event = eventsData.find(e => e.id === eventId);
  if (!event) return;
  
  eventDetails.innerHTML = `
    <div class="event-detail-header">
      <div class="event-detail-img">
        <img src="${event.image}" alt="${event.title}">
      </div>
      <div class="event-detail-info">
        <h2>${event.title}</h2>
        <div class="event-detail-meta">
          <div class="meta-item">
            <i class="far fa-calendar-alt"></i>
            <span>${formatDate(event.date)}</span>
          </div>
          <div class="meta-item">
            <i class="far fa-clock"></i>
            <span>${event.time}</span>
          </div>
          <div class="meta-item">
            <i class="fas fa-map-marker-alt"></i>
            <span>${event.location}</span>
          </div>
        </div>
        <div class="event-tags">
          ${event.tags.map(tag => `<span class="event-tag">${tag}</span>`).join('')}
        </div>
      </div>
    </div>
    <div class="event-description">
      <p>${event.description}</p>
    </div>
    <div class="event-organizers">
      <h3>Organized by:</h3>
      ${event.organizers.map(org => `
        <div class="organizer">
          <img src="${org.image}" alt="${org.name}">
          <span>${org.name}</span>
        </div>
      `).join('')}
    </div>
    <a href="#" class="register-btn">Register Now</a>
  `;
  
  modal.style.display = 'flex';
}

// Calendar functionality
function initCalendar() {
  // Get all unique dates that have events
  const eventDates = eventsData.map(event => event.date);
  const uniqueDates = [...new Set(eventDates)];
  
  // Initialize flatpickr
  const calendar = flatpickr("#calendar", {
    inline: true,
    dateFormat: "Y-m-d",
    onReady: function() {
      // Mark dates that have events
      uniqueDates.forEach(date => {
        const dateElement = this.days.querySelector(`[aria-label="${formatDate(date)}"]`);
        if (dateElement) {
          dateElement.classList.add('has-event');
        }
      });
    },
    onChange: function(selectedDates, dateStr) {
      loadEventsByDate(dateStr);
    }
  });
  
  // Set initial date to today
  const today = new Date().toISOString().split('T')[0];
  loadEventsByDate(today);
}

// Load events for selected date
function loadEventsByDate(date) {
  const events = eventsData.filter(event => event.date === date);
  selectedDateElement.textContent = formatDate(date);
  
  if (events.length === 0) {
    eventsByDate.innerHTML = '<p class="no-events">No events on this date</p>';
    return;
  }
  
  eventsByDate.innerHTML = '';
  events.forEach(event => {
    const eventItem = document.createElement('div');
    eventItem.className = 'event-item';
    eventItem.innerHTML = `
      <h4>${event.title}</h4>
      <span class="event-time">${event.time}</span>
      <div class="event-location">
        <i class="fas fa-map-marker-alt"></i>
        <span>${event.location}</span>
      </div>
    `;
    eventItem.addEventListener('click', () => showEventDetails(event.id));
    eventsByDate.appendChild(eventItem);
  });
}

// Load events by category
function loadEventsByCategory() {
  // Get all category containers
  categoryContainers.forEach(container => {
    const categoryTitle = container.querySelector('.category-title').textContent;
    const categoryEvents = container.querySelector('.category-events');
    const scrollLeft = container.querySelector('.scroll-btn.left');
    const scrollRight = container.querySelector('.scroll-btn.right');
    
    // Get events for this category
    const events = eventsData.filter(event => event.category === categoryTitle);
    
    // Populate events
    events.forEach(event => {
      const eventCard = document.createElement('div');
      eventCard.className = 'event-card';
      eventCard.innerHTML = `
        <div class="event-card-img">
          <img src="${event.image}" alt="${event.title}">
        </div>
        <div class="event-card-content">
          <h3>${event.title}</h3>
          <span class="event-card-date">${formatDate(event.date)}</span>
          <p class="event-card-desc">${event.description}</p>
          <div class="event-tags">
            ${event.tags.slice(0, 3).map(tag => `<span class="event-tag">${tag}</span>`).join('')}
          </div>
        </div>
      `;
      eventCard.addEventListener('click', () => showEventDetails(event.id));
      categoryEvents.appendChild(eventCard);
    });
    
    // Scroll buttons functionality
    scrollLeft.addEventListener('click', () => {
      categoryEvents.scrollBy({
        left: -320,
        behavior: 'smooth'
      });
    });
    
    scrollRight.addEventListener('click', () => {
      categoryEvents.scrollBy({
        left: 320,
        behavior: 'smooth'
      });
    });
  });
}

// Initialize filters
function initFilters() {
  // Initialize date picker for filter
  flatpickr("#date-filter", {
    dateFormat: "Y-m-d",
    allowInput: true,
    placeholder: "Select Date"
  });
  
  // Apply filters button
  applyFiltersBtn.addEventListener('click', () => {
    applyFilters();
  });
  
  // Reset filters button
  resetFiltersBtn.addEventListener('click', () => {
    branchFilter.value = 'all';
    typeFilter.value = 'all';
    dateFilter.value = '';
    applyFilters();
  });
}

// Apply filters
function applyFilters() {
  const branch = branchFilter.value;
  const type = typeFilter.value;
  const date = dateFilter.value;
  
  let filteredEvents = [...eventsData];
  
  // Filter by branch
  if (branch !== 'all') {
    filteredEvents = filteredEvents.filter(event => 
      event.tags.includes(branch)
    );
  }
  
  // Filter by type
  if (type !== 'all') {
    filteredEvents = filteredEvents.filter(event => 
      event.tags.includes(type)
    );
  }
  
  // Filter by date
  if (date) {
    filteredEvents = filteredEvents.filter(event => 
      event.date === date
    );
  }
  
  // Display filtered results
  displayFilteredResults(filteredEvents);
}

// Display filtered results
function displayFilteredResults(events) {
  if (events.length === 0) {
    filteredResults.innerHTML = '<p class="no-events">No events match your criteria</p>';
    return;
  }
  
  filteredResults.innerHTML = '';
  events.forEach(event => {
    const eventCard = document.createElement('div');
    eventCard.className = 'event-card';
    eventCard.innerHTML = `
      <div class="event-card-img">
        <img src="${event.image}" alt="${event.title}">
      </div>
      <div class="event-card-content">
        <h3>${event.title}</h3>
        <span class="event-card-date">${formatDate(event.date)}</span>
        <p class="event-card-desc">${event.description}</p>
        <div class="event-tags">
          ${event.tags.slice(0, 3).map(tag => `<span class="event-tag">${tag}</span>`).join('')}
        </div>
      </div>
    `;
    eventCard.addEventListener('click', () => showEventDetails(event.id));
    filteredResults.appendChild(eventCard);
  });
}

// Helper function to format date
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}