var numlist = [1, 2, 3, 4];
var alphalist = ['a', 'b', 'c'];

function printReverse(list)
{
  for(var i = 0; i < list.length; i++)
  {
    console.log(list[list.length - 1 - i]);
  }
}

function sumArray(list)
{
  var sum = 0;

  for(var i = 0; i < list.length; i++)
  {
    sum += list[i];
  }

  console.log("Sum = " + sum);
}

function max(list)
{
  var max = list[0]
  for(var i = 0; i < list.length; i++)
  {
    if(list[i] >= max)
    {
      max = list[i];
    }
  }
  console.log("Max element = " + max);
}

printReverse(numlist);
printReverse(alphalist);

sumArray(numlist);

 max(numlist);
