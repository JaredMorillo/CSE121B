let searchInput, recipeList, recipes;

    function searchRecipes() {
      const searchText = searchInput.value.toLowerCase();
      const filteredRecipes = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(searchText) ||
        recipe.ingredients.some(ingredient =>
          ingredient.name.toLowerCase().includes(searchText)
        )
      );

      displayRecipes(filteredRecipes);
    }

    function displayRecipes(recipes) {
      recipeList.innerHTML = '';

      if (recipes.length === 0) {
        recipeList.innerHTML = '<p>No recipes found</p>';
        return;
      }

      recipes.forEach(recipe => {
        const recipeItem = document.createElement('div');
        recipeItem.classList.add('recipe-item');

        const recipeName = document.createElement('h2');
        recipeName.textContent = recipe.name;
        recipeItem.appendChild(recipeName);

        const ingredientsList = document.createElement('ul');
        recipe.ingredients.forEach(ingredient => {
          const ingredientItem = document.createElement('li');
          ingredientItem.textContent = `${ingredient.quantity} ${ingredient.name}`;
          ingredientsList.appendChild(ingredientItem);
        });
        recipeItem.appendChild(ingredientsList);

        const recipeImage = document.createElement('img');
        recipeImage.src = recipe.imageURL;
        recipeItem.appendChild(recipeImage);

        const recipeLink = document.createElement('a');
        recipeLink.href = recipe.originalURL;
        recipeLink.textContent = 'View Recipe';
        recipeLink.target = '_blank';
        recipeItem.appendChild(recipeLink);

        recipeList.appendChild(recipeItem);
      });
    }

    document.addEventListener('DOMContentLoaded', () => {
      searchInput = document.getElementById('searchInput');
      recipeList = document.getElementById('recipeList');
      const searchButton = document.getElementById('searchButton');

      searchButton.addEventListener('click', searchRecipes);

      fetch('data/recipes.json')
        .then(response => response.json())
        .then(data => {
          recipes = data;
          displayRecipes(recipes);
        })
        .catch(error => console.error('Error fetching data:', error));
    });