const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("close-btn");
const body = document.body;
overlay.classList.add('opacity-0', 'pointer-events-none');
// open mobile menu()
function openMenu() {
    mobileMenu.classList.remove('-translate-x-full','-translate-y-2');
    mobileMenu.classList.add('translate-y-0');
    overlay.classList.remove('opacity-0', 'pointer-events-none');
    overlay.classList.add('opacity-100');
    body.classList.add('menu-open');
}
function closeMenu() {
    mobileMenu.classList.add('-translate-x-full', '-translate-y-2');
    overlay.classList.add('opacity-0', 'pointer-events-none');
    overlay.classList.remove('opacity-100');
    body.classList.remove('menu-open');
}
 menuBtn.addEventListener('click', () => {
    if (mobileMenu.classList.contains('-translate-x-full')) {
      openMenu();
    } else {
      closeMenu();
    }
  });
   overlay.addEventListener('click', closeMenu);
  closeBtn.addEventListener('click', closeMenu);
