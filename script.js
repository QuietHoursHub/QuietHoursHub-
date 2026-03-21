let time = 1500;
let timer = null;
let streak = 0;

function updateDisplay() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  document.getElementById("time").innerText =
    `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer() {
  if (timer !== null) return;

  timer = setInterval(() => {
    time--;
    updateDisplay();

    if (time <= 0) {
      clearInterval(timer);
      timer = null;
      alert("Session Complete!");
      increaseStreak();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  time = 1500;
  updateDisplay();
}

function addTask() {
  let input = document.getElementById("taskInput");

  if (input.value.trim() === "") return;

  let li = document.createElement("li");
  li.innerText = input.value;

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function increaseStreak() {
  streak++;
  document.getElementById("streak").innerText = streak;
}

updateDisplay();
