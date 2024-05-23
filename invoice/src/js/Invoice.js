import initialRender from "./core/initialRender.js";
import listener from "./core/listener.js";

class Invoice {
    init(){
         console.log("Invoice app running");
        initialRender();
        listener();
    }
}

export default Invoice;