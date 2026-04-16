// 导航栏滚动效果 + 移动菜单交互
(function() {
  const navbar = document.getElementById('navbar');
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        navbar.classList.add('shadow-md', 'bg-white/95');
      } else {
        navbar.classList.remove('shadow-md');
      }
    });
  }
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      const icon = menuBtn.querySelector('i');
      if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  }

  // 初始化 AOS
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 800, once: true });
  }
})();