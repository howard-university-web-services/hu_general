import * as Flickity from "flickity";

export default class ourPeople {
  protected element: HTMLElement;

  protected buttons: NodeListOf<HTMLElement>;
  protected cell: HTMLElement;
  protected image: HTMLElement;
  protected buttonHeightDiv

  /**----------------------------------------------------------
   * Constructor
   ----------------------------------------------------------*/

  public constructor(element: HTMLElement) {
    this.element = element;

    this.construct();
    this.element = element;
    this.buttons = this.element.querySelectorAll('.flickity-button');
    this.cell = this.element.querySelector('.our-people__cell');

    this.buttonHeightDiv = 66;

    if (document.readyState === "complete") {
      this.btnDistance();

    };

  }

  protected construct() {
    if (this.element) {

      const ourPeopleSlide = new Flickity(this.element, {

        draggable: false, contain: true,
        prevNextButtons: true, freeScroll: true,
        wrapAround: true,
        selectedAttraction: 0.15,
        friction: 0.8
        //   arrowShape: 'M1.6,46.9c-1.8,1.6-1.8,3.2-.1,4.8a3.1,3.1,0,0,0,4.9,0L29,29a2.6,2.6,0,0,0,1.1-2.4A2.5,2.5,0,0,0,29,24.3L6.4,1.6a3.1,3.1,0,0,0-4.9,0C-.2,3.2-.2,4.8,1.6,6.4l20,20.2Z',
        //
      });
    }
  }

  public btnDistance() {
    if (this.element) {

      let dotsDistance = this.cell.clientHeight;
      let buttonDistance = (dotsDistance - this.buttonHeightDiv);

      for (let i = 0; i < this.buttons.length; i++) {
        this.buttons[i].style.top = buttonDistance + "px";
      }
    }
  }
}
