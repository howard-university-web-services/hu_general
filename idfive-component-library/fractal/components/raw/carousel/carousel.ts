import * as Flickity from "flickity";
import { LuminousGallery } from 'luminous-lightbox';
export default class carousel {
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

      const gallery = new LuminousGallery(this.element.querySelectorAll('.lightbox'));
      const carousel = new Flickity(this.element, {
        wrapAround: true,
        autoPlay: 6000,
        draggable: false, contain: true,
        prevNextButtons: true, groupCells: '80%',
        selectedAttraction: 0.15,
        friction: 0.8

        //   arrowShape: 'M1.6,46.9c-1.8,1.6-1.8,3.2-.1,4.8a3.1,3.1,0,0,0,4.9,0L29,29a2.6,2.6,0,0,0,1.1-2.4A2.5,2.5,0,0,0,29,24.3L6.4,1.6a3.1,3.1,0,0,0-4.9,0C-.2,3.2-.2,4.8,1.6,6.4l20,20.2Z',
        //
      });
    }
  }
}
