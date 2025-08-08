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