let urlApi = "http://localhost:3000/api/products";
const articles = document.getElementsByTagName('article');
const section = document.getElementsByTagName('section');
let a = document.getElementsByTagName('a');


//********************************************************************* */


fetch(urlApi).then((response) =>
     response.json().then((data) => {
        console.log(data); 
        let affichage = ("");
    for (let produit of data){
        affichage += `<a>`
        affichage += `<article>`
        affichage += `<img id="img" src="${produit.imageUrl}" alt="Lorem ipsum dolor sit amet, Kanap name1">`;
        affichage += `<h3 class="productName">${produit.name}</h3>`;
        affichage += `<p class="productDescription">${produit.description}</p>`;
        affichage += `</article>`
        affichage += `</a>`
    }
    document.querySelector("#items") .innerHTML = affichage;
})
);
