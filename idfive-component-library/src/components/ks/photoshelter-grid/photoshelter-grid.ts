import { LuminousGallery } from 'luminous-lightbox';
export default class photoshelterGrid {
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
    const galleryOpts = {
        // Whether pressing the arrow keys should move to the next/previous slide.
        arrowNavigation: true
    };  
    const luminousOpts = {
        // These options have the same defaults and potential values as the Luminous class.
        namespace: 'photoshelter'
    };
      const gallery = new LuminousGallery(this.element.querySelectorAll('.lightboxGallery'), galleryOpts,luminousOpts);
    }
  }
}
