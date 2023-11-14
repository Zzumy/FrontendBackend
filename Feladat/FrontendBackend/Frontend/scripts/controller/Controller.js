import { DataService } from "../modell/DataService.js";
import { FormModell } from "../modell/FormModell.js";
import { FormView } from "../view/form/FormView.js";
import { ChartView } from "../view/Chart/ChartView.js";

export class Controller{
    constructor(){
        this.dataService = new DataService();
        this.formModell = new FormModell();
        this.LEIRO = this.formModell.getRule()
        new FormView($("#form"), this.LEIRO);
        this.dataService.getAxiosData(
          "http://localhost:5502",
          this.display
        );
    }
    
    display(data) {
        new ChartView();
    }
}