
let burgers = 0;
let bps = 0;

const heroes = [
  { name: "Arachnid Lad", bps: 1, cost: 50, owned: 0 },
  { name: "Thore", bps: 5, cost: 200, owned: 0 },
  { name: "Optimus Subprime", bps: 15, cost: 750, owned: 0 },
  { name: "Compy Comrade", bps: 50, cost: 2500, owned: 0 },
  { name: "Irony Man", bps: 120, cost: 8000, owned: 0 }
];

function clickBurger() {
  burgers++;
  updateDisplay();
}

function buyHero(index) {
  const hero = heroes[index];
  if (burgers >= hero.cost) {
    burgers -= hero.cost;
    hero.owned++;
    hero.cost = Math.floor(hero.cost * 1.15);
    updateBPS();
    updateDisplay();
  }
}

function updateBPS() {
  bps = heroes.reduce((sum, h) => sum + h.bps * h.owned, 0);
}

function generateBurgers() {
  burgers += bps / 10;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('burgerCount').textContent = Math.floor(burgers);
  document.getElementById('bps').textContent = bps;
  const heroDiv = document.getElementById('heroes');
  heroDiv.innerHTML = "";
  heroes.forEach((hero, i) => {
    const btn = document.createElement("button");
    btn.textContent = `${hero.name} (Cost: ${hero.cost}) Owned: ${hero.owned}`;
    btn.onclick = () => buyHero(i);
    heroDiv.appendChild(btn);
  });
}

setInterval(generateBurgers, 100);
updateDisplay();
