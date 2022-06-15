let params = new URLSearchParams(window.location.search)
let resultID = params.get('id')
let urlApiProduct = `http://localhost:3000/api/products/${resultID}`;




//********************************************************************* */
fetch(urlApiProduct).then((response) =>
response.json().then((data) => {
    console.log(data)
    document.querySelector("#title") .innerHTML = data.name;
    document.querySelector("#price") .innerHTML = data.price;
    document.querySelector("#description") .innerHTML = data.description;
    document.querySelector("article div.item__img") .innerHTML = `<img src="${data.imageUrl}" alt=${data.altTxt}>`;
})
);







/*
fetch(urlApi).then((response) =>
     response.json().then((data) => {
        let affichage = ("");
    for (let produit of data){
        affichage += `<a href= ../html/product.html?id=${produit._id}>`
        affichage += `<article>`
        affichage += `<img id="img" src="${produit.imageUrl}" alt=${produit.altTxt}>`;
        affichage += `<h3 class="productName">${produit.name}</h3>`;
        affichage += `<p class="productDescription">${produit.description}</p>`;
        affichage += `</article>`
        affichage += `</a>`
    }
    document.querySelector("#items") .innerHTML = affichage;
})
);
*/