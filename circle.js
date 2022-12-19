class circle{
    radius;
    area;
    perimeter;
    constructor(radius) {
        this.radius = radius;
    }
    setRadius(radius){
        this.radius = radius
    }
    getRadius(){
        return this.radius
    }
    setArea(){
        this.area = this.radius*2*Math.PI
    }
    getArea(){
        return this.area
    }
    setPerimeter(){
        this.perimeter = this.radius*this.radius*Math.PI
    }
    getPerimeter(){
        return this.perimeter
    }
}
let hinhTron = new circle()
hinhTron.setRadius(5)
hinhTron.setArea();
hinhTron.setPerimeter();

console.log('dien tich la +++++++++',hinhTron.getArea())
console.log('chu vi la ',hinhTron.getPerimeter())