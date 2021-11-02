import styles from "../confStyles";
import config from "../config";

const { codeWrapper, nav } = styles;
const { selector } = config;

const handleActiveNavItem = (target) => {
  const navContainer = document.querySelector(selector.navContainer);
  const navItems = navContainer.childNodes;
  navItems.forEach((item) => {
    item.className = nav.default;
  });

  target.className = nav.active;
};

const triggerDisplayCodeArea = (target) => {
  const elementCodeArea = target.nextElementSibling;
  elementCodeArea.classList.toggle(codeWrapper.toggle.height);
  elementCodeArea.classList.toggle(codeWrapper.toggle.gaps);

  const elementTriggerIcon = target.firstElementChild;
  elementTriggerIcon.classList.toggle(codeWrapper.toggle.icon);
};

const handleDisplayCode = (event) => {
  const target = event.target;
  if (!target.getAttribute(selector.triggerCode)) return;
  return triggerDisplayCodeArea(target);
};

export { handleDisplayCode, handleActiveNavItem };
