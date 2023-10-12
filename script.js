villes = [];



// Déclarez une variable pour stocker les données des villes. Initialisez cette variable comme un tableau vide.
var villes = [];

// Sélectionnez l'élément d'entrée de recherche (avec la classe "search") et stockez-le dans une variable.
var searchInput = document.querySelector(".search");

// Sélectionnez l'élément de liste pour les suggestions (avec la classe "suggestions") et stockez-le dans une variable.
var suggestionsList = document.querySelector(".suggestions");
villes = [];

// Utilisez la fonction fetch pour obtenir les données JSON à partir de l'URL endpoint fournie dans le code.
fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // Ajoutez les données au tableau de villes en utilisant une méthode pour envoyer les données dans votre variable qui a pour valeur un tableau vide.
    villes.push(data);
  });
async function afficherVille() {
  const reponse = await fetch ( "http:https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"//example.com/films.json");
  const ville = await reponse.json();
  console.log(films);
}

      const endpoint =
        "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
   