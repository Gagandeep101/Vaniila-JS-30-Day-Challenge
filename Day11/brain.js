const passed =[];
const secret_code="gagan"
window.addEventListener('keyup',(e)=>{
    console.log(e.key);
    passed.push(e.key);
    passed.splice(-secret_code.length-1,passed.length-secret_code.length);
    if(passed.join('').includes(secret_code)){
        console.log("Ding Ding");
        cornify_add();
    }
    console.log(passed);
});