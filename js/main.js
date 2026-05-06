document.addEventListener('DOMContentLoaded', function () {
  var button = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  if (button && nav) {
    button.addEventListener('click', function () {
      nav.classList.toggle('show');
    });
  }

  var hero = document.querySelector('.hero');
  if (!hero) return;
  hero.classList.add('animate-gradient');

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  var starCount = 80;
  for (var i = 0; i < starCount; i++) {
    var star = document.createElement('span');
    star.className = 'hero-star';
    var top = 4 + Math.random() * 88;
    var left = 4 + Math.random() * 92;
    var size = 1 + Math.random() * 3.2;
    var duration = 10 + Math.random() * 12;
    var delay = Math.random() * 5;
    var dx1 = (Math.random() - 0.5) * 80 + 'px';
    var dy1 = (Math.random() - 0.5) * 80 + 'px';
    var dx2 = (Math.random() - 0.5) * 80 + 'px';
    var dy2 = (Math.random() - 0.5) * 80 + 'px';
    var dx3 = (Math.random() - 0.5) * 80 + 'px';
    var dy3 = (Math.random() - 0.5) * 80 + 'px';
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.top = top + '%';
    star.style.left = left + '%';
    star.style.opacity = 0.2 + Math.random() * 0.8;
    star.style.setProperty('--star-duration', duration + 's');
    star.style.setProperty('--star-delay', delay + 's');
    star.style.setProperty('--star-dx1', dx1);
    star.style.setProperty('--star-dy1', dy1);
    star.style.setProperty('--star-dx2', dx2);
    star.style.setProperty('--star-dy2', dy2);
    star.style.setProperty('--star-dx3', dx3);
    star.style.setProperty('--star-dy3', dy3);
    hero.appendChild(star);
  }

  var phase = 0;
  function animateHero() {
    phase += 0.25;
    var angle = 135 + Math.sin(phase / 28) * 20;
    var stop1 = 34 + Math.sin(phase / 18) * 8;
    var stop2 = 66 + Math.cos(phase / 22) * 10;
    hero.style.setProperty('--hero-angle', angle + 'deg');
    hero.style.setProperty('--hero-stop-1', stop1 + '%');
    hero.style.setProperty('--hero-stop-2', stop2 + '%');
    requestAnimationFrame(animateHero);
  }

  requestAnimationFrame(animateHero);
});
