//check off the task when clicked
$("ul").on("click", "li", function(){
  //changes to black if gray
  $(this).toggleClass("completed");
});

//click X to delete TO DO
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

//input of new to-do
$("input[type='text']").keypress(function(event){
  if(event.which === 13)
  {
    //grabbing input
    var todotext = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class=\"fas fa-trash-alt\"></i></span> " + todotext + "</li>");
  }
});

//plus button toggle
$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
});
