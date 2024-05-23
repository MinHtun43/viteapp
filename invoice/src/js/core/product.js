import { productGroup, productTemplate } from "./selector.js";

const createProduct = (product) => {
     const card = productTemplate.content.cloneNode(true);
     card.querySelector(".product-name").innerText = product.name;
     card.querySelector(".product-price").innerText = product.price;
}

export const productRender = (products) => {
    products.forEach((product) => {
        selectProduct.append(new Option(product.name , product.id));
        productGroup.append(createProduct(product.name , product.price))
    })}