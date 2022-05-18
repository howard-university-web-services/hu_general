const iconClasses = [
    "icon-announcement",
    "icon-calendar",
    "icon-phone",
    "icon-paper",
    "icon-info",
    "icon-envelope",
    "icon-location",
    "icon-heart",
    "icon-news",
] as string[];

export function convertToLineIcons() {
    for (let i = 0; i < iconClasses.length; i++) {
        const iconClass = iconClasses[i] as string;
        const icons = document.querySelectorAll(`.${iconClass}`) as NodeListOf<HTMLElement>;
        for (let j = 0; j < icons.length; j++) {
            const icon = icons[j] as HTMLElement;
            icon.classList.remove(iconClass);
            icon.classList.add(`${iconClass}-line`);
        }
    }
}

export function convertToDefaultIcons() {
    for (let i = 0; i < iconClasses.length; i++) {
        const iconClass = iconClasses[i] as string;
        const icons = document.querySelectorAll(`.${iconClass}-line`) as NodeListOf<HTMLElement>;
        for (let j = 0; j < icons.length; j++) {
            const icon = icons[j] as HTMLElement;
            icon.classList.remove(`${iconClass}-line`);
            icon.classList.add(iconClass);
        }
    }
}