const inputs=document.querySelectorAll("input");
function handlechange() {
    const data=this.dataset.sizeing || " ";
    document.documentElement.style.setProperty(`--${this.name}`,this.value+data);
    console.log(this.value);
}
inputs.forEach(inputs=>{
    inputs.addEventListener("change", handlechange);
    inputs.addEventListener("mousemove", handlechange);
});