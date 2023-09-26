class NagyKepView {
    #kep
    constructor(szuloElem, kep){
        this.#kep = kep;
        this.szuloElem = szuloElem
        this.htmlLetrehozas()
        this.jobbGombElem = $(".jobb")
        this.balGombElem = $(".bal")
        this.VerybigElem = $("#Verybig")
        this.balGombElem.on("click", () => {
            this.#esemenyLetrehozas("bal");
        })
        this.jobbGombElem.on("click", () => {
            this.#esemenyLetrehozas("jobb");
        })
    }

    verybigBeallit(kep){
        this.VerybigElem.attr({"src":kep, "alt":kep})
    }

    #esemenyLetrehozas(esemenynev){
        const esemenyem = new CustomEvent(esemenynev)
        window.dispatchEvent(esemenyem);
    }

    htmlLetrehozas(){
        let txt = "";
        txt += `<button class="bal"> Bal </button>`
        txt += `<div class="fotarolo"><img id = "Verybig" src = "${this.#kep}" alt="${this.#kep}"></div>`
        txt += `<button class="jobb"> Jobb </button>`
        this.szuloElem.html(txt);
    }
}

export default NagyKepView;