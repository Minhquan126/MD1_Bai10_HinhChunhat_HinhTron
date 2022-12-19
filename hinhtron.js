let c = document.getElementById('mycanvas')
let ctx = c.getContext('2d')
ctx.beginPath()
ctx.fillStyle = 'red'
ctx.arc(20,25,10,0,2*Math.PI)
ctx.stroke()