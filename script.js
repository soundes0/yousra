// Initialize the wedding date
const weddingDate = new Date("December 18, 2024 00:00:00").getTime();

// Countdown function
function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = weddingDate - now;

  // Time calculations for days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("countdown").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the countdown is finished, display a message
  if (timeLeft < 0) {
    document.getElementById("countdown").innerHTML = "It's the big day!";
  }
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Initialize the first countdown display
updateCountdown();

// Initialize wish count
let wishCount = 0;

// Handle form submission for messages
document.getElementById('submit-btn').addEventListener('click', function () {
  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && message) {
    // Increment the wish count
    wishCount++;
    updateWishCounter();

    // Remove placeholder message if it exists
    const placeholder = document.getElementById('placeholder-message');
    if (placeholder) {
      placeholder.remove();
    }

    // Create a new wish card
    const card = document.createElement('div');
    card.classList.add('wish-card');
    card.innerHTML = `
      <h4>${name}</h4>
      <p>${message}</p>
    `;

    // Append the card to the wish board
    document.getElementById('wish-board').appendChild(card);

    // Clear the form inputs
    document.getElementById('name').value = '';
    document.getElementById('message').value = '';
  } else {
    alert('Please fill in both fields before submitting.');
  }
});

// Update wish counter dynamically
function updateWishCounter() {
  const counterElement = document.getElementById('wish-counter');
  counterElement.textContent = `${wishCount} Wish${wishCount > 1 ? 'es' : ''}`;
}
