import { DataService } from "../modell/DataService.js";
import { FormModell } from "../modell/FormModell.js";
import { FormView } from "../view/form/FormView.js";
import { ChartView } from "../view/chart/ChartView.js";

export class Controller {
    constructor() {
        this.dataService = new DataService();
        this.formModell = new FormModell();
        this.dataService.getAxiosData(
            "http://localhost:8000/api/writer",
            this.display,
            this.formModell.getRule()
        );
        $(window).on("post", (event) => {
            this.dataService.postAxiosData(
                "http://localhost:8000/api/writer",
                event.detail
            );
        });
        $(window).on("delete", (event) => {
            console.log(event.detail);
            this.dataService.deleteAxiosData(
                "http://localhost:8000/api/writer",
                event.detail
            );
        });
    }
    display(list, rule) {
        new FormView($(".form"), rule);
        new ChartView(list, $(".list"), rule);
    }
}
