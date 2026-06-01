const driverData = {

  "Lewis Hamilton":{
    code:"HAM",
    number:"44",
    team:"Ferrari",
    nationality:"GBR",
    pos:"P4",
    points:"41",
    podiums:"2",
    wins:"0",
    accent:"var(--ferrari)",
    form:["P5","P4","P3","P2","P1"]
  },

  "Charles Leclerc":{
    code:"LEC",
    number:"16",
    team:"Ferrari",
    nationality:"MON",
    pos:"P3",
    points:"49",
    podiums:"3",
    wins:"1",
    accent:"var(--ferrari)",
    form:["P4","P2","P3","P4","P3"]
  },

  "Max Verstappen":{
    code:"VER",
    number:"3",
    team:"Red Bull",
    nationality:"NED",
    pos:"P9",
    points:"12",
    podiums:"0",
    wins:"0",
    accent:"var(--redbull)",
    form:["P6","DNF","P8","P5","P3"]
  },

  "Lando Norris":{
    code:"NOR",
    number:"1",
    team:"McLaren",
    nationality:"GBR",
    pos:"P5",
    points:"25",
    podiums:"1",
    wins:"0",
    accent:"var(--mclaren)",
    form:["P4","P6","P5","P3","P5"]
  },

  "Oscar Piastri":{
    code:"PIA",
    number:"81",
    team:"McLaren",
    nationality:"AUS",
    pos:"P6",
    points:"21",
    podiums:"1",
    wins:"0",
    accent:"var(--mclaren)",
    form:["P7","P4","P6","P5","P4"]
  },

  "George Russell":{
    code:"RUS",
    number:"63",
    team:"Mercedes",
    nationality:"GBR",
    pos:"P2",
    points:"63",
    podiums:"4",
    wins:"1",
    accent:"var(--mercedes)",
    form:["P2","P1","P2","P2","P3"]
  },

  "Kimi Antonelli":{
    code:"ANT",
    number:"12",
    team:"Mercedes",
    nationality:"ITA",
    pos:"P1",
    points:"72",
    podiums:"5",
    wins:"2",
    accent:"var(--mercedes)",
    form:["P1","P1","P2","P1","P1"]
  },

  "Fernando Alonso":{
    code:"ALO",
    number:"14",
    team:"Aston Martin",
    nationality:"ESP",
    pos:"P16",
    points:"0",
    podiums:"0",
    wins:"0",
    accent:"var(--aston)",
    form:["P16","P15","P17","P14","P16"]
  },

  "Lance Stroll":{
    code:"STR",
    number:"18",
    team:"Aston Martin",
    nationality:"CAN",
    pos:"P15",
    points:"0",
    podiums:"0",
    wins:"0",
    accent:"var(--aston)",
    form:["P14","P16","P15","P17","P15"]
  },

  "Pierre Gasly":{
    code:"GAS",
    number:"10",
    team:"Alpine",
    nationality:"FRA",
    pos:"P8",
    points:"15",
    podiums:"0",
    wins:"0",
    accent:"var(--alpine)",
    form:["P8","P9","P7","P8","P10"]
  },

  "Franco Colapinto":{
    code:"COL",
    number:"43",
    team:"Alpine",
    nationality:"ARG",
    pos:"P12",
    points:"4",
    podiums:"0",
    wins:"0",
    accent:"var(--alpine)",
    form:["P13","P12","P11","P14","P12"]
  },

  "Oliver Bearman":{
    code:"BEA",
    number:"87",
    team:"Haas",
    nationality:"GBR",
    pos:"P7",
    points:"17",
    podiums:"0",
    wins:"0",
    accent:"var(--haas)",
    form:["P9","P8","P7","P6","P7"]
  },

  "Esteban Ocon":{
    code:"OCO",
    number:"31",
    team:"Haas",
    nationality:"FRA",
    pos:"P11",
    points:"6",
    podiums:"0",
    wins:"0",
    accent:"var(--haas)",
    form:["P12","P11","P10","P13","P11"]
  },

  "Carlos Sainz":{
    code:"SAI",
    number:"55",
    team:"Williams",
    nationality:"ESP",
    pos:"P10",
    points:"8",
    podiums:"0",
    wins:"0",
    accent:"var(--williams)",
    form:["P10","P12","P9","P11","P10"]
  },

  "Alexander Albon":{
    code:"ALB",
    number:"23",
    team:"Williams",
    nationality:"THA",
    pos:"P13",
    points:"3",
    podiums:"0",
    wins:"0",
    accent:"var(--williams)",
    form:["P14","P13","P12","P15","P13"]
  },

  "Liam Lawson":{
    code:"LAW",
    number:"30",
    team:"Racing Bulls",
    nationality:"NZL",
    pos:"P10",
    points:"10",
    podiums:"0",
    wins:"0",
    accent:"var(--racingbulls)",
    form:["P11","P10","P9","P10","P11"]
  },

  "Arvid Lindblad":{
    code:"LIN",
    number:"41",
    team:"Racing Bulls",
    nationality:"GBR",
    pos:"P14",
    points:"4",
    podiums:"0",
    wins:"0",
    accent:"var(--racingbulls)",
    form:["P15","P14","P13","P15","P14"]
  },

  "Isack Hadjar":{
    code:"HAD",
    number:"6",
    team:"Red Bull",
    nationality:"FRA",
    pos:"P17",
    points:"0",
    podiums:"0",
    wins:"0",
    accent:"var(--redbull)",
    form:["P17","P18","P16","P17","P15"]
  },

  "Gabriel Bortoleto":{
    code:"BOR",
    number:"5",
    team:"Audi",
    nationality:"BRA",
    pos:"P18",
    points:"0",
    podiums:"0",
    wins:"0",
    accent:"var(--audi)",
    form:["P18","P17","P19","P18","P17"]
  },

  "Nico Hulkenberg":{
    code:"HUL",
    number:"27",
    team:"Audi",
    nationality:"GER",
    pos:"P19",
    points:"0",
    podiums:"0",
    wins:"0",
    accent:"var(--audi)",
    form:["P19","P18","P20","P19","P18"]
  },

  "Sergio Perez":{
    code:"PER",
    number:"11",
    team:"Cadillac",
    nationality:"MEX",
    pos:"P20",
    points:"0",
    podiums:"0",
    wins:"0",
    accent:"var(--cadillac)",
    form:["P20","P19","P18","P20","P19"]
  },

  "Valtteri Bottas":{
    code:"BOT",
    number:"77",
    team:"Cadillac",
    nationality:"FIN",
    pos:"P21",
    points:"0",
    podiums:"0",
    wins:"0",
    accent:"var(--cadillac)",
    form:["P21","P20","P21","P20","P21"]
  }

};

function updateFavoriteDriver(driver){

  const d = driverData[driver];

  if(!d){
    console.error("Driver not found:", driver);
    return;
  }

  const profile =
    document.getElementById('favoriteDriverProfile');

  const driverName =
    document.getElementById('fdDriverName');

  const team =
    document.getElementById('fdTeam');

  const standing =
    document.getElementById('fdStanding');

  const points =
    document.getElementById('fdPoints');

  const code =
    document.getElementById('fdCode');

  const number =
    document.getElementById('fdNumber');

  const teamLine =
    document.getElementById('fdTeamLine');

  const podiums =
    document.getElementById('fdPodiums');

  const wins =
    document.getElementById('fdWins');

  const form =
    document.getElementById('fdForm');

  if(driverName) driverName.textContent = driver;

  if(team)
    team.textContent =
      `${d.team} · ${d.nationality}`;

  if(standing)
    standing.textContent = d.pos;

  if(points)
    points.textContent = d.points;

  if(code)
    code.textContent = d.code;

  if(number)
    number.textContent = d.number;

  if(teamLine)
    teamLine.textContent =
      `${d.team} · Live Season`;

  if(podiums)
    podiums.textContent = d.podiums;

  if(wins)
    wins.textContent = d.wins;

  if(profile){
    profile.style.setProperty(
      '--driver-accent',
      d.accent
    );
  }

  if(form && d.form){

    form.innerHTML = '';

    d.form.forEach(result => {

      const cell =
        document.createElement('div');

      cell.textContent = result;

      form.appendChild(cell);

    });

  }

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
