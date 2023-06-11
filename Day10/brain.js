const checkboxes = document.querySelectorAll('.item input[type="checkbox"]');
let lastChecked;

checkboxes.forEach(checkbox => { checkbox.addEventListener("click", handleCheck); });