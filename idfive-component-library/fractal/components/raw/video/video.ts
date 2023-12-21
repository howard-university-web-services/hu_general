
export default class youtubePlaylist {
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
            const iframe = this.element.querySelector('iframe');
            const thumbnails = this.element.querySelectorAll('.video-link--pip a');

            Array.from(thumbnails).forEach(link => {
                link.addEventListener('click', function (event) {

                    event.preventDefault();

                    if (this.classList.contains('active-video') == true) {
                        return;
                    }

                    // Remove and re-add active class.
                    [].forEach.call(thumbnails, el => {
                        if (el !== this) el.classList.remove('active-video');
                    });
                    this.classList.toggle('active-video');

                    // Set iframe SRC.
                    iframe.src = link.getAttribute('data-video-id');

                });
            });

            // Click first item in playlist.
            let myElement: HTMLElement = thumbnails[0] as HTMLElement;
            myElement.click();

        }
    }
}