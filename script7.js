function openCard() {
  // Rotate the lid
  document.querySelector('.lid').style.transform = 'rotateX(90deg)';

  const card = document.getElementById('rakhiCard');
  card.classList.remove('hidden');

  // Wait for CSS to process then animate
  setTimeout(() => {
    card.classList.add('show');
  }, 50);
}
