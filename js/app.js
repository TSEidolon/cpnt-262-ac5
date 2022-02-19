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
  string = string.charAt(0).toUpperCase(0) +string.slice(1).toLowerCase(); // Capitalizes the first letter at index[0] and add the rest (index[1] beyond) as a lowercase
  return string;
}


const submitHandler = (event) => {
  event.preventDefault ();
  const number = form.number.value; // saves the value from the form
  console.log (number);

  let output = 'This is your mixed food: ';
  let i = 0;
  while (i < number) {
    foodList = food [Math.floor(Math.random()* food.length)];
    output += ` ${capitalize(foodList)},`;
    i++; // will increment i + 1 pero while loop ran.

  }


responseElement.textContent = output;

}

form.addEventListener ('submit', submitHandler);


