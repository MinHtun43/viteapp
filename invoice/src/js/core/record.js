import { costTotal, rowTemplate } from "./selector.js"

export const createRecord = ({id,name,price},qualtity) => {
    const cost = price * qualtity;
    const record = rowTemplate.content.cloneNode(true);
    record.querySelector(".row").setAttribute("row-product-id" , id)
    record.querySelector(".row-no").innerText = 1;
    record.querySelector(".row-product").innerText = name;
    record.querySelector(".row-product-price").innerText = price;
    record.querySelector(".row-qualtity").innerText = qualtity;
    record.querySelector(".row-cost").innerText = cost;

    return record;
}

export const updateRecord = () => {
    const allRowCost = document.querySelectorAll(".row-cost");
//  let total = 0;
//  allRowCost.forEach(({innerText}) => {
//   total += parseFloat(innerText);
//  })
 costTotal.innerText = [...allRowCost].reduce((pv,{innerText}) => pv + parseFloat(innerText),0 );
}

export const delRecord = (event) => {
    //  console.log(event.target);
    const row = event.target.closest(".row");
    if(confirm("Are U sure to del")){
        row.remove();
    }
    updateRecord();
}

export const addRecordQuality = (event) => {
    const row = event.target.closest(".row");
    const currentQualtity = row.querySelector(".row-qualtity");
    const currentCost = row.querySelector(".row-cost");
    const currentPrice = row.querySelector(".row-product-price");
    currentQualtity.innerText =  parseInt(currentQualtity.innerText) + 1;
    currentCost.innerText = parseInt(currentQualtity.innerText) * currentPrice.innerText;
    updateRecord();
}

export const subRecordQuality = (event) => {
    const row = event.target.closest(".row");
    const currentQualtity = row.querySelector(".row-qualtity");
    const currentCost = row.querySelector(".row-cost");
    const currentPrice = row.querySelector(".row-product-price");
    if(currentQualtity.innerText > 1 ){
        currentQualtity.innerText =  parseInt(currentQualtity.innerText) - 1;
    currentCost.innerText = parseInt(currentQualtity.innerText) * currentPrice.innerText;
    }else{
        delRecord(event);
    }
    updateRecord();
}