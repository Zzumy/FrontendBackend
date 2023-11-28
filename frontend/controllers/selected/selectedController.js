import DataService from "../../models/dataService.js";
import Error from "../../models/error.js";
import SelectedModel from "../../models/selected/selectedModel.js";
import SelectedView from "../../views/selected/selectedView.js";

export default class SelectedController {
    constructor() {
        this.dataService = new DataService();
        this.model = new SelectedModel();

        this.loadData();
    }

    loadData() {
        const selectedIds = this.model.list.toString();
        console.log(selectedIds);

        this.dataService.getData(
            `http://localhost:8000/api/people/selected/${selectedIds}`,
            this.display.bind(this),
            this.error.bind(this),
            this.model.list
        );
    }

    display = (list) => new SelectedView(list, $("#card"));
    error = (error) => new Error(error, $("#card"));
}
