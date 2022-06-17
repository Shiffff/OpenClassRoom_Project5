let i;
let tab = [];
let panier = JSON.parse(localStorage.getItem("panierStocké"));



console.log("local storage");
for (i = 0; i < localStorage.length; i++)   {
    console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
    let tab = 
    tab =  localStorage.key(i)
    console.dir(localStorage)
}






/*
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
*/