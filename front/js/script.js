const urlApi = "http://localhost:3000/api/products"; // Création d'une const avec l'url de l'API
const articles = document.getElementsByTagName('article');
const section = document.getElementsByTagName('section');
const a = document.getElementsByTagName('a');


//********************************************************************* */


fetch(urlApi).then((response) => // J'utilise fetch pour contacté l'API
     response.json().then((data) => {
        let affichage = ("");
    for (let produit of data){  // J'envoi la reponse dans une boucle pour chaque produit dynamiquement
        affichage += `<a href= ../html/product.html?id=${produit._id}>`  // renvoie vers lien avec l'id du produit en paramétre
        affichage += `<article>`
        affichage += `<img src="${produit.imageUrl}" alt=${produit.altTxt}>`;
        affichage += `<h3 class="productName">${produit.name}</h3>`;
        affichage += `<p class="productDescription">${produit.description}</p>`;
        affichage += `</article>`
        affichage += `</a>`
    }
    document.querySelector("#items") .innerHTML = affichage; // Je séléctionne l'endroit ou placer le code si dessus
})
).catch((error)=>{ //Si je ne parviens pas a contacté l'API => .catch
    console.log('err')
    let affichage = ("")
    affichage += `<article>`
    affichage += `<h3 class="productName">Site en maintenance</h3>`
    affichage += `</article>`
    document.querySelector("#items") .innerHTML = affichage // Je séléctionne l'endroit ou placer le code

})
