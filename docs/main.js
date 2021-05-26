// Set a variable for our button element.
const scrollToTopButton = document.getElementById('js-top');

// Let's set up a function that shows our scroll-to-top button if we scroll beyond the height of the initial window.
const scrollFunc = () => {
  // Get the current scroll value
  let y = window.scrollY;
  
  // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
  if (y > 0) {
    scrollToTopButton.className = "top-link show";
  } else {
    scrollToTopButton.className = "top-link hide";
  }
};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
  // Let's set a variable for the number of pixels we are from the top of the document.
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  
  // If that number is greater than 0, we'll scroll back to 0, or the top of the document.
  // We'll also animate that scroll with requestAnimationFrame:
  // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    // ScrollTo takes an x and a y coordinate.
    // Increase the '10' value to get a smoother/slower scroll!
    window.scrollTo(0, c - c / 10);
  }
};

// When the button is clicked, run our ScrolltoTop function above!
scrollToTopButton.onclick = function(e) {
  e.preventDefault();
  scrollToTop();
}





Resources


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

const getRandomNumber = () => {
    return Math.floor(Math.random() * 1700);
};

setInterval(() => {
    const maxRadius = 7;
    const minRadius = 1;
    x = Math.random() * canvas.width;
    y = Math.random() * canvas.height;
    r = minRadius + (Math.random() * (maxRadius - minRadius));
    startAngle = 0;
    endAngle = 2 * Math.PI
   // fillColor = `rgb( ${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`
    fillColor = `rgb( ${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`
    const c1 = new Circle(x, y, r, startAngle, endAngle, fillColor);
    c1.draw()
},100);

canvas.addEventListener('mousemove',function myFunction(e) {
    function radius() {
        const r = Math.floor(Math.random() * 10);
        return r
    }
    let x = e.clientX;
    let y = e.clientY;
    const c1 = new Circle(x, y, radius(), 0, 2 * Math.PI)
    c1.draw()
  })