const refs = {
  button: document.querySelector('[data-toggler]'),
  toggleTop: document.querySelector('[data-toggler-top]'),
  toggleMiddle: document.querySelector('[data-toggler-middle]'),
  toggleBottom: document.querySelector('[data-toggler-bottom]'),
  nav_sm: document.querySelector('[ data-nav-sm]'),
};

(function () {
  refs.button.addEventListener('click', function () {
    refs.toggleTop.classList.toggle('rotate_right');
    refs.toggleMiddle.classList.toggle('bg-primary');
    refs.toggleBottom.classList.toggle('rotate_left');

    refs.nav_sm.classList.toggle('is_visible');
  });
})();
