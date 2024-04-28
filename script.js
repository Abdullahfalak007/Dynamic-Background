document.body.addEventListener("mousemove", function (event) {
  const x = event.clientX; // Get the horizontal coordinate
  const y = event.clientY; // Get the vertical coordinate
  const width = window.innerWidth; // Width of the window
  const height = window.innerHeight; // Height of the window

  const red = Math.round((x / width) * 255); // Red increases with X
  const green = Math.round((y / height) * 255); // Green increases with Y
  const blue = 150; // Constant blue for a cool tone

  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});
