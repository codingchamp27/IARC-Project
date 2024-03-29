let text=document.getElementById("text");
let Image1=document.getElementById("Image1");
let Image2=document.getElementById("Image2");
let Image3=document.getElementById("Image3");
let Image4=document.getElementById("Image4");
let Image5=document.getElementById("Image5");
let scrollDistance = 150;

window.addEventListener('scroll',()=>{
    let value=window.scrollY;
    text.style.marginTop=(value*2.5) + 'px';
    Image1.style.top=(value*(-1.5))+'px';
    Image1.style.right=(value*(-1.5))+'px';
    Image3.style.left=(value*(-1.5))+'px';
    Image4.style.right=(value*(-1.5))+'px';
    Image2.style.right=(value*(-1.5))+'px';
    if (value >= scrollDistance) {
        text.style.display = 'none';
    } else {
        text.style.display = 'block'; 
    }
});