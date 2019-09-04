
import MicroModal from 'micromodal';

export default class ModalPlaylist {
    protected element: HTMLElement;
    protected activeIndex: number;
    protected triggers: NodeListOf<HTMLElement>;
    protected playlist: NodeListOf<HTMLElement>;
    protected prevButton: HTMLButtonElement;
    protected nextButton: HTMLButtonElement;
  
    constructor(element: HTMLElement) {
      this.element = element;
      this.playlist = this.element.querySelectorAll(".modal--in-playlist") as NodeListOf<HTMLElement>;
      this.triggers = this.element.querySelectorAll("[data-micromodal-trigger]") as NodeListOf<HTMLElement>;
      
      this.init();
    }

    protected init() {
      this.createNavControls();
      this.handleTriggerClicks();
      this.initSlides();
    }

    get nextIndex() {
      return this.activeIndex === this.playlist.length - 1 ? 0 : this.activeIndex + 1;
    }

    get prevIndex() {
      return this.activeIndex === 0 ? this.playlist.length - 1 : this.activeIndex - 1;
    }

    /**
     * Update the active index value each time a trigger is clicked
     */
    protected handleTriggerClicks() {
      for (let i = 0; i < this.triggers.length; i++) {
        this.triggers[i].addEventListener("click", () => {
          this.activeIndex = i;
          this.playlist[i].classList.add("slide-in");
          this.nextButton.setAttribute("aria-hidden", "false");
          this.prevButton.setAttribute("aria-hidden", "false");
        });
      }
    }

    /**
     * Add the next and previous buttons
     */
    protected createNavControls() {
      const nextButton = document.createElement("BUTTON") as HTMLButtonElement;
      const prevButton = document.createElement("BUTTON") as HTMLButtonElement;
      const nextLabel = document.createElement("SPAN") as HTMLElement;
      const prevLabel = document.createElement("SPAN") as HTMLElement;

      nextButton.className = "modal-playlist__nav-button next";
      prevButton.className = "modal-playlist__nav-button prev";

      nextLabel.textContent = "View next modal";
      prevLabel.textContent = "View previous modal";

      nextLabel.className = "visible-for-screen-readers";
      prevLabel.className = "visible-for-screen-readers";

      nextButton.appendChild(nextLabel);
      prevButton.appendChild(prevLabel);
      
      nextButton.addEventListener("click", () => {
        this.transitionModals("next");
      });

      prevButton.addEventListener("click", () => {
        this.transitionModals("prev");
      });
      
      this.element.appendChild(nextButton);
      this.element.appendChild(prevButton);

      this.nextButton = nextButton;
      this.prevButton = prevButton;
    }
  
    /**
     * Reset state on close and listen for transitionend events to reset state
     */
    protected initSlides() {
      for (let i = 0; i < this.playlist.length; i++) {
        const item = this.playlist[i];

        const close_all = item.querySelector(".modal__close");
        const overlay = item.querySelector(".modal__overlay");

        if (close_all) {
          close_all.addEventListener("click", () => {
            item.classList.remove("is-open");
            item.setAttribute("aria-hidden", "true");
            item.classList.add("slide-out");
            this.prevButton.setAttribute("aria-hidden", "true");
            this.nextButton.setAttribute("aria-hidden", "true");
          });
        }

        if (overlay) {
          overlay.addEventListener("click", (e) => {
            if(e.target !== e.currentTarget) return;
            item.classList.remove("is-open");
            item.setAttribute("aria-hidden", "true");
            item.classList.add("slide-out");
            this.prevButton.setAttribute("aria-hidden", "true");
            this.nextButton.setAttribute("aria-hidden", "true");
          });
        }

        item.addEventListener("animationend", (event: AnimationEvent) => {
          if (event.animationName === "mmSlideInRight" || event.animationName === "mmSlideOutRight") {
            item.classList.remove("slide-right");
          }
          if (event.animationName === "mmSlideInLeft" || event.animationName === "mmSlideOutLeft") {
            item.classList.remove("slide-left");
          }
          if (event.animationName === "mmslideIn") {
            item.classList.remove("slide-in");
          }
          if (event.animationName === "mmslideOut") {
            item.classList.remove("slide-out");
          }
        });
        
      }
    }

    /**
     * Handle the transition between previous and next modals
     */
    protected transitionModals(direction: string) {
      const currentItem = this.playlist[this.activeIndex];
      
      if (direction === "next") {
        const nextItem = this.playlist[this.nextIndex];
        currentItem.classList.add("slide-left");
        nextItem.classList.add("slide-left");
        MicroModal.show(nextItem.id);
        // Have to close manually because Micromodal has a bug
        currentItem.classList.remove("is-open");
        currentItem.setAttribute("aria-hidden", "true");
        this.activeIndex = this.nextIndex;
      } else {
        const prevItem = this.playlist[this.prevIndex];
        currentItem.classList.add("slide-right");
        prevItem.classList.add("slide-right");
        MicroModal.show(prevItem.id);
        currentItem.classList.remove("is-open");
        currentItem.setAttribute("aria-hidden", "true");
        this.activeIndex = this.prevIndex;
      }
    }
  }