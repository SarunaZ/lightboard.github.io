const createNode = (el, classList) => {
  const node = document.createElement(`${el}`);
  node.classList.add(classList);
  return node;
}

export default createNode;