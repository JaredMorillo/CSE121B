/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Jared Morillo';
const currentYear = new Date().getFullYear();
const profilePicture = 'images/JG_After.jpg';


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');



/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);





/* Step 5 - Array */
const favFoods = ['Pizza', 'Sushi', 'Chocolate', 'Ice Cream'];
foodElement.innerHTML = favFoods.join('<br>');

const newFavoriteFood = 'Burgers';
favFoods.push(newFavoriteFood);
foodElement.innerHTML += `<br>${newFavoriteFood}`;

favFoods.shift();
foodElement.innerHTML = favFoods.join('<br>');

favFoods.pop();
foodElement.innerHTML = favFoods.join('<br>');





