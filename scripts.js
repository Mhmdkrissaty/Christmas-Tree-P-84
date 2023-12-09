var previousX, previousY;

// get the inputs
const colorInputs = [].slice.call(document.querySelectorAll('.tree-buttons input'));

// listen for changes
colorInputs.forEach(input => input.addEventListener('change', handleUpdate));
colorInputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

// update variables
function handleUpdate(e) {
  document.documentElement.style.setProperty(`--${this.className}`, this.value);
}

document.onmousemove = updatePosition;

function updatePosition(e) {
  var x = e.clientX + "px";
  var y = e.clientY - 775 + "px";
  var rotation = "rotate(" + Math.atan2(previousY - e.clientY, previousX - e.clientX) / (Math.PI/180) + "deg)";
  document.documentElement.style.setProperty("--transform", "translate(" + x + ", " + y + ") " + rotation);
  previousX = e.clientX;
  previousY = e.clientY;
}

const themeButtons = [].slice.call(document.querySelectorAll('.theme-buttons input'));
themeButtons.forEach(button => button.addEventListener('click', setTheme));

function setTheme(e) {
  var theme = getTheme(this.className);
  document.documentElement.style.setProperty("--light-color", theme[0]);
  document.documentElement.style.setProperty("--ball-color", theme[1]);
  document.documentElement.style.setProperty("--sleigh-color", theme[2]);
}

function getTheme(className) {
  if (className == "Christmas") {
    return ["#ff0000", "#0000ff", "#ff0000"];
  }
  else if (className == "Digitpaint") {
    return ["#551A8B", "#8b1a89", "#2e0e4b"];
  }
  else if (className == "Random") {
    return [getRandomColor(), getRandomColor(), getRandomColor()];
  }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}