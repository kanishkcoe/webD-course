var work;
var list = [];

//adds item to the list
function addtolist(item)
{
  list.push(item);
}

//shows the list
function viewlist()
{
  console.log("-------------------------");
  for(var i = 0; i < list.length; i++)
  {
    console.log((i+1) +  "." + list[i]);
  }
  console.log("-------------------------");
}

//deletes item from the list
function delteItem(index)
{
  list.splice(index - 1, 1);
  console.log("Deleted!");
}

do
{
  work = prompt("What would you like to do ?");
  if(work === "new")
  {
    var item = prompt("What would you like to add to the list?");
    addtolist(item);
  }
  else if(work === "list")
  {
    viewlist();
  }
  else if(work === "delete")
  {
    var index = prompt("Enter the index to remove from the TODO list:");
    delteItem(index);
  }
} while (work !== "quit");
