import styles from "../confStyles";
import config from "../config";

const { selector } = config;

const createElement = (content, elementTag) => {
  const elementType = elementTag || selector.defaultNode;
  const element = document.createElement(elementType);

  if (content) {
    if (content instanceof Node) {
      element.appendChild(content);
    } else {
      element.textContent = content;
    }
  }

  return element;
};

/*
 * Create block to show result,
 * for example some function execution
 */
const createElementCode = (result) => {
  const elementCode = createElement(result, selector.codeNode);
  const elementCoverCode = createElement(elementCode, selector.coverCodeNode);
  elementCoverCode.className = styles.blockCode;

  return elementCoverCode;
};

/*
 * Create block to show result,
 * for example body (code) of some function
 */
const createBlockCode = (fnCode, showCode) => {
  const fragment = document.createDocumentFragment();
  const elementTriggerIcon = createElement("+");
  elementTriggerIcon.className = styles.codeWrapper.trigger.icon;
  if (showCode)
    elementTriggerIcon.classList.add(styles.codeWrapper.toggle.icon);

  const elementTrigger = createElement(elementTriggerIcon);
  elementTrigger.setAttribute(selector.triggerCode, true);
  elementTrigger.className = styles.codeWrapper.trigger.class;

  const elementFnCode = createElementCode(fnCode);
  elementFnCode.className = styles.codeWrapper.container;
  if (!showCode) {
    elementFnCode.classList.add(styles.codeWrapper.toggle.height);
  } else {
    elementFnCode.classList.add(styles.codeWrapper.toggle.gaps);
  }

  /** Container (wrapper) that includes code & trigger elements */
  const elementWrapper = createElement(elementTrigger);
  elementWrapper.className = styles.codeWrapper.wrapper;
  elementWrapper.append(elementFnCode);

  fragment.append(elementWrapper);

  return fragment;
};

export { createElement, createBlockCode, createElementCode };
