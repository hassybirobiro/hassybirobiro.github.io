document.addEventListener('DOMContentLoaded', function () {
  var button = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  if (!button || !nav) return;
  button.addEventListener('click', function () {
    nav.classList.toggle('show');
  });
});
