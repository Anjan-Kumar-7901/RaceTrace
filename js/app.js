const driverData = {

  "Lewis Hamilton": {
    team:"Ferrari",
    pos:"P4",
    points:"41",
    short:"FER"
  },

  "Charles Leclerc": {
    team:"Ferrari",
    pos:"P3",
    points:"49",
    short:"FER"
  },

  "Max Verstappen": {
    team:"Red Bull",
    pos:"P9",
    points:"12",
    short:"RBR"
  },

  "Lando Norris": {
    team:"McLaren",
    pos:"P5",
    points:"25",
    short:"MCL"
  },

  "Oscar Piastri": {
    team:"McLaren",
    pos:"P6",
    points:"21",
    short:"MCL"
  },

  "George Russell": {
    team:"Mercedes",
    pos:"P2",
    points:"63",
    short:"MER"
  },

  "Kimi Antonelli": {
    team:"Mercedes",
    pos:"P1",
    points:"72",
    short:"MER"
  },

  "Fernando Alonso": {
    team:"Aston Martin",
    pos:"P16",
    points:"0",
    short:"AMR"
  }

};

function updateFavoriteDriver(driver){

  const d = driverData[driver];

  if(!d) return;

  document.getElementById(
    'favDriverName'
  ).textContent = driver;

  document.getElementById(
    'favDriverTeam'
  ).textContent = d.team;

  document.getElementById(
    'favDriverPos'
  ).textContent = d.pos;

  document.getElementById(
    'favDriverPoints'
  ).textContent = d.points;

  document.getElementById(
    'favDriverTeamShort'
  ).textContent = d.short;
}

(function(){

let selectedDriver = null;

const overlay =
document.getElementById('onboardingOverlay');

const step1 =
document.getElementById('step1');

const step2 =
document.getElementById('step2');

const step3 =
document.getElementById('step3');

const savedName =
localStorage.getItem('rtUserName');

const savedDriver =
localStorage.getItem('rtFavouriteDriver');

if(savedName && savedDriver){

    initializeDashboard(
      savedName,
      savedDriver
    );

    overlay.style.display = 'none';

    return;
}

function showStep(step){

  document
  .querySelectorAll('.onboard-screen')
  .forEach(s => s.classList.remove('active'));

  step.classList.add('active');
}

document
.getElementById('continueBtn')
.addEventListener('click', () => {

  const name =
  document
  .getElementById('userName')
  .value
  .trim();

  if(!name) return;

  localStorage.setItem(
    'rtUserName',
    name
  );

  showStep(step2);

});

document
.querySelectorAll('.driver-pick-card')
.forEach(card => {

  card.addEventListener('click', () => {

    document
    .querySelectorAll('.driver-pick-card')
    .forEach(c => c.classList.remove('selected'));

    card.classList.add('selected');

    selectedDriver =
    card.dataset.driver;

  });

});

document
.getElementById('confirmDriverBtn')
.addEventListener('click', () => {

  if(!selectedDriver) return;

  localStorage.setItem(
    'rtFavouriteDriver',
    selectedDriver
  );

  showStep(step3);

  document.getElementById(
    'loaderDriver'
  ).textContent =
  selectedDriver;

  setTimeout(() => {

      initializeDashboard(
        localStorage.getItem('rtUserName'),
        selectedDriver
      );

      overlay.style.display = 'none';

  },2000);

});

function initializeDashboard(name,driver){

  const now = new Date();

  const greeting =
    now.getHours() < 12
    ? 'Good morning'
    : now.getHours() < 17
    ? 'Good afternoon'
    : 'Good evening';

  document.getElementById(
    'greeting'
  ).textContent =
  `${greeting}, ${name}`;

  document.getElementById(
    'heroOwner'
  ).textContent =
  `${name}'s`;

  const D=['SUN','MON','TUE','WED','THU','FRI','SAT'];
  const M=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];

  document.getElementById(
    'dateline'
  ).textContent =
  `${D[now.getDay()]} · ${String(now.getDate()).padStart(2,'0')} ${M[now.getMonth()]} · ${now.getFullYear()}`;

  updateFavoriteDriver(driver);
}

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
