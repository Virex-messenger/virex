// CHAT ANIMATION
const messages = [
  {text:"Hey 👋", side:"left"},
  {text:"Welcome to Virex 🚀", side:"right"},
  {text:"Is it fast?", side:"left"},
  {text:"Super fast ⚡", side:"right"},
  {text:"Looks cool!", side:"left"},
  {text:"Secure 🔒", side:"right"}
];

const chat = document.getElementById("chat");

let i = 0;

function showMessage() {
  if (i >= messages.length) return;

  const msg = document.createElement("div");
  msg.className = "msg " + messages[i].side;
  msg.innerText = messages[i].text;

  chat.appendChild(msg);

  i++;
  setTimeout(showMessage, 800);
}

showMessage();

// SCROLL ANIMATION
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});
