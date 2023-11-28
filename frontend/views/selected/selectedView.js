export default class SelectedView {
    #list;
    constructor(list, parent) {
        this.#list = list;
        this.display(parent);
    }

    display(parent) {
        let tmp = "";
        this.#list.forEach((element) => {
            tmp = `<div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${Object.values(element)[1]}</h5>`;

            for (const key in element) {
                if (
                    Object.hasOwnProperty.call(element, key) &&
                    !(
                        key == "id" ||
                        key == "created_at" ||
                        key == "updated_at" ||
                        key == Object.keys(element)[1]
                    )
                ) {
                    tmp += `<h6 class="card-subtitle mb-2 text-body-secondary">${key}: ${element[key]}</h6>`;
                }
            }

            tmp += `</div>
            </div>`;
            parent.append(tmp);
        });
    }
}
