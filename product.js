const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch ("https://kea-alt-del.dk/t7/api/products/" + id)
.then((response)=> response.json())
.then((data)=> showProduct(data))

function showProduct(product) {
    console.log(product);
    document.querySelector("h1").textContent = product.productdisplayname;
    document.querySelector("h2").textContent = product.productdisplayname;
    document.querySelector(".pris").textContent = product.price;
    document.querySelector(".brand").textContent = product.brandname;
    document.querySelector("img").src =`https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
   
    document.querySelector(".category span").textContent = product.category;
    document.querySelector(".subcategory span").textContent = product.subcategory;
    document.querySelector(".articletype span").textContent = product.articletype;
    document.querySelector(".gender span").textContent = product.gender;
}



/*
    {
    articletype: "Tshirts"
brandname: "Nike"
category: "Apparel"
discount: null
gender: "Men"
id: 1163
price: 895
productdisplayname: "Sahara Team India Fanwear Round Neck Jersey"
productionyear: 2011
season: "Summer"
soldout: 0
subcategory: "Topwear"
usagetype: "Sports"
}
*/




