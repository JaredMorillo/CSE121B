/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
const aboutMe = {};
// Step 2: Inside of the object, add a property named name with a value of your name as a string
aboutMe.name = "Jared Morillo";
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
aboutMe.photo = "images/JG_After.jpg";
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
aboutMe.favoriteFoods = ["Pizza", "Tacos", "Sushi"];
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
aboutMe.hobbies = ["Reading", "Traveling", "Playing sports"];
// Step 6: Add another property named placesLived with a value of an empty array
aboutMe.placesLived = [];
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
aboutMe.placesLived.push({ place: "", length: "" });
// Step 8: For each property, add appropriate values as strings
aboutMe.placesLived[0].place = "Galapagos";
aboutMe.placesLived[0].length = "10 years";
// Step 9: Add additional objects with the same properties for each place you've lived
aboutMe.placesLived.push({ place: "Guayaquil", length: "10 years" });
aboutMe.placesLived.push({ place: "Lima", length: "2 years" });

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.getElementById("name").innerHTML = aboutMe.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").setAttribute("src", aboutMe.photo);
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").setAttribute("alt", aboutMe.name);
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
let favoriteFoodsHtml = "";
aboutMe.favoriteFoods.forEach(function(food) {
  favoriteFoodsHtml += "<li>" + food + "</li>";
});
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
document.getElementById("favorite-foods").innerHTML = favoriteFoodsHtml;
// Step 6: Repeat Step 4 for each hobby in the hobbies property
let hobbiesHtml = "";
aboutMe.hobbies.forEach(function(hobby) {
  hobbiesHtml += "<li>" + hobby + "</li>";
});
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
document.getElementById("hobbies").innerHTML = hobbiesHtml;
// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
