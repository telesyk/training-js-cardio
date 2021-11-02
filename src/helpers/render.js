import styles from "../confStyles";
import config from "../config";
import { createElementCode, createBlockCode, createElement } from "./create";

const { selector } = config;

const renderElement = (element, rootId) => {
  if (!element) {
    console.log("[Need to define element]", element);
    return;
  }

  const id = !rootId ? selector.rootNode : rootId;
  const rootEl = document.getElementById(id);

  rootEl.appendChild(element);
};

const renderBlock = (nodeId, ...args) => {
  if (!nodeId || typeof nodeId !== "string") return;

  const [code, result, text, showCode] = args;
  const blockElement = createElement();
  blockElement.className = styles.block;

  if (text) {
    const titleElement = createElement(null, "h2");
    titleElement.className = styles.blockTitle;
    blockElement.appendChild(titleElement);

    if (typeof text === "string") titleElement.textContent = text;
    if (text.title) titleElement.textContent = text.title;
    if (text.description) {
      const descriptionElement = createElementCode(text.description);
      blockElement.appendChild(descriptionElement);
    }
  }

  if (result) {
    const resultElement = createElementCode(result);
    blockElement.appendChild(resultElement);
  }

  if (!!code) {
    const codeElement = createBlockCode(`${code}`, !!showCode);
    blockElement.appendChild(codeElement);
  }

  return renderElement(blockElement, nodeId);
};

const renderTab = (tabs, tabIndex) => {
  const { tabViewId, tabTitle, rootNode } = selector;
  const index = !tabIndex ? 0 : tabIndex;
  const tab = tabs[index];
  let elementTab = null;

  if (!document.getElementById(tabViewId)) {
    elementTab = createElement();
    elementTab.id = tabViewId;
  } else {
    elementTab = document.getElementById(tabViewId);
    elementTab.innerHTML = "";
  }

  const elementTitle = createElement(tab.title, tabTitle);

  elementTitle.className = styles.tabTitle;

  renderElement(elementTab, rootNode);
  renderElement(elementTitle, tabViewId);

  tab.examples.map((sample) => renderBlock(tabViewId, ...sample));

  return elementTab;
};

export { renderBlock, renderElement, renderTab };
