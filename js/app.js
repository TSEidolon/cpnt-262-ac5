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


const capitalize = (string) => {
  string = string.charAt(0).toUpperCase(0) +string.slice(1).toLowerCase();
  return string;
}


const submitHandler = (event) => {
  event.preventDefault ();
  const number = form.number.value;
  console.log (number);

  let output = 'This is your mixed food: ';
  let i = 0;
  while (i < number) {
    foodList = food [Math.floor(Math.random()* food.length)];
    output += ` ${capitalize(foodList)},`;
    i++;

  }


responseElement.textContent = output;

}

form.addEventListener ('submit', submitHandler);


