// Select all buttons with the class 'toggle-btn'
const toggleBtns = document.querySelectorAll('.toggle-btn');

// Loop through each button
toggleBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    // Find the nearest '.hide-half' and '.hide-full' content
    const parentDiv = btn.closest('.column');
    const hiddenListItems = parentDiv.querySelectorAll('.hide-half');
    const olElement = parentDiv.querySelector('.hide-full');

    // Toggle visibility of hidden list items
    hiddenListItems.forEach(item => {
      if (item.style.display === 'none' || item.style.display === '') {
        item.style.display = 'list-item'; // Show hidden items
      } else {
        item.style.display = 'none';      // Hide them again
      }
    });

    // Toggle visibility of the full <ol> element
    if (olElement.style.display === 'none' || olElement.style.display === '') {
      olElement.style.display = 'block';   // Show <ol>
      btn.textContent = 'Read Less';       // Change button text
    } else {
      olElement.style.display = 'none';    // Hide <ol>
      btn.textContent = 'Read More';       // Change button text
    }
  });
});
