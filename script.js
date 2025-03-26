localStorage.removeItem("devMode");

const carPool = [
  { name: "Toyota Supra", image: "https://cdn.imagin.studio/getimage?customer=img&make=Toyota&modelFamily=Supra", rarity: "common" },
  { name: "Honda Civic", image: "https://cdn.imagin.studio/getimage?customer=img&make=Honda&modelFamily=Civic", rarity: "common" },
  { name: "Ford Mustang", image: "https://cdn.imagin.studio/getimage?customer=img&make=Ford&modelFamily=Mustang", rarity: "common" },
  { name: "Chevrolet Camaro", image: "https://cdn.imagin.studio/getimage?customer=img&make=Chevrolet&modelFamily=Camaro", rarity: "common" },
  { name: "BMW M3", image: "https://cdn.imagin.studio/getimage?customer=img&make=BMW&modelFamily=M3", rarity: "rare" },
  { name: "Audi R8", image: "https://cdn.imagin.studio/getimage?customer=img&make=Audi&modelFamily=R8", rarity: "rare" },
  { name: "Lamborghini Aventador", image: "https://cdn.imagin.studio/getimage?customer=img&make=Lamborghini&modelFamily=Aventador", rarity: "legendary" },
  { name: "Bugatti Chiron", image: "https://cdn.imagin.studio/getimage?customer=img&make=Bugatti&modelFamily=Chiron", rarity: "legendary" },
  { name: "Koenigsegg Jesko", image: "https://cdn.imagin.studio/getimage?customer=img&make=Koenigsegg&modelFamily=Jesko", rarity: "legendary" },
  { name: "McLaren P1", image: "https://cdn.imagin.studio/getimage?customer=img&make=McLaren&modelFamily=P1", rarity: "legendary" },
  { name: "Nissan GT-R", image: "https://cdn.imagin.studio/getimage?customer=img&make=Nissan&modelFamily=GT-R", rarity: "rare" },
  { name: "Mazda RX-7", image: "https://cdn.imagin.studio/getimage?customer=img&make=Mazda&modelFamily=RX-7", rarity: "common" },
  { name: "Mercedes AMG GT", image: "https://cdn.imagin.studio/getimage?customer=img&make=Mercedes&modelFamily=AMG%20GT", rarity: "rare" },
  { name: "Pagani Zonda", image: "https://cdn.imagin.studio/getimage?customer=img&make=Pagani&modelFamily=Zonda", rarity: "legendary" },
  { name: "Toyota Yaris", image: "https://cdn.imagin.studio/getimage?customer=img&make=Toyota&modelFamily=Yaris", rarity: "common" },
  { name: "Honda NSX", image: "https://cdn.imagin.studio/getimage?customer=img&make=Honda&modelFamily=NSX", rarity: "rare" },
  { name: "Ford GT", image: "https://cdn.imagin.studio/getimage?customer=img&make=Ford&modelFamily=GT", rarity: "rare" },
  { name: "Chevrolet Corvette", image: "https://cdn.imagin.studio/getimage?customer=img&make=Chevrolet&modelFamily=Corvette", rarity: "rare" },
  { name: "BMW Z4", image: "https://cdn.imagin.studio/getimage?customer=img&make=BMW&modelFamily=Z4", rarity: "rare" },
  { name: "Audi TT", image: "https://cdn.imagin.studio/getimage?customer=img&make=Audi&modelFamily=TT", rarity: "common" },
  { name: "Lamborghini Urus", image: "https://cdn.imagin.studio/getimage?customer=img&make=Lamborghini&modelFamily=Urus", rarity: "legendary" },
  { name: "Bugatti Veyron", image: "https://cdn.imagin.studio/getimage?customer=img&make=Bugatti&modelFamily=Veyron", rarity: "legendary" },
  { name: "Koenigsegg Regera", image: "https://cdn.imagin.studio/getimage?customer=img&make=Koenigsegg&modelFamily=Regera", rarity: "legendary" },
  { name: "McLaren 720S", image: "https://cdn.imagin.studio/getimage?customer=img&make=McLaren&modelFamily=720S", rarity: "legendary" },
  { name: "Nissan 370Z", image: "https://cdn.imagin.studio/getimage?customer=img&make=Nissan&modelFamily=370Z", rarity: "common" },
  { name: "Mazda MX-5", image: "https://cdn.imagin.studio/getimage?customer=img&make=Mazda&modelFamily=MX-5", rarity: "common" },
  { name: "Mercedes G-Wagon", image: "https://cdn.imagin.studio/getimage?customer=img&make=Mercedes&modelFamily=G-Wagon", rarity: "rare" },
  { name: "Pagani Huayra", image: "https://cdn.imagin.studio/getimage?customer=img&make=Pagani&modelFamily=Huayra", rarity: "legendary" },
  { name: "Toyota 86", image: "https://cdn.imagin.studio/getimage?customer=img&make=Toyota&modelFamily=86", rarity: "common" },
  { name: "Honda Accord", image: "https://cdn.imagin.studio/getimage?customer=img&make=Honda&modelFamily=Accord", rarity: "common" },
  { name: "Ford F-150", image: "https://cdn.imagin.studio/getimage?customer=img&make=Ford&modelFamily=F-150", rarity: "common" },
  { name: "Chevrolet Malibu", image: "https://cdn.imagin.studio/getimage?customer=img&make=Chevrolet&modelFamily=Malibu", rarity: "common" },
  { name: "BMW M4", image: "https://cdn.imagin.studio/getimage?customer=img&make=BMW&modelFamily=M4", rarity: "rare" },
  { name: "Audi A4", image: "https://cdn.imagin.studio/getimage?customer=img&make=Audi&modelFamily=A4", rarity: "common" },
  { name: "McLaren Artura", image: "https://cdn.imagin.studio/getimage?customer=img&make=McLaren&modelFamily=Artura", rarity: "legendary" },
  { name: "Toyota Corolla", image: "https://cdn.imagin.studio/getimage?customer=img&make=Toyota&modelFamily=Corolla", rarity: "common" },
  { name: "Honda CR-V", image: "https://cdn.imagin.studio/getimage?customer=img&make=Honda&modelFamily=CR-V", rarity: "common" },
  { name: "Ford Explorer", image: "https://cdn.imagin.studio/getimage?customer=img&make=Ford&modelFamily=Explorer", rarity: "common" },
  { name: "Chevrolet Tahoe", image: "https://cdn.imagin.studio/getimage?customer=img&make=Chevrolet&modelFamily=Tahoe", rarity: "common" },
  { name: "BMW X5", image: "https://cdn.imagin.studio/getimage?customer=img&make=BMW&modelFamily=X5", rarity: "rare" },
  { name: "Audi Q7", image: "https://cdn.imagin.studio/getimage?customer=img&make=Audi&modelFamily=Q7", rarity: "rare" },
  { name: "Mercedes E-Class", image: "https://cdn.imagin.studio/getimage?customer=img&make=Mercedes&modelFamily=E-Class", rarity: "rare" },
  { name: "Nissan Altima", image: "https://cdn.imagin.studio/getimage?customer=img&make=Nissan&modelFamily=Altima", rarity: "common" },
  { name: "Mazda CX-5", image: "https://cdn.imagin.studio/getimage?customer=img&make=Mazda&modelFamily=CX-5", rarity: "common" },
  { name: "Pagani Imola", image: "https://cdn.imagin.studio/getimage?customer=img&make=Pagani&modelFamily=Imola", rarity: "legendary" },
  { name: "Lamborghini Huracan", image: "https://cdn.imagin.studio/getimage?customer=img&make=Lamborghini&modelFamily=Huracan", rarity: "legendary" },
  { name: "Bugatti Divo", image: "https://cdn.imagin.studio/getimage?customer=img&make=Bugatti&modelFamily=Divo", rarity: "legendary" },
  { name: "Koenigsegg Gemera", image: "https://cdn.imagin.studio/getimage?customer=img&make=Koenigsegg&modelFamily=Gemera", rarity: "legendary" }
];



// Load everything from localStorage
let money = parseInt(localStorage.getItem("money")) || 0;


let garage = JSON.parse(localStorage.getItem("garage")) || [];
let devMode = localStorage.getItem("devMode") === "true";




let pullData = JSON.parse(localStorage.getItem("pullData")) || {};
let redeemCodes = JSON.parse(localStorage.getItem("redeemCodes")) || {};

const dailyReward = document.getElementById("dailyReward");
const rewardAmount = document.getElementById("rewardAmount");

const rarityRewards = {
  common: 1000,
  rare: 5000,
  legendary: 15000
};
const scrapPackBtn = document.getElementById("scrapPackBtn");

const collectBtn = document.getElementById("collectBtn");
const garageBtn = document.getElementById("garageBtn");
const storeBtn = document.getElementById("storeBtn");

const message = document.getElementById("message");
const garageDiv = document.getElementById("garage");
const storeDiv = document.getElementById("store");
const packDiv = document.getElementById("packAnimation");
const moneyDisplay = document.getElementById("moneyDisplay");

const rarityChances = { common: 70, rare: 25, legendary: 5 };
const MAX_DAILY_PULLS = 3;
const redeemBtn = document.getElementById("redeemBtn");
const redeemPopup = document.getElementById("redeemPopup");
const redeemInput = document.getElementById("redeemInput");
const redeemSubmit = document.getElementById("redeemSubmit");

const makeCodePopup = document.getElementById("makeCodePopup");
const makeCodeCar = document.getElementById("makeCodeCar");
const makeCodeSubmit = document.getElementById("makeCodeSubmit");


const savedCodes = localStorage.getItem("redeemCodes");
if (savedCodes) {
  redeemCodes = JSON.parse(savedCodes);
}
moneyDisplay.textContent = `💰 Money: $${money.toLocaleString()}`;
function saveGame() {
  localStorage.setItem("money", money);
  localStorage.setItem("garage", JSON.stringify(garage));
  localStorage.setItem("pullData", JSON.stringify(pullData));
  localStorage.setItem("redeemCodes", JSON.stringify(redeemCodes));
 // ✅ add this
}




function getRandomRarity() {
  const roll = Math.random() * 100;
  if (roll < rarityChances.common) return "common";
  if (roll < rarityChances.common + rarityChances.rare) return "rare";
  return "legendary";
}

function getRandomCar() {
  const rarity = getRandomRarity();
  const filteredCars = carPool.filter(car => car.rarity === rarity);
  return filteredCars[Math.floor(Math.random() * filteredCars.length)];
}

function getTodayKey() {
  const today = new Date();
  return today.toISOString().split("T")[0];
}

function getPullCount() {
  const todayKey = getTodayKey();
  return pullData[todayKey] || 0; // ✅ use the in-memory version
}


function incrementPullCount() {
  const todayKey = getTodayKey();
  pullData[todayKey] = (pullData[todayKey] || 0) + 1;
  localStorage.setItem("pullData", JSON.stringify(pullData)); // ✅ now this is correct
}


function hideAllViews() {
  storeDiv.classList.add("hidden");
  garageDiv.classList.add("hidden");
  packDiv.classList.add("hidden");
}

function hideDailyReward() {
  dailyReward.classList.add("hidden");
}

collectBtn.addEventListener("click", () => {
  hideDailyReward();
  hideAllViews();
  packDiv.classList.remove("hidden");

  const currentPulls = getPullCount();
  if (!devMode && currentPulls >= MAX_DAILY_PULLS) {
    message.innerHTML = "🚫 You’ve reached your daily limit of 3 pulls. Come back tomorrow!";
    return;
  }


  
  const newCar = getRandomCar();
  garage.push(newCar);

  
incrementPullCount(); 
money += rarityRewards[newCar.rarity]; // ❌ REMOVE THIS LINE
// 👉 do this before updating message
saveGame();

// Set content first
packDiv.innerHTML = `
  🔥 You pulled a <strong class="${newCar.rarity}">${newCar.name}</strong>!
  <br>
  <img src="${newCar.image}" alt="${newCar.name}">
`;

// Then trigger animation
packDiv.classList.remove("show");
void packDiv.offsetWidth; // Force reflow
packDiv.classList.add("show");

// Update message after incrementing pull count
const pullsLeft = MAX_DAILY_PULLS - getPullCount();
if (pullsLeft > 0) {
  message.innerHTML = `You have ${pullsLeft} pulls left today.`;
} else {
  message.innerHTML = "🚫 You’ve reached your daily limit of 3 pulls. Come back tomorrow!";
}

  moneyDisplay.textContent = `💰 Money: $${money.toLocaleString()}`;

  // Hide after animation
  setTimeout(() => {
    packDiv.classList.remove("show");
    setTimeout(() => {
      packDiv.classList.add("hidden");
    }, 500); // Match CSS transition
  }, 2500);
});

scrapPackBtn.addEventListener("click", () => {
  hideDailyReward();
  hideAllViews();
  packDiv.classList.remove("hidden");

  if (money < 500) {
    message.innerHTML = "❌ Not enough money for the Scrap Pack.";
    return;
  }

  money -= 500;

  // Better odds for Scrap Pack
  const roll = Math.random() * 100;
  let rarity;
  if (roll < 50) rarity = "common";
  else if (roll < 85) rarity = "rare";
  else rarity = "legendary";

  const filtered = carPool.filter(car => car.rarity === rarity);
  const newCar = filtered[Math.floor(Math.random() * filtered.length)];

  garage.push(newCar);

  saveGame();

  packDiv.innerHTML = `
    🔥 You pulled a <strong class="${newCar.rarity}">${newCar.name}</strong>!
    <br>
    <img src="${newCar.image}" alt="${newCar.name}">
  `;

  packDiv.classList.remove("show");
  void packDiv.offsetWidth;
  packDiv.classList.add("show");

  message.innerHTML = `✅ You opened a Scrap Pack!`;
  moneyDisplay.textContent = `💰 Money: $${money.toLocaleString()}`;

  setTimeout(() => {
    packDiv.classList.remove("show");
    setTimeout(() => {
      packDiv.classList.add("hidden");
    }, 500);
  }, 2500);
});


garageBtn.addEventListener("click", () => {
  hideDailyReward();
  hideAllViews();

  if (garage.length === 0) {
    garageDiv.innerHTML = "<p>Your garage is empty!</p>";
    garageDiv.classList.remove("hidden");
    return;
  }

  let html = "";
  garage.forEach(car => {
    html += `
      <div class="car-card">
        <img src="${car.image}" alt="${car.name}">
        <div class="car-name ${car.rarity}">${car.name}</div>
        <div class="car-rarity ${car.rarity}">${car.rarity.toUpperCase()}</div>
      </div>
    `;
  });

  garageDiv.innerHTML = html;
  garageDiv.classList.remove("hidden");
});


storeBtn.addEventListener("click", () => {
  hideDailyReward();
  hideAllViews();
  storeDiv.innerHTML = "";
  storeDiv.classList.remove("hidden");

  carPool.forEach((car, index) => {
    const price = rarityRewards[car.rarity] * 3;
    const card = document.createElement("div");
    card.className = "car-card";
    card.innerHTML = `
      <img src="${car.image}" alt="${car.name}">
      <div class="car-name ${car.rarity}">${car.name}</div>
      <div class="car-rarity ${car.rarity}">${car.rarity.toUpperCase()}</div>
      <div class="price">💸 $${price.toLocaleString()}</div>
      <button class="buyBtn" data-index="${index}" data-price="${price}">Buy</button>
    `;
    storeDiv.appendChild(card);
  });

  document.querySelectorAll(".buyBtn").forEach(button => {
    button.addEventListener("click", (e) => {
      const price = parseInt(e.target.dataset.price);
      const carIndex = e.target.dataset.index;
      if (money >= price) {
        money -= price;
        garage.push(carPool[carIndex]);
        saveGame();
        
        moneyDisplay.textContent = `💰 Money: $${money.toLocaleString()}`;
        e.target.textContent = "✅ Bought";
        e.target.disabled = true;
      } else {
        e.target.textContent = "❌ Not enough";
        setTimeout(() => e.target.textContent = "Buy", 1200);
      }
    });
  });
});



const devGear = document.getElementById("devGear");
const devPopup = document.getElementById("devPopup");
const devCodeInput = document.getElementById("devCodeInput");
const devSubmit = document.getElementById("devSubmit");

devGear.addEventListener("click", () => {
  devPopup.classList.toggle("hidden");
});

devSubmit.addEventListener("click", () => {
  const code = devCodeInput.value.trim();
  if (code === "299279") {
    devMode = true;
    localStorage.setItem("devMode", "true"); // ✅ Save dev mode ON
    devPopup.classList.add("hidden");
    makeCodePopup.classList.remove("hidden");
    alert("🛠️ Dev Mode Activated! Unlimited pulls unlocked.");
  }
});

redeemBtn.addEventListener("click", () => {
  hideDailyReward(); // 👈 Add this line
  redeemPopup.classList.toggle("hidden");
});

redeemSubmit.addEventListener("click", () => {
  const code = redeemInput.value.trim();

  fetch("https://gist.githubusercontent.com/zakariyyazeb108/00fd382e8c1d683e2f3b491f2362f3b5/raw/299e60b6ae976e125f35e30a11e2570c3b4373d5/redeemCodes.json")
    .then(res => res.json())
    .then(redeemCodes => {
      if (redeemCodes[code]) {
        const carName = redeemCodes[code];
        const car = carPool.find(c => c.name === carName);
        if (car) {
          garage.push(car);
money += rarityRewards[car.rarity];
saveGame();

          moneyDisplay.textContent = `💰 Money: $${money.toLocaleString()}`;
          message.innerHTML = `✅ You redeemed: <strong class="${car.rarity}">${car.name}</strong>`;
        } else {
          message.innerHTML = `❌ Car not found.`;
        }
      } else {
        message.innerHTML = "❌ Invalid or used code.";
      }

      redeemInput.value = "";
      redeemPopup.classList.add("hidden");
    })
    .catch(err => {
      console.error("Error fetching codes:", err);
      message.innerHTML = "⚠️ Couldn't check code.";
    });
});




makeCodeSubmit.addEventListener("click", () => {
  const carName = makeCodeCar.value.trim();
  const car = carPool.find(c => c.name === carName);
  if (!car) {
    alert("❌ Car not found.");
    return;
  }
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  redeemCodes[code] = carName;
saveGame();

  // 🔐 Save to localStorage
  localStorage.setItem("redeemCodes", JSON.stringify(redeemCodes));

  alert(`✅ Code generated: ${code} for ${carName}`);
  makeCodeCar.value = "";
});


function claimDailyReward() {
  const today = getTodayKey();
  const lastClaim = localStorage.getItem("lastDailyReward");

  if (lastClaim === today) return; // Already claimed

  const amount = Math.floor(1000 + Math.random() * 3000); // $1k to $4k
  money += amount;
localStorage.setItem("lastDailyReward", today);
saveGame();

  rewardAmount.textContent = `$${amount.toLocaleString()}`;
  moneyDisplay.textContent = `💰 Money: $${money.toLocaleString()}`;
  dailyReward.classList.remove("hidden");

  localStorage.setItem("lastDailyReward", today);
}

window.addEventListener("DOMContentLoaded", () => {
  claimDailyReward();
});
