const form = document.querySelector ('form');

const responseElement = document.querySelector ('.response');

const food = ["pizza",
"fries",
"spaghetti",
"burger",
"taco",
"rice",
"steak",
"salad",
"cookies",
"curry",
"jalebi",
"soup",
"salmon",
"spring roll",
"shawarma",
"bread",
"shrimp",
"noodles",
"roti"];

const submitHandler = (event) => {
  event.preventDefault ();
  const number = form.number.value;
  console.log (number);

  let output = 'You mixed this: ';
  let i = 0;
  while (i < number) {
    output += ` ${food [Math.floor(Math.random()* food.length)]},`;
    i++;

  }
  
  responseElement.textContent = output;

}

form.addEventListener ('submit', submitHandler);


