export const isBrowser = typeof window !== "undefined";
export const isElement = (value: unknown): boolean => value instanceof Element;
export const isNode = (value: unknown): boolean => value instanceof Node;

export const getXPath = (el: Element): string => {
  let nodeElem = el;
  if (nodeElem && nodeElem.id) {
    return '//*[@id="' + nodeElem.id + '"]';
  }
  const parts: string[] = [];
  while (nodeElem && Node.ELEMENT_NODE === nodeElem.nodeType) {
    let nbOfPreviousSiblings = 0;
    let hasNextSiblings = false;
    let sibling = nodeElem.previousSibling;
    while (sibling) {
      if (
        sibling.nodeType !== Node.DOCUMENT_TYPE_NODE &&
        sibling.nodeName === nodeElem.nodeName
      ) {
        nbOfPreviousSiblings++;
      }
      sibling = sibling.previousSibling;
    }
    sibling = nodeElem.nextSibling;
    while (sibling) {
      if (sibling.nodeName === nodeElem.nodeName) {
        hasNextSiblings = true;
        break;
      }
      sibling = sibling.nextSibling;
    }
    const prefix = nodeElem.prefix ? nodeElem.prefix + ":" : "";
    const nth =
      nbOfPreviousSiblings || hasNextSiblings
        ? "[" + (nbOfPreviousSiblings + 1) + "]"
        : "";
    parts.push(prefix + nodeElem.localName + nth);
    nodeElem = nodeElem.parentNode as Element;
  }
  return parts.length ? "/" + parts.reverse().join("/") : "";
};
