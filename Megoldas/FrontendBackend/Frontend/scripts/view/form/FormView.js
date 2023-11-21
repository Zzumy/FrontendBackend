import FormTextView from "./FormTextView.js";
import FormNumberView from "./FormNumberView.js";

export default class FormView{
    #leiro = {};
    #urlapElemLista = [];
    #urlapNumberLista = [];
    #osszesElemValidE = true;
    #urlapAdat = {};
    constructor(szuloElem, leiro) {
        this.szuloElem = szuloElem;
        this.#leiro = leiro;
        this.szuloElem.append("<form>");
        this.formElem = this.szuloElem.children("form");
        this.#urlapOsszerak();
        this.submitElem = $("#submit");
        this.submitElem.on("click", (event) => {
            event.preventDefault();
            this.#osszesElemValidE = true;
            this.#urlapElemLista.forEach((elem) => {
                this.#osszesElemValidE = this.#osszesElemValidE && elem.valid;
            });
            if (this.#osszesElemValidE) {
                this.#urlapElemLista.forEach((elem) => {
                    this.#urlapAdat[elem.key] = elem.value;
                });
                console.log("Valid az űrlap");
            } else {
                console.log("Nem valid az űrlap");
            }
            this.#esemenyTrigger("betesz");
        });
    }
    get urlapAdat() {
        return this.#urlapAdat;
    }
    #urlapOsszerak() {
        for (const key in this.#leiro) {
            switch (this.#leiro[key].tipus) {
                case "text":
                    this.#urlapElemLista.push(
                        new FormTextView(key, this.#leiro[key], this.formElem)
                    );
                    break;
                case "date":
                    this.#urlapElemLista.push(
                        new FormNumberView(
                            key,
                            this.#leiro[key],
                            this.formElem
                        )
                    );
                    break;
                default:
            }
        }
        let txt = "<input type='submit' id='submit' value='OK'>";
        this.formElem.append(txt);
    }
    #esemenyTrigger(esemeny) {
        const E = new CustomEvent(esemeny, { detail: this.#urlapAdat });
        window.dispatchEvent(E);
    }
}
