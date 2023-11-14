import { FormRules } from "./FormRules.js";
export class FormModell {
    #rule = {};
    constructor() {
        this.#rule = FormRules;
    }
    getRule() {
        return { ...this.#rule };
    }
}
