
function toggleAccordion(id) {
    const accordion = document.getElementById(id);
    const icon = document.getElementById(id + '-icon');
    
    if (accordion && icon) {
        accordion.classList.toggle('hidden');
        icon.textContent = icon.textContent === '+' ? '-' : '+';
    }
}


const scrollTopBtn = document.getElementById('scrollTopBtn');

// Show the scroll-to-top button after scrolling down 100px
window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
        scrollTopBtn.classList.remove('hidden');
    } else {
        scrollTopBtn.classList.add('hidden');
    }
};

// Smooth scrolling for the scroll-to-top button
scrollTopBtn?.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }

  
  function handleScroll() {
    const section = document.getElementById('features');
    if (isElementInViewport(section) && !section.classList.contains('visible')) {
      section.classList.add('visible');
      section.querySelector('h2').classList.add('opacity-100', 'translate-y-0');
      animateFeatures();
    }
  }


  function animateFeatures() {
    const features = document.querySelectorAll('.feature-card');
    features.forEach((feature, index) => {
      setTimeout(() => {
        feature.classList.add('opacity-100', 'translate-y-0');
      }, index * 100);
    });
  }

  
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('load', handleScroll);


  
document.addEventListener('DOMContentLoaded', () => {
    // Animate main elements
    ['hero-title', 'hero-subtitle', 'hero-buttons', 'hero-stats'].forEach((id, index) => {
      setTimeout(() => {
        const element = document.getElementById(id);
        element.classList.remove('opacity-0', 'translate-y-8');
      }, index * 200);
    });
  
    // Create and animate particles
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute w-2 h-2 bg-white/10 rounded-full particle';
      particlesContainer.appendChild(particle);
      animateParticle(particle);
    }
  });
  
  // Particle animation function
  function animateParticle(particle) {
    // Random starting position
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;
    
    // Random movement values
    const duration = 15 + Math.random() * 10;
    const offsetX = -50 + Math.random() * 100;
    const offsetY = -50 + Math.random() * 100;
  
    // Set initial position
    particle.style.left = `${startX}px`;
    particle.style.top = `${startY}px`;
  
    // Animate the particle
    particle.animate([
      { transform: 'translate(0, 0)', opacity: 0.1 },
      { transform: `translate(${offsetX}px, ${offsetY}px)`, opacity: 0.5 },
      { transform: 'translate(0, 0)', opacity: 0.1 }
    ], {
      duration: duration * 1000,
      iterations: Infinity,
      easing: 'ease-in-out'
    });
  }
  
  

  
document.addEventListener('DOMContentLoaded', () => {
 
    const cards = document.querySelectorAll('.group');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('motion-safe:animate-fadeIn');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });
  
    cards.forEach((card) => {
      observer.observe(card);
    });
  });
  
  const navbar = document.getElementById('navbar');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

   
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        navbar.classList.add('bg-purple-800/95', 'backdrop-blur-sm', 'shadow-md');
      } else {
        navbar.classList.remove('bg-purple-800/95', 'backdrop-blur-sm', 'shadow-md');
      }
    });

   
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
      if (!navbar.contains(event.target)) {
        mobileMenu.classList.add('hidden');
      }
    });
    const partnerLogos = [
        {
          name: 'FastTrack Logistics',
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" class="w-full h-auto">
                  <rect width="200" height="100" fill="#ffffff"/>
                  <path d="M20 50 L60 20 L100 50 L140 20 L180 50" stroke="#1E40AF" stroke-width="8" fill="none"/>
                  <text x="100" y="80" font-family="Arial, sans-serif" font-size="14" fill="#1E40AF" text-anchor="middle">FastTrack Logistics</text>
                </svg>`
        },
        {
          name: 'Global Express',
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" class="w-full h-auto">
                  <rect width="200" height="100" fill="#ffffff"/>
                  <circle cx="50" cy="50" r="30" fill="#059669"/>
                  <path d="M90 20 L180 20 L180 80 L90 80 Z" fill="#059669"/>
                  <text x="135" y="60" font-family="Arial, sans-serif" font-size="18" fill="#ffffff" text-anchor="middle">GLOBAL EXPRESS</text>
                </svg>`
        },
        {
          name: 'AirCargo Solutions',
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" class="w-full h-auto">
                  <rect width="200" height="100" fill="#ffffff"/>
                  <path d="M20 80 L100 20 L180 80 L140 80 L100 40 L60 80 Z" fill="#DC2626"/>
                  <text x="100" y="95" font-family="Arial, sans-serif" font-size="14" fill="#DC2626" text-anchor="middle">AirCargo Solutions</text>
                </svg>`
        },
        {
          name: 'SecureShip',
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" class="w-full h-auto">
                  <rect width="200" height="100" fill="#ffffff"/>
                  <rect x="60" y="20" width="80" height="60" fill="#4F46E5"/>
                  <circle cx="100" cy="50" r="15" fill="#ffffff"/>
                  <rect x="95" y="45" width="10" height="20" fill="#4F46E5"/>
                  <text x="100" y="95" font-family="Arial, sans-serif" font-size="14" fill="#4F46E5" text-anchor="middle">SecureShip</text>
                </svg>`
        },
        {
          name: 'Swift Delivery Co.',
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" class="w-full h-auto">
                  <rect width="200" height="100" fill="#ffffff"/>
                  <path d="M20 50 L180 50 M160 30 L180 50 L160 70" stroke="#0891B2" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                  <text x="100" y="80" font-family="Arial, sans-serif" font-size="14" fill="#0891B2" text-anchor="middle">Swift Delivery Co.</text>
                </svg>`
        },
        {
          name: 'Prime Logistics',
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" class="w-full h-auto">
                  <rect width="200" height="100" fill="#ffffff"/>
                  <polygon points="20,80 100,20 180,80" fill="#7C3AED"/>
                  <text x="100" y="70" font-family="Arial, sans-serif" font-size="18" fill="#ffffff" text-anchor="middle">PRIME</text>
                  <text x="100" y="95" font-family="Arial, sans-serif" font-size="14" fill="#7C3AED" text-anchor="middle">LOGISTICS</text>
                </svg>`
        },
        {
          name: 'EcoFreight',
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" class="w-full h-auto">
                  <rect width="200" height="100" fill="#ffffff"/>
                  <path d="M40 70 Q70 20 100 70 Q130 120 160 70" fill="#10B981"/>
                  <text x="100" y="85" font-family="Arial, sans-serif" font-size="16" fill="#ffffff" text-anchor="middle">EcoFreight</text>
                </svg>`
        },
        {
          name: 'Rapid Couriers',
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" class="w-full h-auto">
                  <rect width="200" height="100" fill="#ffffff"/>
                  <path d="M20 50 L180 50 L150 20 M150 80 L180 50" stroke="#F59E0B" stroke-width="10" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                  <text x="100" y="85" font-family="Arial, sans-serif" font-size="14" fill="#F59E0B" text-anchor="middle">Rapid Couriers</text>
                </svg>`
        },
      ];
    
      // Function to create partner logo elements
      function createPartnerLogo(partner) {
        const logoDiv = document.createElement('div');
        logoDiv.className = 'bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg';
        logoDiv.innerHTML = partner.svg;
        
        const nameSpan = document.createElement('span');
        nameSpan.className = 'sr-only';
        nameSpan.textContent = partner.name;
        logoDiv.appendChild(nameSpan);
        
        return logoDiv;
      }
    
     
      function loadPartnerLogos() {
        const container = document.getElementById('partner-logos');
        partnerLogos.forEach(partner => {
          container.appendChild(createPartnerLogo(partner));
        });
      }
    
     
      document.addEventListener('DOMContentLoaded', loadPartnerLogos);
    
     
     