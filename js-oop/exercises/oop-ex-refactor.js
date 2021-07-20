class HtmlElement {
  click() {
    console.log("clicked");
  }
}

class HtmlSelectElement extends HtmlElement {
  constructor(array = []) {
    super();
    this.items = array; //Array
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  render() {
    return `
    <select>
      ${this.items
        .map(
          item => `
      <option>${item}</option>
    `,
        )
        .join("")}
    </select>
    `;
  }
}

const selectElement = new HtmlSelectElement([1, 2, 3]);

class HtmlImageElement {
  constructor(src) {
    this.src = src; //String
  }

  render() {
    return `<img src="${this.src}"/>`;
  }
}

const imgElement = new HtmlImageElement("https://foo.dev");

//Array Of elements
const elements = [selectElement, imgElement];
for (let el of elements) console.log(el.render());
