let urlApi = "http://localhost:3000/api/products";
const articles = document.getElementsByTagName('article');
const section = document.getElementsByTagName('section');
let a = document.getElementsByTagName('a');


//********************************************************************* */


fetch(urlApi).then((response) =>
     response.json().then((data) => {
        let affichage = ("");
    for (let produit of data){
        affichage += `<a href= ../html/product.html?id=${produit._id}>`
        affichage += `<article>`
        affichage += `<img src="${produit.imageUrl}" alt=${produit.altTxt}>`;
        affichage += `<h3 class="productName">${produit.name}</h3>`;
        affichage += `<p class="productDescription">${produit.description}</p>`;
        affichage += `</article>`
        affichage += `</a>`
    }
    document.querySelector("#items") .innerHTML = affichage;
})
);
