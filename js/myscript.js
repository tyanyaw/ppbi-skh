function showTab(button, showId, hideIds) {
  // Hide non-target sections
  w3.hide(hideIds.join(','));
  w3.show(showId);

  // Remove highlight and active class from all
  document.querySelectorAll('.tab-button').forEach(btn => {
    btn.classList.remove('w3-lime', 'w3-hover-lime', 'active');
    btn.classList.add('w3-green');
  });

  // Add active classes to clicked button
  button.classList.remove('w3-green');
  button.classList.add('w3-lime', 'w3-hover-lime', 'active');
}
