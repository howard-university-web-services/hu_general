
export default class MainNav {
    protected element: HTMLElement;
    protected levelOneItems: NodeListOf<HTMLElement>;
  
    constructor(element: HTMLElement) {
      this.element = element;
      this.levelOneItems = this.element.querySelectorAll("nav > ul > li") as NodeListOf<HTMLElement>;
  
      this.createDropdownTriggers();
    }
  
    /**
     * Create dropdown trigger buttons and attach event listener
     * for toggling child UL visibility
     */
    protected createDropdownTriggers() {
      for (let i = 0; i < this.levelOneItems.length; i++) {
        const item = this.levelOneItems[i];
        const itemLink = item.querySelector("a") as HTMLElement;
        const dropdown = item.querySelector("ul") as HTMLElement;
  
        if (dropdown) {
          const container = document.createElement("DIV") as HTMLElement;
          const button = document.createElement("BUTTON") as HTMLButtonElement;
  
          container.className = "nav__lists__container";
          button.className = "nav__lists__trigger";
  
          button.addEventListener("click", () => {
            const active = item.classList.contains("active");
  
            item.classList[active ? "remove" : "add"]("active");
  
            dropdown.style.height = active ? null : `${dropdown.scrollHeight}px`;
          });
  
          container.appendChild(itemLink);
          container.appendChild(button);
          item.insertBefore(container, dropdown);
        }
      }
    }
  }