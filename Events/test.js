function drawShape() {
            
    // Get the canvas element using the DOM
    var canvas = document.getElementById('myCanvas');

    // Make sure we don't execute when canvas isn't supported
    if (canvas.getContext) {
       
       // use getContext to use the canvas for drawing
       var ctx = canvas.getContext('2d');

       // Draw shapes
       ctx.fillRect(25,25,100,100);
       ctx.clearRect(45,45,60,60);
       ctx.strokeRect(50,50,50,50);

       var square = canvas.getContext('2d');
       square.fillRect(200,200,20,20)

    } else {
       alert('You need Safari or Firefox 1.5+ to see this demo.');
    }
 }


document.addEventListener('keydown', function(ninja) {
   let key = ninja.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
});

switch (ninja.key) {
   case "ArrowLeft":
       // Left pressed
       break;
   case "ArrowRight":
       // Right pressed
       break;
   case "ArrowUp":
       // Up pressed
       break;
   case "ArrowDown":
       // Down pressed
       break;
}

