import * as dat from "dat.gui";
const canvas=document.querySelector("canvas")
const gui=new dat.GUI()
let c=canvas.getContext("2d");
canvas.height=innerHeight;
canvas.width=window.innerWidth;
window.addEventListener("resize",()=>{
    canvas.height=innerHeight;
canvas.width=window.innerWidth;
    init()
})
const wave={
    y:canvas.height/2,
    amplitude:100,
    wavelength:0.01,
    frequency:0.01
}
gui.add(wave,"y",0,canvas.height)
gui.add(wave,"wavelength",-0.001,0.1)
gui.add(wave,"amplitude",-300,300)
gui.add(wave,"frequency",-0.001,1)

function init(){
    c.clearRect(0,0,innerWidth,innerHeight)
    c.moveTo(0,canvas.height/2);
    for (let i=-5;i<canvas.width;i++){
        c.lineTo(i,(wave.y)+Math.sin(i*wave.wavelength)*wave.amplitude);
    }
    c.stroke()
}
let increment=wave.frequency
function update(){
    requestAnimationFrame(update)
    c.fillStyle="rgba(0,0,0,0.05)"
    c.fillRect(0,0,innerWidth,innerHeight)
    c.beginPath()
    c.moveTo(0,canvas.height/2);
    for (let i=-5;i<canvas.width;i++){

        c.lineTo(i,(wave.y)+Math.sin((i-5)*wave.wavelength+increment)*wave.amplitude);
    }
    
    c.fillStyle=c.strokeStyle=`hsl(${Math.abs(Math.sin(increment)*255)},50%,50%)`
    c.stroke()
    increment+=wave.frequency
    
}

update()
init()