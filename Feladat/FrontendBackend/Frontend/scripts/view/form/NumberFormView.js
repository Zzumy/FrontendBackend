export class NumberFormView {
    #key = "";
    #rule = {};
    #value = "";
    #valid = true;
    constructor(key, rule, formElem) {
        this.#key = key;
        this.#rule = rule;
        this.formElem = formElem;
        this.#numberElem();
        this.inputElem = $(`#${this.#key}`);
        this.validElem = this.formElem
            .children("div:last-child")
            .children(".valid");
        this.invalidElem = this.formElem
            .children("div:last-child")
            .children(".invalid");
        this.#value = this.inputElem.val();
        console.log(this.#value);
        if (this.#value <= 2023 && this.#value >= 1900) {
            this.#valid = true;
        } else {
            this.#valid = false;
        }
    }
    get value() {
        return this.#value;
    }
    get valid() {
        return this.#valid;
    }
    get key() {
        return this.#key;
    }
    #numberElem() {
        let txt = `
          <div class="mb-3 mt-3">
              <label for="${this.#key}" 
              class="form-label">
              ${this.#rule.megjelenes}
              </label>
              <input type="${this.#rule.tipus}" class="form-control" 
              id="${this.#key}" 
              name="${this.#key}" 
              min="${this.#rule.regex.min}"
              max="${this.#rule.regex.max}"
              value="${this.#rule.value}">
          </div>
          `;
        this.formElem.append(txt);
    }
}
