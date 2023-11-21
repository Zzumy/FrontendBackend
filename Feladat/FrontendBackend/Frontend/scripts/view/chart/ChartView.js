import { ChartViewLine } from "./ChartViewLine.js";

export class ChartView {
    #list = [];
    #rule = [];
    constructor(list, parent, rule) {
        this.#rule = rule;
        this.#list = list;
        parent.append('<table class="table table-bordered table-striped ">');
        this.tablaElem = parent.children("table");
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
        for (const key in this.#rule) {
            txt += `<th>${this.#rule[key].megjelenes}</th>`;
        }
        txt += "</tr>";
        this.tablaElem.append(txt);
    }
    tablazatbaIr() {
        this.#list.forEach((elem, index) => {
            new ChartViewLine(elem, this.tablaElem, index);
        });
    }
}
