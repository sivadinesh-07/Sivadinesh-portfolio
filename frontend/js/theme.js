window.addEventListener("load",()=>{

    const loader =
    document.querySelector(".loader");

    loader.style.display="none";

});
const themeBtn =
document.getElementById("themeBtn");

themeBtn.onclick=()=>{

document.body.classList.toggle("light");
if(document.body.classList.contains("light")){
    themeBtn.innerText="☀️";
} else {
    themeBtn.innerText="🌙";
}

}