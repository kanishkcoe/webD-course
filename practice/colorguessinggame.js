//html components
var square = document.querySelectorAll(".square");
var rgbcode = document.querySelector(".rgb");
var message = document.querySelector("#message");
var h1 = document.getElementsByTagName("h1");
var reseter = document.querySelector("#reseter");
var easybtn = document.querySelector("#easybtn");
var medbtn = document.querySelector("#medbtn");
var hdbtn = document.querySelector("#hdbtn");

var size = 6;
var colors = generatecolors(size);
var pickedcolor = pickcolor();

easybtn.addEventListener("click", function(){
  easybtn.classList.add("selected");
  medbtn.classList.remove("selected");
  hdbtn.classList.remove("selected");
  size = 3;
  coloringsquare(size);
});

medbtn.addEventListener("click", function(){
  easybtn.classList.remove("selected");
  medbtn.classList.add("selected");
  hdbtn.classList.remove("selected");
  size = 6;
  coloringsquare(size);
});

hdbtn.addEventListener("click", function(){
  easybtn.classList.remove("selected");
  medbtn.classList.remove("selected");
  hdbtn.classList.add("selected");
  size = 9;
  coloringsquare(size);
});

function coloringsquare(size)
{
  colors = generatecolors(size);
  pickedcolor = pickcolor();
  rgbcode.textContent = pickedcolor;
  pickedcolor = pickedcolor + " none repeat scroll 0% 0%";
  for(var i = 0; i < square.length; i++)
  {
    if(colors[i])
    {
      square[i].style.display = "block";
      square[i].style.background = colors[i];
    }
    else
    {
      square[i].style.display = "none";
    }
  }
}

rgbcode.textContent = pickedcolor;
pickedcolor = pickedcolor + " none repeat scroll 0% 0%";

reseter.addEventListener("mouseover", function(){
  reseter.classList.add("dark");
});
easybtn.addEventListener("mouseover", function(){
  this.classList.add("dark");
});
medbtn.addEventListener("mouseover", function(){
  this.classList.add("dark");
});
hdbtn.addEventListener("mouseover", function(){
  this.classList.add("dark");
});

reseter.addEventListener("mouseout", function(){
  reseter.classList.remove("dark");
});
easybtn.addEventListener("mouseout", function(){
  this.classList.remove("dark");
});
medbtn.addEventListener("mouseout", function(){
  this.classList.remove("dark");
});
hdbtn.addEventListener("mouseout", function(){
  this.classList.remove("dark");
});

reseter.addEventListener("click", function(){
  reset();
});

for(var i = 0; i < square.length; i++)
{
  //gives random color to the squares
  square[i].style.background = colors[i];

  //add event listeners and compare with picked color
  square[i].addEventListener("click", function() {
    //for correct answer
    var currentcolor = this.style.background;

    if(currentcolor === pickedcolor)
    {
      message.textContent = "correct!";
      changecolor(pickedcolor);
      reseter.textContent = "play again?";
    }
    else
    {
      this.style.background = "#232323";
      message.textContent = "incorrect, try again";
    }
  });
}

function reset()
{
  //reset the color array
  h1[0].style.background = "steelblue";
  reseter.textContent = "new game";
  message.textContent = "";
  colors = generatecolors(size);
  //reset picked color
  pickedcolor = pickcolor();
  rgbcode.textContent = pickedcolor;
  pickedcolor = pickedcolor + " none repeat scroll 0% 0%";
  //change the squares accordingly
  for(var i = 0; i < square.length; i++)
  {
    //gives random color to the squares
    square[i].style.background = colors[i];
  }
}

//changes color
function changecolor(color)
{
  for(var i = 0; i < square.length; i++)
  {
    square[i].style.background = color;
  }
  h1[0].style.background = color;
}

//colorpicking function
function pickcolor()
{
  var index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

function generatecolors(size)
{
  var color = [];

  for(var i = 0; i < size; i++)
  {
    code = randomColor();
    color.push(code);
  }
  return color;
}

function randomColor()
{
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var code = "rgb(" + r + ", " + g + ", " + b + ")";
  return code;
}
