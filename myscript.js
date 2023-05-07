// Get the goal diet form and add a listener for form submission

const goalForm = document.forms[0];
goalForm.addEventListener("submit", function(event)
{
    event.preventDefault(); // Prevent the form from submitting

    // Extract the input values

  const goalFruits = parseInt(goalForm.elements["goal-fruits"].value);
  const goalVegetables = parseInt(goalForm.elements["goal-vegetables"].value);
  const goalGrains = parseInt(goalForm.elements["goal-grains"].value);
  const goalProtein = parseInt(goalForm.elements["goal-protein"].value);
  const goalDairy = parseInt(goalForm.elements["goal-dairy"].value);

  // Store the goal diet in local Storage
  
  localStorage.setItem("goal-diet", JSON.stringify(
    {
        fruits: goalFruits,
        vegetables: goalVegetables,
        grains: goalGrains,
        protein: goalProtein,
        dairy: goalDairy
    }
    ));
});

// Get the tracked diet form and add a listener for form submission

const trackForm = document.forms[1];
trackForm.addEventListener("submit", function(event) 
{
    event.preventDefault();

// Extract the input values
const fruits = parseInt(trackForm.elements["fruits"].value);
const vegetables = parseInt(trackForm.elements["vegetables"].value);
const grains = parseInt(trackForm.elements["grains"].value);
const protein = parseInt(trackForm.elements["protein"].value);
const dairy = parseInt(trackForm.elements["dairy"].value);

// Check if any required field is empty

if (isNaN(fruits) || isNaN(vegetables) || isNaN(grains) || isNaN(protein) || isNaN(dairy))
{
    alert("Please enter the required information");
    return;
}

// Retrieve the goal diet from localStorage

const goalDiet = JSON.parse(localStorage.getItem("goal-diet"));

// Calculate the difference between the tracked diet and goal diet

const diffFruits = goalDiet.fruits - fruits;
const diffVegetables = goalDiet.vegetables - vegetables;
const diffGrains = goalDiet.grains - grains;
const diffProtein = goalDiet.protein - protein;
const diffDairy = goalDiet.dairy - dairy;

// Display suggestions for areas of improvement

const suggestions = document.getElementById("suggestions");
suggestions.innerHTML = ""; // Clear any previous suggestions


if (diffFruits > 0)
{
    suggestions.innerHTML += "<p>Try to eat " + diffFruits + " more servings of fruits.</p>";
}
else if (diffFruits < 0)
{
    suggestions.innerHTML += "<p>You have already exceeded your goal for fruits by " + (-diffFruits) + " servings. Consider reducing your intake to stay on track.</p>";
}
if (diffVegetables > 0)
{
    suggestions.innerHTML += "<p>Try to eat " + diffVegetables + " more servings of Vegetables.</p>";
}
else if (diffVegetables < 0)
{
    suggestions.innerHTML += "<p>You have already exceeded your goal for Vegetables by " + (-diffVegetables) + " servings. Consider reducing your intake to stay on track.</p>";
}
if (diffGrains > 0)
{
    suggestions.innerHTML += "<p>Try to eat " + diffGrains + " more servings of Grains.</p>";
}
else if (diffGrains < 0)
{
    suggestions.innerHTML += "<p>You have already exceeded your goal for Grains by " + (-diffGrains) + " servings. Consider reducing your intake to stay on track.</p>";
}
if (diffProtein  > 0)
{
    suggestions.innerHTML += "<p>Try to eat " + diffProtein  + " more servings of Protein .</p>";
}
else if (diffProtein  < 0)
{
    suggestions.innerHTML += "<p>You have already exceeded your goal for Protein  by " + (-diffProtein ) + " servings. Consider reducing your intake to stay on track.</p>";
}
if (diffDairy   > 0)
{
    suggestions.innerHTML += "<p>Try to eat " + diffDairy   + " more servings of Dairy  .</p>";
}
else if (diffDairy   < 0)
{
    suggestions.innerHTML += "<p>You have already exceeded your goal for Dairy   by " + (-diffDairy  ) + " servings. Consider reducing your intake to stay on track.</p>";
}

});