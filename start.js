

// Get the canvas element
var canvas = document.getElementById('starCanvas');
var ctx = canvas.getContext("2d");

// Set up the FPS (frames per second)
var FPS = 60;

// Star object to hold properties
var stars = [];

// Star class constructor
function Star() {
    this.x = Math.random() * canvas.width;   // Random x position
    this.y = Math.random() * canvas.height;  // Random y position
    this.size = Math.random() * 2 + 1;       // Random size between 1 and 3
    this.vx = Math.random() * 0.5 - 0.25;    // Random velocity on x-axis
    this.vy = Math.random() * 0.5 - 0.25;    // Random velocity on y-axis
}

// Generate stars
function createStars(numStars) {
    for (var i = 0; i < numStars; i++) {
        stars.push(new Star());
    }
}

// Draw the stars
function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear the canvas

    ctx.fillStyle = "white";  // Set color for the stars
    ctx.strokeStyle = "white";  // Outline color (for twinkle effect)
    ctx.lineWidth = 0.5;  // Line width for twinkle effect

    for (var i = 0; i < stars.length; i++) {
        var star = stars[i];
        
        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Optional twinkle effect: change the size a little bit for a "twinkle" effect
        star.size = Math.random() * 2 + 1;
    }
}

// Update star positions
function updateStars() {
    for (var i = 0; i < stars.length; i++) {
        var star = stars[i];

        // Move star by its velocity
        star.x += star.vx;
        star.y += star.vy;

        // Wrap around screen edges
        if (star.x < 0 || star.x > canvas.width) star.vx = -star.vx;
        if (star.y < 0 || star.y > canvas.height) star.vy = -star.vy;
    }
}

// The update function runs at a fixed FPS to animate the stars
function update() {
    updateStars();
    drawStars();
}

// Set up the canvas size and start the animation loop
function startStarAnimation() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    createStars(200);  // Create 200 stars

    setInterval(update, 1000 / FPS);  // Call update every frame
}

// Run the star field animation
startStarAnimation();