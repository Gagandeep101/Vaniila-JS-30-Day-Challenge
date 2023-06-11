const checkboxes = document.querySelectorAll('.item input[type="checkbox"]');
let lastChecked;
function handleCheck() {
    let inBetween = false;
    lastChecked = this;
}
checkboxes.forEach(checkbox => { checkbox.addEventListener("click", handleCheck); });