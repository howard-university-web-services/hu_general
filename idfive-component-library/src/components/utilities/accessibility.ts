export default class AccessibilityUtilities {
  private static userTabbing: boolean = false;
  public static get focusableChildSelector(): string {
    return `a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])`;
  }

  public static init() {
    this.disableTabbingWithinHiddenElements();
    this.trackReducedMotionSetting();
    this.handleKeydown();
    this.handleMouseDown();
  }

  private static handleKeydown() {
    window.addEventListener("keydown", (event) => {
      this.applyKeyboardStylesOnTab(event);
    });
  }

  private static handleMouseDown() {
    window.addEventListener("mousedown", () => {
      this.removeKeyboardStylesOnMousedown();
    });
  }

  /**
   * Add class to html element to selectively apply styles for keyboard users vs mouse users
   */
  private static applyKeyboardStylesOnTab(event: any) {
    const key = event.key || event.keyCode;
    if (key === "Tab" || (key === 9 && !this.userTabbing)) {
      this.userTabbing = true;
      document.documentElement.classList.add("user-tabbing");
    }
  }

  /**
   * Remove class from html element to selectively apply styles for keyboard users vs mouse users
   */
  private static removeKeyboardStylesOnMousedown() {
    if (this.userTabbing) {
      this.userTabbing = false;
      document.documentElement.classList.remove("user-tabbing");
    }
  }

  /**
   * Utility function for converting anchors simulating buttons as no-js fallbacks
   * into actual buttons when JS is enabled.
   */
  public static convertAnchorToButton(
    anchor: HTMLAnchorElement
  ): HTMLButtonElement {
    if (!!anchor) {
      const button = document.createElement("BUTTON") as HTMLButtonElement;

      // Copy attributes from anchor to button
      for (let i = 0; i < anchor.attributes.length; i++) {
        const attribute = anchor.attributes[i];
        // Exclude irrelevant attributes from being added to button
        if (attribute.name !== "href") {
          if (attribute.name === "role" && attribute.value === "button")
            continue;
          button.setAttribute(attribute.name, attribute.value);
        }
      }

      // Copy child elements from anchor to button
      for (let i = 0; i < anchor.childNodes.length; i++) {
        button.appendChild(anchor.childNodes[i].cloneNode(true));
      }

      anchor.parentElement.replaceChild(button, anchor);
      return button;
    }
  }
  /**
   * Toggle a class on the document element based on the user's OS reduced motion preference.
   */
  private static trackReducedMotionSetting() {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ) as MediaQueryList;
    const handleChange = () => {
      const reduceMotion = mediaQuery.matches as boolean;
      document.documentElement.classList[reduceMotion ? "add" : "remove"](
        "reduce-motion"
      );
    };
    mediaQuery.addEventListener("change", handleChange);
    handleChange();
  }
  /**
   * Use a MutationObserver to watch for elements with aria-hidden or hidden attribute changes
   * and deterministically update tabindex for focusable children of the target element.
   */
  private static disableTabbingWithinHiddenElements() {
    const observer = new MutationObserver((mutations: MutationRecord[]) => {
      for (let i = 0; i < mutations.length; i++) {
        const mutation = mutations[i] as MutationRecord;
        if (
          mutation.type === "attributes" &&
          mutation.attributeName !== null &&
          ["aria-hidden", "hidden"].indexOf(mutation.attributeName) !== -1 &&
          mutation.target.nodeType === Node.ELEMENT_NODE
        ) {
          const isHidden =
            (mutation.attributeName === "hidden" &&
              mutation.oldValue === null) ||
            (mutation.attributeName === "aria-hidden" &&
              (mutation.oldValue === "false" || mutation.oldValue === null));
          const target = mutation.target as HTMLElement;
          const focusableChildren = target.querySelectorAll(
            this.focusableChildSelector
          ) as NodeListOf<HTMLElement>;
          for (let i = 0; i < focusableChildren.length; i++) {
            const child = focusableChildren[i] as HTMLElement;
            // Prevent unintentionally toggling tabindex for children of nested hidden elements
            if (child.closest("[aria-hidden]") === target) {
              child.tabIndex = isHidden ? -1 : 0;
            }
          }
        }
      }
    });
    observer.observe(document.body, {
      subtree: true,
      attributes: true,
      attributeOldValue: true,
    });
  }
}
