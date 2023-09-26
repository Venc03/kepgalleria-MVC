import Model from "../Model/Model.js";
import NagyKepView from "../View/NagyKepView.js"

class Controller {
    constructor(){

        const MODEL = new Model;
        const NAGYKEP = new NagyKepView($(".nagykep"), MODEL.getAktKep())
        $(window).on("bal", () => {
            MODEL.bal();
            let akt = MODEL.getAktKep();
            NAGYKEP.verybigBeallit(akt);
        })
        $(window).on("jobb", () => {
            MODEL.jobb();
            let akt = MODEL.getAktKep();
            NAGYKEP.verybigBeallit(akt);
        })
    }

}

export default Controller;