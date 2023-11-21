import DataService from "../model/DataService.js";
import TableView from "../view/table/TableView.js";
import FormView from "../view/form/FormView.js";
import FormModel from "../model/FormModel.js";

export default class Controller {
    constructor() {
        this.dataService = new DataService();
        this.formModel = new FormModel();
        this.dataService.getAxiosData(
            "http://localhost:8000/api/tasks",
            this.display,
            this.formModel.getRule()
        );
        $(window).on("betesz", (event) => {
            this.dataService.postAxiosData(
                "http://localhost:8000/api/tasks",
                event.detail
            );
        });
        $(window).on("torles", (event) => {
            console.log(event.detail);
            this.dataService.deleteAxiosData(
                "http://localhost:8000/api/tasks",
                event.detail
            );
        });
    }
    display(list, leiro) {
        new TableView(list, $(".lista"), leiro);
        new FormView($(".ujadat"), leiro);
    }
}
