var number = -10;
console.log("Numbers from -10 to 19");

while(number < 20)
{
  console.log("count : " + number);
  number++;
}

number = 10;

console.log("All even numbers from 10 to 40");

while (number <= 40)
{
  console.log(number);
  number += 2;
}

number = 300;

console.log("All odd numbers from 300 to 333");

while (number <= 333)
{
  if(number % 2 != 0)
  {
    console.log(number);
  }
  number++;
}

number = 5;

console.log("All numbers divisible by 5 and 3 from 5 to 50");

while (number <= 50)
{
  if(number % 5 == 0 && number % 3 == 0)
  {
    console.log(number);
  }
  number++;
}
