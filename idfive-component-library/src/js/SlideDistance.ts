export default class SlideDistance {
  protected element: HTMLElement;
  protected buttons: NodeListOf<HTMLElement>;
  protected dots: HTMLElement;
  protected image: HTMLElement;
  protected desc: HTMLElement;
  protected viewport: HTMLElement;
  protected buttonHeightDiv;
  protected buttonHeightDivMobile;

  /**----------------------------------------------------------
   * Constructor
   ----------------------------------------------------------*/

  public constructor(element: HTMLElement) {
    this.element = element;
    this.buttons = this.element.querySelectorAll(".flickity-button");
    this.image = this.element.querySelector(".slideshow__img");
    this.desc = this.element.querySelector(".slideshow__desc");
    this.dots = this.element.querySelector(".flickity-page-dots");
    this.viewport = this.element.querySelector(".flickity-viewport");

    this.buttonHeightDiv = 66;
    this.buttonHeightDivMobile = 48;

    if (document.readyState === "complete") {
      this.btnDistance();
    }
  }
  public btnDistance() {
    if (this.element) {

      let dotsDistance = this.image.clientHeight;
      let descHeight = this.desc.clientHeight;
      let viewportHeight = dotsDistance + descHeight;

      let buttonDistance = dotsDistance - this.buttonHeightDiv;
      let buttonDistanceMobile = dotsDistance - this.buttonHeightDivMobile;
      this.dots.style.top = dotsDistance - 42 + "px";

      if (this.viewport.clientHeight != viewportHeight) {

        this.viewport.style.height = viewportHeight + "px";

      }
      for (let i = 0; i < this.buttons.length; i++) {
        if (window.matchMedia("(min-width: 800px)").matches) {
          this.buttons[i].style.top = buttonDistance + "px";
        } else {
          this.buttons[i].style.top = buttonDistanceMobile + "px";
        }
      }
    }
  }
}
