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

    const svg = document.querySelector('.hero-connections');
    const lines = [];
    const maxConnections = 15; // 同時に表示される線の最大数

    function createLine() {
        if (lines.length >= maxConnections) return;

        const allStars = document.querySelectorAll('.hero-star');
        // ランダムに2つの星を選択
        const s1 = allStars[Math.floor(Math.random() * allStars.length)];
        const s2 = allStars[Math.floor(Math.random() * allStars.length)];

        if (s1 === s2) return;

        // 星の現在位置を取得
        const rect1 = s1.getBoundingClientRect();
        const rect2 = s2.getBoundingClientRect();
        const heroRect = hero.getBoundingClientRect();

        // 距離が遠すぎる場合はつながない（お好みで調整）
        const dist = Math.hypot(rect1.left - rect2.left, rect1.top - rect2.top);
        if (dist > 300) return;

        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', ((rect1.left + rect1.right) / 2) - heroRect.left);
        line.setAttribute('y1', ((rect1.top + rect1.bottom) / 2) - heroRect.top);
        line.setAttribute('x2', ((rect2.left + rect2.right) / 2) - heroRect.left);
        line.setAttribute('y2', ((rect2.top + rect2.bottom) / 2) - heroRect.top);

        // 線の見た目
        line.setAttribute('stroke', 'rgba(255, 255, 255, 0.2)');
        line.setAttribute('stroke-width', '0.5');
        line.style.transition = 'opacity 1s ease';
        line.style.opacity = '0';

        svg.appendChild(line);
        lines.push(line);

        // アニメーション：フェードインして消える
        requestAnimationFrame(() => {
            line.style.opacity = '1';
        });

        setTimeout(() => {
            line.style.opacity = '0';
            setTimeout(() => {
                line.remove();
                lines.splice(lines.indexOf(line), 1);
            }, 1000);
        }, 2000 + Math.random() * 3000);
    }

    // 定期的に線を生成
    setInterval(createLine, 400);
});
