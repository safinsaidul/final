var text = '';
function findMeal (){
    text = document.getElementById('meal-search').value;
    connectMeal(text)
}


function connectMeal (text) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
    .then(res=> res.json() )
    .then(data=> loadMeal(data));

}

connectMeal();

function loadMeal (data){

  console.table(data.meals[0]);

  var container = document.getElementById('main-container');

     var id = data.meals[0].idMeal;
     var imgLink = data.meals[0].strMealThumb;
     var cat = data.meals[0].strCategory;
     var title = data.meals[0].strMeal;
     var Instructions = data.meals[0].strInstructions;

    // var newDiv = document.createElement("div");

     container.innerHTML =`<p><b> ${title} </b></p>
                           <p> ID : ${id}; </p>
                           <img src="${imgLink}" <br/>
                           <p> Category: ${cat} </p>
                           <p>Instructions: ${Instructions}</p>;`


   

    container.appendChild(newDiv);

}
