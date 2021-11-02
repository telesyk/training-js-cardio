import { createElement } from "../helpers/create";

const Button = (props) => {
  const { classname, title, attrs } = props;
  const element = createElement(title, "button");
  element.className = classname;
  if (attrs) {
    attrs.map((attr) => {
      const attrName = Object.getOwnPropertyNames(attr)[0];
      return element.setAttribute(attrName, attr[attrName]);
    });
  }

  return element;
};

export default Button;
