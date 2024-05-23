import { addRecordQuality, createRecord, delRecord, subRecordQuality, updateRecord } from "./record.js";
import { costTotal, createForm, inventorySheet, rowGroup } from "./selector.js";
import { products } from "./variables.js";

export const createFormHandler = (event) => {
    event.preventDefault();
  console.log("U submit");

  const formData = new FormData(createForm);
  const currentProductId = parseInt(formData.get("selectProduct"));
  const currentQualtity = parseInt(formData.get("inputQualtity"));
  const currentProduct = products.find(({id}) => id === currentProductId);

  const isExited = rowGroup.querySelector(`[row-product-id='${currentProductId}']`)

  if(isExited){
    const currentQualtityElement = isExited.querySelector(".row-qualtity");
    const currentCost = isExited.querySelector(".row-cost");
    const currentPrice = isExited.querySelector(".row-product-price");
    currentQualtityElement.innerText =  parseInt(currentQualtityElement.innerText) + currentQualtity;
    currentCost.innerText = currentQualtityElement.innerText * currentPrice.innerText;
    createForm.reset();
  }else{
    rowGroup.append(createRecord(currentProduct,currentQualtity));
    createForm.reset();
  }
  updateRecord();
}


export const rowGroupHandler = (event) => {
  if(event.target.classList.contains("del-btn"))
  {
    delRecord(event)
  }else if (event.target.classList.contains("add-q-btn"))
  {
    addRecordQuality(event)
  }else if(event.target.classList.contains("sub-q-btn"))
  {
    subRecordQuality(event)
  }
}

export const manageInventoryBtnHandler = () => {
  inventorySheet.classList.toggle("-translate-x-full")
}