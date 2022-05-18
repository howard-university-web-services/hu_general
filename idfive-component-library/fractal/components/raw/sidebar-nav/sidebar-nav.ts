export default class sidebarNav{
  protected element: HTMLElement;
  protected child: HTMLElement;
  protected trigger: HTMLElement
  
  /**----------------------------------------------------------
   * Constructor
   ----------------------------------------------------------*/

  public constructor(element: HTMLElement) {
    this.element = element;
    this.child = this.element.querySelector('.silc-nav__items');
    this.trigger = this.element.querySelector('.silc-nav__link');

    this.displayChild();
  }

  protected displayChild() {
    if (this.element) {
      this.trigger.addEventListener("click", event => {
        event.preventDefault();
        this.child.classList.toggle('sidebar-nav__display-child');
      });
    }
  }

}
