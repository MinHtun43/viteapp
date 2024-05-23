import { createForm, inventorySheetCloseBtn, manageInventoryBtn, rowGroup } from "./selector.js";
import { createFormHandler, manageInventoryBtnHandler, rowGroupHandler } from "./handlers.js";

const listener = () => {
    createForm.addEventListener("submit" , createFormHandler);
    rowGroup.addEventListener("click" , rowGroupHandler);
    manageInventoryBtn.addEventListener("click" , manageInventoryBtnHandler);
    inventorySheetCloseBtn.addEventListener("click" , manageInventoryBtnHandler)
}

export default listener;

