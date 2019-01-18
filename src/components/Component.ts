export const Component = (tag: string, text: string | null, id: string | null, className: string | null): HTMLElement => {
  const element = document.createElement(tag);
  if (id) element.setAttribute('id', id);
  if (className) element.classList.add(className);

  element.textContent = text;

  return element;
}
