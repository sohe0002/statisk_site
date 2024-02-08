fetch("https://kea-alt-del.dk/t7/api/products")
.then(res=>res.json())
.then(showProducts)

function showProducts(products){
    //looper og kalder showProduct
    products.forEach(showProduct)
    }

function showProduct(product){
    console.log(product);

    //fang template
    const template = document.querySelector("#smallProductTemplate").content;

    //lav en kopi
    const copy = template.cloneNode(true);

    // ændre indhold
copy.querySelector("h3").textContent = product.productdisplayname;
copy.querySelector(".price").textContent = product.price;
copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
copy.querySelector(".subtitle").textContent = product.articletype;
copy.querySelector(".brand").textContent = product.brandname;

if(product.soldout){
    //produktet er udsolgt
    copy.querySelector("article").classList.add("soldOut");
}

copy.querySelector(".read-more").setAttribute("href", `product.html?id=${product.id}`);

if (product.discount) {
    copy.querySelector(".discounted p:last-child").textContent = "-" + product.discount + "%";
const discount = product.price * (product.discount / 100);
console.log(discount, product.price, product.discount);
const final = product.price - discount;
copy.querySelector(".discounted p:first-child").textContent = "Nu kun " + final + ",-";
} else {
    copy.querySelector(".discounted").remove();
}


    //appende
document.querySelector(".grid_1_1").appendChild(copy);
}

/*{
     <template id="smallProductTemplate">
            <article class="smallProduct">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/1164.webp" alt="Blue T20 Indian Cricket Jersey">
                <h3>Blue T20 Indian Cricket Jersey</h3>
                <p class="subtitle"> Tshirts Nike</p>
                <p class="brand"> Nike</p>
                <p class="price"><span>Prev.</span> 1595kr</p>
                <div class="discounted">
                    <p>Now DKK 1560</p>
                    <p>-34%</p>
                </div>
            </article>
        </template>
}
*/
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

