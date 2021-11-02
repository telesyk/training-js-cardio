const styles = {
  tabTitle: "text-3xl mb-6",
  block: "code mb-5 pb-5 text-sm",
  blockTitle: "text-xl text-gray-200",
  blockCode:
    "my-2 p-2 border-b-2 border-blue-900 rounded bg-gray-900 text-gray-300",
  codeWrapper: {
    trigger: {
      class: "flex justify-end bg-gray-300 text-gray-600 cursor-pointer",
      icon: "px-2 transition-all transform"
    },
    toggle: {
      height: "h-0",
      gaps: "p-2",
      icon: "rotate-45"
    },
    wrapper: "code-wrapper my-3",
    container:
      "code-container border-b-2 border-blue-900 rounded rounded-t-none bg-gray-900 text-gray-300 overflow-y-hidden"
  },
  nav: {
    default: "bg-gray-300 text-gray-800 py-1 px-3",
    active: "bg-gray-50 text-gray-800 py-1 px-3",
    container: "flex justify-center gap-x-2"
  }
};

export default styles;
