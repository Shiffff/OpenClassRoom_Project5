let params = new URLSearchParams(window.location.search)
let resultID = params.get('id')
let urlApiProduct = `http://localhost:3000/api/products/${resultID}`;



//********************************************************************* */
fetch(urlApiProduct).then((response) =>
response.json().then((data) => {
    document.querySelector("#title") .innerHTML = data.name;
    document.querySelector("#price") .innerHTML = data.price;
    document.querySelector("#description") .innerHTML = data.description;
    document.querySelector("article div.item__img") .innerHTML = `<img src="${data.imageUrl}" alt=${data.altTxt}>`;
    couleurs = data.colors
    let printcolor = [];
    console.log(couleurs)
    for  (let i = 0; i < couleurs.length; i++){
        let color = couleurs[i];
    printcolor += `<option value="${i}">${color}</option>`;
}
document.querySelector("#colors") .innerHTML = printcolor;
console.log(printcolor);

})
);





/*
        let couleurs = ("");
    for (let colors of data){
        couleurs += `<option value="${colors.data.colors}">${colors.data.colors}</option>`;
    } 
    document.querySelector("#colors") .innerHTML = couleurs;
        for (let i = 0; i < couleurs; i++) {
        console.log("Passager embarqué !");
     }
})
);
*/