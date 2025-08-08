// MENU COLOR CHANGE

const menuWrapper = document.getElementById('menu-wrapper');
  const stickyOffset = menuWrapper.offsetTop;

  window.addEventListener('scroll', () => {
    if (window.scrollY > stickyOffset) {
      menuWrapper.classList.add('bg-[#242e8f]');
    } else {
      menuWrapper.classList.remove('bg-[#242e8f]');
    }
  });

  // MENU

  // Mobile menu toggle functionality
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');

// Open menu
menuToggle.addEventListener('click', function() {
    mobileMenu.classList.remove('translate-x-full');
    mobileMenu.classList.add('translate-x-0');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
});

// Close menu
closeMenu.addEventListener('click', function() {
    mobileMenu.classList.remove('translate-x-0');
    mobileMenu.classList.add('translate-x-full');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
});

// Close menu when clicking on a link (optional)
const mobileMenuLinks = document.querySelectorAll('#mobileMenu nav a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function() {
        mobileMenu.classList.remove('translate-x-0');
        mobileMenu.classList.add('translate-x-full');
        document.body.style.overflow = 'auto';
    });
});

// Close menu on window resize if desktop view
window.addEventListener('resize', function() {
    if (window.innerWidth >= 1024) {
        mobileMenu.classList.remove('translate-x-0');
        mobileMenu.classList.add('translate-x-full');
        document.body.style.overflow = 'auto';
    }
});