let currentStep = 0;
let steps = document.querySelectorAll("#steps li");
let timerInterval;
let seconds = 0;

function toggleSection(id) {
  const section = document.getElementById(id);
  section.classList.toggle("hidden");
}

function startCooking() {
  currentStep = 0;
  highlightStep(currentStep);
  updateProgressBar();

  // Start timer
  seconds = 0;
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    seconds++;
    document.getElementById("timer").textContent = `⏱️ Time: ${seconds}s`;
  }, 1000);
}

function nextStep() {
  if (currentStep < steps.length - 1) {
    steps[currentStep].classList.remove("highlight");
    currentStep++;
    highlightStep(currentStep);
    updateProgressBar();
  } else {
    clearInterval(timerInterval);
    alert("You're done! 🎉");
  }
}

function highlightStep(index) {
  steps.forEach(step => step.classList.remove("highlight"));
  steps[index].classList.add("highlight");
}

function updateProgressBar() {
  const bar = document.getElementById("progress-bar");
  const percent = ((currentStep + 1) / steps.length) * 100;
  bar.style.width = percent + "%";
}
