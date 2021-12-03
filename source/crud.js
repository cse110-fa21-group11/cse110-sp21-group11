window.addEventListener("DOMContentLoaded", init);

//NOTE: This function runs on page load when the home page is loaded AND when crud.html is loaded
function init() {
  //If index.html is current source bind load to add recipe button
  if (document.getElementById("addRecipeBtn"))
    document
      .getElementById("addRecipeBtn")
      .addEventListener("click", function () {
        redirectToCRUD();
      });

  //Super janky way of detecting the page source has been changed to crud.html
  if (
    !document.getElementById("addRecipeBtn") &&
    document.getElementById("add")
  )
    crudPageInit();

  /**  document.getElementById("cancel").addEventListener("click", cancelRecipe);
  document.getElementById("edit").addEventListener("click", updateRecipe);
  document
    .getElementById("cancelEdit")
    .addEventListener("click", cancelEditRecipe); */
}

//Changes page source to crud.html; reruns init function because of how js works.
function redirectToCRUD() {
  window.location.href = "crud.html";
}

//Change page source to editRecipe.html
function redirectToEdit(){
  window.location.href = "editRecipe.html";
}

//Runs once crud.html has been loaded
function crudPageInit() {
  document.getElementById("add").addEventListener("click", function () {
    addRecipe();
  });
}

//Runs once editRecipe.html has been loaded
function editPageInit() {
  // add event listener
  // getRecipe(i) ==> how to know what i is?
}

//Runs once editRecipe.html has been loaded
function editPageInit(){
  // use the edit recipe button as the element
}

//Take user input and create a recipe and add it to localstorage
function addRecipe() {
  //Get user input values from page
  let recipeImage = document.getElementById("uploadFile").value;
  let recipeTitle = document.getElementById("recipeTitle").value;
  let recipeAuthor = document.getElementById("name").value;
  //let recipeServings = document.getElementById("recipeServingsField").value;
  let recipeTime = document.getElementById("time").value;
  let recipeTags = document.getElementById("tag").value;
  let recipeIngredients = document.getElementById("ingredients").value;
  let recipeInstructions = document.getElementById("instructions").value;

  //Create object to hold data
  let newRecipe = {
    title: recipeTitle,
    author: recipeAuthor,
    tags: recipeTags,
    readyInMinutes: recipeTime,
    image:
      "https://images.freeimages.com/images/large-previews/7f5/plate-1329634.jpg",
    extendedIngredients: [recipeIngredients],
    directions: recipeInstructions,
    isLocal: true, //Designates card created as being a local recipe, not one fetched from spoonacular
  };

  //Create a new recipe card, pass the data into it
  let newRecipeCard = document.createElement("recipe-card");
  newRecipeCard.data = newRecipe;

  //Get array of local recipes from localstorage
  let localRecipes = JSON.parse(localStorage.getItem("localRecipes"));

  //Add the newly created recipe card to the retrieved array
  localRecipes.push(JSON.stringify(newRecipeCard));

  //Push the updated array back to localStorage
  localStorage.setItem("localRecipes", JSON.stringify(localRecipes));

  alert("successfully added recipe!");
  redirectToIndex();
}

function redirectToIndex() {
  window.location.href = "index.html";
}

function getRecipe(i){
  // get recipe info from local storage
  let recipeTitle = JSON.parse(localStorage[i].getItem('localRecipes'[0]));
  let recipeAuthor = JSON.parse(localStorage[i].getItem('localRecipes'[1]));
  let recipeTag = JSON.parse(localStorage[i].getItem('localRecipes'[2]));
  let recipeTime = JSON.parse(localStorage[i].getItem('localRecipes'[3]));
  let recipeImage = JSON.parse(localStorage[i].getItem('localRecipes'[4]));
  let recipeIngredients = JSON.parse(localStorage[i].getItem('localRecipes'[5]));
  let recipeDirections = JSON.parse(localStorage[i].getItem('localRecipes'[6]));

  //Load the text inputs with recipe info
  document.getElementById('editUploadFile').value = recipeImage;
  document.getElementById('editName').value = recipeAuthor;
  document.getElementById('editRecipeTitle').value = recipeTitle;
  document.getElementById('editIngredients').value = recipeIngredients;
  document.getElementById('editTime').value = recipeTime;
  document.getElementById('editTag').value = recipeTag;
  document.getElementById('editInstructions').value = recipeDirections;
}
/** 
function cancelRecipe() {}

function updateRecipe() {}

function cancelEditRecipe() {}

*/
