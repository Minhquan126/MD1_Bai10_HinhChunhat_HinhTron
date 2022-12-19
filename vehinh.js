
class HinhChuNhat{
    x;
    y;
    withd;
    heigh;

    constructor(x, y, withd, heigh) {
        this.x = x;
        this.y = y;
        this.withd = withd;
        this.heigh = heigh;
    }

   drawRect(ctx){
        ctx.beginPath()
        ctx.fillStyle = 'red'
       ctx.fillRect(this.x,this.y,this.withd,this.heigh)
       ctx.closePath()
   }
}
class HinhTron{
    x;
    y;
    radius;

    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
drawCircle(a){
        a.beginPath()
    a.fillStyle = 'red'
    a.arc(this.x,this.y,this.radius,0,2*Math.PI)
    a.fill()
    a.stroke()
}

}
//HINH CHU NHAT
let x = document.getElementById('mycanvas')
let ctx = x.getContext('2d');
let h3 = new HinhChuNhat(650,0,150,50)
h3.drawRect(ctx)
let h1 = new HinhChuNhat(0,0,150,50)
h1.drawRect(ctx)
let h2 = new HinhChuNhat(325,0,150,50)
h2.drawRect(ctx)
let h4 = new HinhChuNhat(0,450,150,50)
h4.drawRect(ctx)
let h5 = new HinhChuNhat(325,450,150,50)
h5.drawRect(ctx)
let h6 = new HinhChuNhat(650,450,150,50)
h6.drawRect(ctx)
//HINH TRON
let y = document.getElementById('mycanvas')
a = y.getContext('2d')
let hinhTron1 = new HinhTron(75,75,25,0,2*Math.PI)
hinhTron1.drawCircle(a)
let hinhTron2 = new HinhTron(400,75,25,0,2*Math.PI)
hinhTron2.drawCircle(a)
let hinhTron3 = new HinhTron(725,75,25,0,2*Math.PI)
hinhTron3.drawCircle(a)
let hinhTron4 = new HinhTron(75,425,25,0,2*Math.PI)
hinhTron4.drawCircle(a)
let hinhTron5 = new HinhTron(400,425,25,0,2*Math.PI)
hinhTron5.drawCircle(a)
let hinhTron6 = new HinhTron(725,425,25,0,2*Math.PI)
hinhTron6.drawCircle(a)

