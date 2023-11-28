export default class SelectedModel {
    #list = [];

    constructor() {
        const tmp = (localStorage.getItem("IDs") || "").split(",");
        this.#list = tmp[0] === "" ? [] : tmp;
    }

    get list() {
        return this.#list;
    }
}
