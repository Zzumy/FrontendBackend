import TableRowView from "./TableRowView.js";

export default class TableView {
    #list = [];
    #leiro = [];
    constructor(list, szuloElem, leiro) {
        this.#leiro = leiro;
        this.#list = list;
        szuloElem.append('<table class="table table-bordered table-striped ">');
        this.tablaElem = szuloElem.children("table");
        console.log(this.tablaElem);
        this.sor();
        this.tablazatbaIr();
    }

    setSor(sor) {
        this.tablaElem.html(sor);
    }

    sor() {
        let txt = "";

        txt += "<tr>";
        for (const key in this.#leiro) {
            txt += `<th>${this.#leiro[key].megjelenes}</th>`;
        }
        txt += "</tr>";

        this.tablaElem.append(txt);
    }

    tablazatbaIr() {
        this.#list.forEach((elem, index) => {
            new TableRowView(elem, this.tablaElem, index);
        });
    }
}