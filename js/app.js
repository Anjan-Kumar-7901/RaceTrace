(function(){
  const now = new Date();
  const h = now.getHours();

  const g =
    h < 12
      ? 'Good morning'
      : h < 17
      ? 'Good afternoon'
      : 'Good evening';

  document.getElementById('greeting').textContent =
    g + ', Shreya';

  const D = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
  const M = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];

  document.getElementById('dateline').textContent =
    D[now.getDay()] +
    ' · ' +
    String(now.getDate()).padStart(2,'0') +
    ' ' +
    M[now.getMonth()] +
    ' · ' +
    now.getFullYear();
})();

(function(){
  const target = new Date('2026-05-03T20:00:00Z').getTime();

  const pad = (n) => String(n).padStart(2,'0');

  function tick() {
    const diff = target - Date.now();

    if (diff <= 0) {
      ['cd-d','cd-h','cd-m','cd-s'].forEach(id => {
        document.getElementById(id).textContent = '00';
      });
      return;
    }

    document.getElementById('cd-d').textContent =
      pad(Math.floor(diff / 86400000));

    document.getElementById('cd-h').textContent =
      pad(Math.floor((diff % 86400000) / 3600000));

    document.getElementById('cd-m').textContent =
      pad(Math.floor((diff % 3600000) / 60000));

    document.getElementById('cd-s').textContent =
      pad(Math.floor((diff % 60000) / 1000));
  }

  tick();
  setInterval(tick, 1000);
})();

(function(){
  const items = [
    { sym:'WDC',      val:'ANTONELLI', pts:'72 pts' },
    { sym:'WCC',      val:'MERCEDES',  pts:'135 pts' },
    { sym:'NEXT',     val:'MIAMI GP',  pts:'MAY 3' },
    { sym:'WINNER',   val:'ANTONELLI', pts:'JAPAN' },
    { sym:'FL',       val:'RUSSELL',   pts:'1:28.411' },
    { sym:'FAST PIT', val:'MCLAREN',   pts:'1.94s' },
    { sym:'VER',      val:'−60',       pts:'P9' },
    { sym:'ROOKIE',   val:'LINDBLAD',  pts:'4 pts' },
  ];

  const mk = (it) =>
    `<span class="tick">
      <span class="sym">${it.sym}</span>
      <span class="val">${it.val}</span>
      <span class="pts">${it.pts}</span>
    </span>
    <span class="tick tick-dot">◆</span>`;

  const half = items.map(mk).join('');

  document.getElementById('tkTrack').innerHTML =
    half + half;
})();

(function(){
  setTimeout(() => {
    const next = document.querySelector('.cal-round.next');

    if (next) {
      const strip = document.getElementById('calStrip');

      strip.scrollTo({
        left: next.offsetLeft - 60,
        behavior: 'smooth'
      });
    }
  }, 5000);
})();
