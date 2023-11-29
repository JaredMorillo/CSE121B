/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples'); // Reference to the HTML div element
let templeList = []; // Global empty array to store temple data

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
      const article = document.createElement('article'); // Create an <article> element
  
      const h3 = document.createElement('h3'); // Create an <h3> element
      h3.textContent = temple.templeName; // Add temple name to the <h3> element
  
      const img = document.createElement('img'); // Create an <img> element
      img.src = temple.imageUrl; // Add temple image URL to the src attribute
      img.alt = temple.location; // Add temple location to the alt attribute
  
      article.appendChild(h3); // Append <h3> to <article>
      article.appendChild(img); // Append <img> to <article>
  
      templesElement.appendChild(article); // Append <article> to global templesElement
    });
  };
  


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    try {
      const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json(); // Convert response to JSON
      templeList = data; // Assign fetched data to templeList
      displayTemples(templeList); // Display temples after fetching
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

/* reset Function */
const reset = () => {
    templesElement.innerHTML = ''; // Clear all <article> elements
  };

/* sortBy Function */
const sortBy = (temples) => {
    reset(); // Clear displayed list of temples
    const filter = document.querySelector('#sortBy').value; // Get selected value
  
    switch (filter) {
      case 'utah':
        displayTemples(temples.filter(temple => temple.location.toLowerCase().includes('utah')));
        break;
      case 'nonutah':
        displayTemples(temples.filter(temple => !temple.location.toLowerCase().includes('utah')));
        break;
      case 'older':
        displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
        break;
      case 'all':
      default:
        displayTemples(temples);
        break;
    }
  };
 
  document.querySelector('#sortBy').addEventListener('change', () => {
    sortBy(templeList);
  });
  


getTemples();

/* Event Listener */
