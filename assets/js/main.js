// Mobile nav toggle
(function () {
  var toggle = document.querySelector('.site-header__menu-toggle');
  var nav = document.querySelector('.site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('is-open');
    });
  }

  // Highlight active nav link
  var links = document.querySelectorAll('.site-nav__link');
  var path = window.location.pathname;
  links.forEach(function (link) {
    if (link.getAttribute('href') === path ||
        (path.startsWith(link.getAttribute('href')) && link.getAttribute('href') !== '/')) {
      link.classList.add('active');
    }
  });
})();
