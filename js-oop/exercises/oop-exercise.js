function Stopwatch() {
  this.start = function () {
    if (isStarted) {
      throw new Error("Stopwatch has already started.");
    }
    const isStarted = false;
  };
}

function HtmlElement() {
  this.click = function () {
    console.log("clicked");
  };
}
//adding a prototype member to HtmlElement constructor.
HtmlElement.prototype.focus = function () {
  console.log("focused");
};

function HtmlSelectElement(array = []) {
  this.items = array;
  this.addItem = function (item) {
    this.items.push(item);
  };
  this.removeItem = function (item) {
    let itemIndex = this.items.indexOf(item);
    this.items.splice(itemIndex, 1);
  };
  this.render = function () {
    let html = `
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
    return html;
  };
}
//Child ==> Parent
//setting HtmlElement as parent of HtmlSelectElement with instanc members.
HtmlSelectElement.prototype = new HtmlElement();

//resetting constructor of HtmlSelectElement.
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const ele = new HtmlSelectElement([1, 2, 3, 4, 5]);

function HtmlImageElement(src) {
  this.src = src;
  this.render = function () {
    return `<img src="${this.src}"/>`;
  };
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

const eleImg = new HtmlImageElement("https://fu");

//Array Of elements
const elements = [ele, eleImg];
for (let el of elements) console.log(el.render());
