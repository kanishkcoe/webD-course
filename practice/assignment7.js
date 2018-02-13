var movies =
[
  {
    title : "Justice league",
    rating : 3.5,
    watched : true
  },
  {
    title : "Blade runner",
    rating : 4.5,
    watched : false
  },
  {
    title : "The big sick",
    rating : 2.5,
    watched : true
  }
];

function show(list)
{
    list.forEach(function(item) {
      if(item.watched)
      {
          console.log("You have watched " + item.title + " - ratings : " + item.rating);
      }
      else
      {
        console.log("You have not watched " + item.title + " - ratings : " + item.rating);
      }

    });
}


show(movies);
