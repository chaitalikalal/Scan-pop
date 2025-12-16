/* SCREEN SWITCHING */
function goTo(id) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

/* BUBBLE GAME */
let bubbleClicked = false;

function popBubble(el) {
  if (bubbleClicked) return;
  bubbleClicked = true;

  const reward = el.innerText;
  let resultText = "";
  let resultSub = "";

  if (reward.includes("OFF") || reward.includes("FREE")) {
    resultText = "🎉 Congratulations!";
    resultSub = `You unlocked ${reward}.<br>Applied automatically on your next Blinkit order.`;
  } else {
    resultText = "😄 Oops!";
    resultSub = "Better luck next time.<br>We still love you 💛";
  }

  document.getElementById("resultText").innerHTML = resultText;
  document.getElementById("resultSub").innerHTML = resultSub;

  setTimeout(() => {
    goTo("result");
  }, 600);
}

/* QUOTES */
const quotes = [
  "Small smiles make big days better 😊",
  "You’re doing amazing, keep going 💛",
  "A little joy goes a long way ✨",
  "Today is a good day to smile 😄"
];

function showQuote() {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerText = random;
}

/* MESSAGE SHARING */
function generateLink() {
  const msg = document.getElementById("userMessage").value.trim();
  if (!msg) {
    alert("Please write a message first 💌");
    return;
  }

  const encoded = encodeURIComponent(msg);
  const url = `${window.location.origin}${window.location.pathname}?msg=${encoded}`;

  document.getElementById("shareLink").innerHTML =
    `Share this link with your friend:<br><a href="${url}">${url}</a>`;
}

/* FRIEND MESSAGE VIEW */
window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  const message = params.get("msg");

  if (message) {
    goTo("love");
    document.querySelector("#love p").innerHTML =
      `💌 Your friend says:<br><strong>${decodeURIComponent(message)}</strong>`;
  }
};
