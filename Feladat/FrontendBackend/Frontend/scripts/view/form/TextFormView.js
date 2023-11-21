export class TextFormView {
    #key = "";
    #rule = {};
    #value = "";
    #valid = true;
    constructor(key, rule, formElem) {
        this.#key = key;
        this.#rule = rule;
        this.formElem = formElem;
        this.#textElem();
        this.inputElem = $(`#${this.#key}`);
        this.validElem = this.formElem
            .children("div:last-child")
            .children(".valid");
        this.invalidElem = this.formElem
            .children("div:last-child")
            .children(".invalid");
        this.inputElem.on("keyup", () => {
            this.#value = this.inputElem.val();
            let reg = this.#rule.regex;
            let regObj = new RegExp(reg);
            if (regObj.test(this.#value)) {
                this.#valid = true;
                this.validElem.removeClass("elrejt");
                this.invalidElem.addClass("elrejt");
            } else {
                this.#valid = false;
                this.invalidElem.removeClass("elrejt");
                this.validElem.addClass("elrejt");
            }
        });
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
    #textElem() {
        let txt = `
          <div class="mb-3 mt-3">
              <label for="${this.#key}" 
              class="form-label">
              ${this.#rule.megjelenes}
              </label>
              
              <input type="${this.#rule.tipus}" class="form-control" 
              id="${this.#key}" 
              name="${this.#key}"
              placeholder="${this.#rule.placeholder}"  
              patter="${this.#rule.regex}"
              value="${this.#rule.value}">
              
              <div class="valid elrejt">OK</div>
              <div class="invalid elrejt">${this.#rule.validalas}</div>
          </div>
          `;
        this.formElem.append(txt);
    }
}
