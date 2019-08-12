
import MicroModal from 'micromodal';

export default class ModalPlaylist {
    protected element: HTMLElement;
    protected playlist: NodeListOf<HTMLElement>;
  
    constructor(element: HTMLElement) {
      this.element = element;
      this.playlist = this.element.querySelectorAll(".modal--in-playlist") as NodeListOf<HTMLElement>;
      this.createModalPlaylist();
    }
  
    /**
     * Create next-prev functionality
     * for toggling next modal in grid
     */
    protected createModalPlaylist() {
      const adj_length = this.playlist.length - 1;
      for (let i = 0; i < this.playlist.length; i++) {
        const item = this.playlist[i];
        var prev = i-1;
        if(i == 0) {
            prev = adj_length;
        }
        var next = i+1;
        if(i == adj_length) {
            next = 0;
        }
        const prev_item = this.playlist[prev];
        const next_item = this.playlist[next];

        const prev_button = item.querySelector(".modal__controls--prev");
        const next_button = item.querySelector(".modal__controls--next");
        const close_all = item.querySelector(".modal__close");
        const overlay = item.querySelector(".modal__overlay");

        next_button.addEventListener("click", () => {
            MicroModal.show(next_item.id);
            MicroModal.close(item.id); 
        });
        prev_button.addEventListener("click", () => {
            MicroModal.show(prev_item.id); 
            MicroModal.close(item.id);
        });
        close_all.addEventListener("click", () => {
            MicroModal.close(item.id);
        });
        overlay.addEventListener("click", (e) => {
            if(e.target !== e.currentTarget) return;
            MicroModal.close(item.id);
        });
        
      }
    }
  }