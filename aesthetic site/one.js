document.addEventListener("mousemove", function(event) {
  var mouseFollower = document.querySelector(".mouse-follower");
  var mouseX = event.pageX;
  var mouseY = event.pageY;

  // Calculate the distance to move
  var deltaX = mouseX - parseInt(mouseFollower.style.left || 0, 10);
  var deltaY = mouseY - parseInt(mouseFollower.style.top || 0, 10);

  // Update the position
  mouseFollower.style.left = mouseX - 25 + "px";
  mouseFollower.style.top = mouseY - 25 + "px";

  // Smooth movement
  requestAnimationFrame(function() {
    mouseFollower.style.transform = "translate(" + deltaX + "px, " + deltaY + "px)";
  });
});