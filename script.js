const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");
// const vibeBtn = document.getElementById("vibrateBtn");

jokeBtn.addEventListener("click", generateJoke);
// vibeBtn.addEventListener("click", vibrate);

generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch("https://icanhazdadjoke.com", config);
  const data = await res.json();
  jokeEl.innerHTML = data.joke;
}

// async function vibrate() {
//   if (navigator.userAgentData.mobile) {
//     navigator.vibrate();
//     alert("Vibration!");
//   } else {
//     alert("You're not on mobile!");
//   }
// }
