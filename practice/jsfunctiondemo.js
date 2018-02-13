function isEven(num)
{
  if(typeof num === "string")
  {
    console.log("It's not a number!");
    return false;
  }
  else if(num % 2 === 0)
  {
    console.log("It's even.");
    return true;
  }
  else
  {
    console.log("It's odd.");
    return false;
  }
}

function factorial(num)
{
    if(num === 1)
    {
      return 1;
    }
    return num * factorial(num - 1);
}

function kababToSnake(str)
{
  var newstr = str.replace(/-/g, '_');
  return newstr;
}

isEven(5);
isEven(50);
isEven(504);
isEven(505);
isEven(532);
isEven("kanishk");
console.log("factorial of 5 is " + factorial(5));

console.log("kanishk-debnath is in kabab format and " + kababToSnake("kanishk-debnath") + " is in snake format.");
