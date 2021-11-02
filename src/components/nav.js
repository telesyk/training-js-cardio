import styles from "../confStyles";
import { createElement } from "../helpers/create";
import Button from "./button";

const Nav = (items) => {
  const fragment = document.createDocumentFragment();

  items.map(({ active, title, attrs }) => {
    const classname = !active ? styles.nav.default : styles.nav.active;
    const newItem = Button({ classname, title, attrs });
    return fragment.appendChild(newItem);
  });

  const element = createElement(fragment, "nav");
  element.className = styles.nav.container;

  return element;
};

// const navTemplate = `
// <nav class="flex justify-center gap-x-2">
//   <button class="${styles.nav.active}" tab-index="0">Tab 1</button>
//   <button class="${styles.nav.default}" tab-index="1">Tab 2</button>
//   <button class="${styles.nav.default}" tab-index="2">Tab 3</button>
// </nav>
// `;

// const navParser = () => {
//   var parser = new DOMParser();
//   var doc = parser.parseFromString(navTemplate, "text/html");
//   return doc.body.firstChild;
// };

// const nav = navParser();

export default Nav;
