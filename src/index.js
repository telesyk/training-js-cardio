import config from "./config";
import {
  handleDisplayCode,
  handleActiveNavItem,
  setCodeHighlights,
  renderElement,
  renderTab
} from "./helpers";
import { tabs } from "./view";
import Nav from "./components/nav";

const { selector } = config;
const viewState = {};

if (tabs) {
  const tabIndex = tabs.findIndex(({ active }) => !!active);
  viewState.activeTabIndex = !tabIndex || tabIndex === -1 ? 0 : tabIndex;

  viewState.navItems = [];
  tabs.map(({ title }, index) => {
    return viewState.navItems.push({
      title,
      active: viewState.activeTabIndex === index,
      attrs: [
        {
          [selector.navIndex]: index
        }
      ]
    });
  });
} else {
  viewState.activeTabIndex = 0;
}

const highlightCode = () => {
  const allCodeBlocks = Array.from(
    document.querySelectorAll(selector.codeBlock)
  );
  allCodeBlocks.map((block) => setCodeHighlights(block));
};

const nav = Nav(viewState.navItems);

renderElement(nav);
renderTab(tabs, viewState.activeTabIndex);
highlightCode();

document.addEventListener("click", handleDisplayCode);
document.addEventListener("click", (event) => {
  if (!event.target.getAttribute(selector.navIndex)) return;

  const target = event.target;
  viewState.activeTabIndex = parseInt(
    target.getAttribute(selector.navIndex),
    10
  );

  handleActiveNavItem(target);
  renderTab(tabs, viewState.activeTabIndex);
  highlightCode();
});
