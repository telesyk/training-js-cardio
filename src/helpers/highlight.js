import Prism from "prismjs";
import config from "../config";

const {
  highlight: { type }
} = config;

const setCodeHighlights = (codeBlock) => {
  const codeHighlighted = Prism.highlight(
    codeBlock.innerText,
    Prism.languages[type],
    type
  );
  codeBlock.innerHTML = codeHighlighted;
};

export default setCodeHighlights;
