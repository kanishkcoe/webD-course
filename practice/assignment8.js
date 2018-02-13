var button = document.querySelector("button");
var body = document.querySelector("body");
// var iswhite = true;
//
// button.addEventListener("click", function(){
//   if(iswhite)
//   {
//     body.style.background = "blue";
//
//   }
//   else
//   {
//     body.style.background = "white";
//
//   }
//   iswhite = !iswhite;
// });

button.addEventListener("click", function(){
  body.classList.toggle("blue");
});
