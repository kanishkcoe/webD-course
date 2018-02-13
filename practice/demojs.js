var age = prompt("Enter your age:");

if(age < 0)
{
  console.log("Your age is negative? AMAZING!!");
}
else if(age == 21)
{
  console.log("Happy 21st birthday!");
}
else if(age % 2 != 0)
{
  console.log("Your age is odd.");
}
else
{
    console.log("Nothing special here!");
}
