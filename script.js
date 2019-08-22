const canvas=document.querySelector("canvas")
let c=canvas.getContext("2d");
canvas.height=innerHeight;
canvas.width=window.innerWidth;
window.addEventListener("resize",()=>{
    canvas.height=innerHeight;
canvas.width=window.innerWidth;
    init()
})


function init(){
    c.clearRect(0,0,innerWidth,innerHeight)
    c.moveTo(0,canvas.height/2);
    for (let i=0;i<canvas.width;i++){
        c.lineTo(i,i);
    }
    c.stroke()
}
init()