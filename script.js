// Check if user preferences are stored in localStorage
const status = document.getElementById('status');
const animateBtn = document.getElementById('animateBtn');
const animationBox = document.getElementById('animationBox');

// Check localStorage for previous animation state
if (localStorage.getItem('animationTriggered') === 'true') {
  status.textContent = "Welcome back! The animation was triggered before.";
  animationBox.classList.add('animate');
} else {
  status.textContent = "Click the button to trigger the animation.";
}

// Function to trigger animation and store user preference
animateBtn.addEventListener('click', () => {
  // Toggle animation on the box
  animationBox.classList.toggle('animate');

  // Store the preference in localStorage
  if (animationBox.classList.contains('animate')) {
    localStorage.setItem('animationTriggered', 'true');
    status.textContent = "The animation has been triggered!";
  } else {
    localStorage.removeItem('animationTriggered');
    status.textContent = "The animation was reset.";
  }
});