const btn=document.querySelector("button");
const b=document.querySelector("body");
const head=document.querySelector("h1");
let i=1;
const head2=document.createElement("h2");
b.appendChild(head2);
btn.addEventListener("click",() => {
    const newColor=`rgb( ${ranColor()}, ${ranColor()}, ${ranColor()} )`;
    document.querySelector("body").style.backgroundColor=newColor;
    head.innerText =newColor;
    head2.innerText =`Counter : ${i}`;
    i+=1;
})
function ranColor(){
    return Math.floor(Math.random()*255);
}