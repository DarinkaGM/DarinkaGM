const canvas = document.getElementById('artCanvas');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const context = canvas.getContext('2d');

class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor) {
        this.x = x
        this.y = y
        this.r = r
        this.startAngle = startAngle
        this.endAngle = endAngle
        this.fillColor = fillColor
    }
    draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.r, this.startAngle, this.endAngle, this.fillColor);
        context.fillStyle = this.fillColor;
        context.fill();
    }
}
var color = ["#618C80", "#F2BC79","#D9BBB0","#D96C75", "#3C918D" ];
const getRandomColor = () => {
    return color[Math.floor(Math.random() * color.length)];
};

setInterval(() => {
    const maxRadius = 3;
    const minRadius = 1;
    x = Math.random() * canvas.width;
    y = Math.random() * canvas.height;
    r = minRadius + (Math.random() * (maxRadius - minRadius));
    startAngle = 0;
    endAngle = 2 * Math.PI
    fillColor = `${getRandomColor()}`
    const c1 = new Circle(x, y, r, startAngle, endAngle, fillColor);
    c1.draw()
},20);

canvas.addEventListener('mousemove',function myFunction(e) {
    function radius() {
        const r = Math.floor(Math.random() * 3);
        return r
    }
    let x = e.clientX;
    let y = e.clientY;
    const c1 = new Circle(x, y, radius(), 1, 3 * Math.PI)
    c1.draw()
  })