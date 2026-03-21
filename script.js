let time = 1500;
let timer = null;

/* LOAD SAVED STREAK */
let streak = localStorage.getItem("streak") || 0;
document.getElementById("streak").innerText = streak + " days";

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

/* TASK */
function addTask() {
  let input = document.getElementById("taskInput");

  if (input.value.trim() === "") return;

  let li = document.createElement("li");
  li.innerText = input.value;

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

/* STREAK FIXED */
function increaseStreak() {
  streak++;
  localStorage.setItem("streak", streak);
  document.getElementById("streak").innerText = streak + " days";
}

/* FEEDBACK */
function submitFeedback() {
  let feedback = document.getElementById("feedbackInput").value;

  if (feedback.trim() === "") return;

  document.getElementById("feedbackMsg").innerText = "✅ Feedback submitted!";
  document.getElementById("feedbackInput").value = "";
}

updateDisplay();
