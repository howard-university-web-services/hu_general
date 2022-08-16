import * as Flickity from "flickity";
require("flickity-fade");


export default class featuredImage {
  protected element: HTMLElement;

  /**----------------------------------------------------------
   * Constructor
   ----------------------------------------------------------*/

  public constructor(element: HTMLElement) {
    this.element = element;

    this.construct();

  }

  protected construct() {
    if (this.element) {
      const flkty = new Flickity(this.element, {
        wrapAround: true,
        autoPlay: 6000,
        fade: true,
        draggable: false, 
        adaptiveHeight: true,
        contain: true,
        prevNextButtons: true,

        //   arrowShape: 'M1.6,46.9c-1.8,1.6-1.8,3.2-.1,4.8a3.1,3.1,0,0,0,4.9,0L29,29a2.6,2.6,0,0,0,1.1-2.4A2.5,2.5,0,0,0,29,24.3L6.4,1.6a3.1,3.1,0,0,0-4.9,0C-.2,3.2-.2,4.8,1.6,6.4l20,20.2Z',
        //
      });
    }
  }
}
