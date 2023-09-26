import { KEPLISTA } from "./adat.js";

class Model {
    #keplista = [];
    #id;
    constructor(){
        this.#keplista = KEPLISTA;
        this.#id = 0;
    }

    getKepLista(){
        return {...this.#keplista}
    }

    getAktKep(){
        return this.#keplista[this.#id]
    }

    jobb(){
        this.#id++;
        if(this.#id>this.#keplista.length-1){
            this.#id = 0;
        }
    }

    bal(){
        this.#id--;
        if(this.#id < 0){
            this.#id = this.#keplista.length-1;
        }
    }

}

export default Model;