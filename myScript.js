class circle {
    raduius;
    area;
    perimeter;
    color;

    constructor(raduius, area, perimeter, color) {
        this.raduius = raduius
        this.area = area



    setRadius(radius) {
        return this.raduius = radius
    }

    getRadius(radius) {
        this.raduius = radius
    }

    setArea(area) {
        area = this.raduius * this.raduius * Math.PI
        return this.area = area
    }

    getRadius(area) {
        return this.area
    }

    setPerimeter(perimeter) {
        perimeter = 2 * this.raduius * Math.PI
return this.perimeter = perimeter}
getPerimeter(perimeter){
        return this.perimeter
    }
}
let hinhTron = new circle(5)
console.log(hinhTron.getPerimeter())
console.log(circle)