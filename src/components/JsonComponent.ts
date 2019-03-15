import jsonData from '../assets/json/test.json';


export class JsonComponent {

  constructor(private tag: string, private id?: string, private className?: string) {
    // nothing
  }

  build(): HTMLElement {
    const element = document.createElement(this.tag);

    if (this.id) {
      element.setAttribute('id', this.id);
    }

    if (this.className) {
      element.classList.add(this.className);
    }

    element.textContent = JSON.stringify(jsonData);

    return element;
  }


}
