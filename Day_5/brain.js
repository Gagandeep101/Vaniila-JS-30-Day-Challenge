const panel =document.querySelectorAll(".panel");
panel.forEach(panelSelector=>panelSelector.addEventListener("click",function() {
    panelSelector.classList.toggle("panel_transition");
}));
panel.forEach(panelSelector=>panelSelector.addEventListener("transitionend",function(e) {
    panelSelector.classList.toggle("open_active");
}));