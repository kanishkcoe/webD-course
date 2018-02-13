var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var reset = document.querySelector("#reset");
var p1Display = document.querySelector("#p1score");
var p2Display = document.querySelector("#p2score");
var max = document.querySelector("#max");
var numinput = document.querySelector("input");
var maxscore = 5;
var p1score = 0;
var p2score = 0;
var result;
var gameOver = false;

numinput.addEventListener("change", function(){
  restart();
  maxscore = Number(numinput.value);
  max.textContent = maxscore;
});

function restart()
{
  p1score = 0;
  p1Display.textContent = p1score;
  p1Display.classList.remove("won");
  p2score = 0;
  p2Display.textContent = p2score;
  p2Display.classList.remove("won");
  gameOver = false;
}

p1.addEventListener("click", function() {
  if (!gameOver)
  {
    p1score++;
    if (p1score === maxscore)
    {
      p1Display.classList.toggle("won");
      gameOver = true;
    }
    p1Display.textContent = p1score;
  }
});


p2.addEventListener("click", function() {
  if(!gameOver)
  {
    p2score++;
    if (p2score === maxscore)
    {
      p2Display.classList.toggle("won");
      gameOver = true;
    }
    p2Display.textContent = p2score;
  }
});


reset.addEventListener("click", function() {
  restart();
});
