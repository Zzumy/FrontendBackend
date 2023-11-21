import { FormRules } from "./FormRules.js";
export default class FormModel {
    #rule = {};
    constructor() {
        this.#rule = FormRules;
    }
    getRule() {
        return { ...this.#rule };
    }
}
