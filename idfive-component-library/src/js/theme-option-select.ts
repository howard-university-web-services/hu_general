interface ThemeOption {
    name: string,
    classname: string
}

export default class ThemeOptionSelect {
    protected element: HTMLSelectElement;
    protected options: ThemeOption[];

    constructor(element: HTMLSelectElement) {
        if (element) {
            this.element = element;
            this.options = [
                { "name": "Default", "classname": "" },
                { "name": "Clean & Light", "classname": "clean_light" },
                { "name": "Classic Editorial", "classname": "classic_editorial" }
            ];

            this.init();
        }
    }

    protected init() {
        this.handleChange();
        this.toggleBodyClass();
        this.populateOptions();
    }
    
    protected populateOptions() {
        this.options.forEach((obj) => {
            const option = document.createElement("OPTION") as HTMLOptionElement;
            option.value = obj.classname;
            option.textContent = obj.name;
            option.selected = obj.classname && document.body.classList.contains(obj.classname);
            this.element.appendChild(option);
        });
    }

    protected handleChange() {
        this.element.addEventListener("change", (event) => {
            const target = event.target as HTMLSelectElement;
            try {
                localStorage.setItem("theme-option-debug", target.value);
                this.toggleBodyClass();
            } catch(ex) {
                console.error(ex);
            }
        });
    }

    protected toggleBodyClass() {
        try {
            const themeOption = localStorage.getItem("theme-option-debug") as string;
            if (themeOption !== null) {
                this.options.forEach((obj) => {
                    if (document.body.classList.contains(obj.classname)) {
                        document.body.classList.remove(obj.classname);
                    }
                });
                if (themeOption) {
                    document.body.classList.add(themeOption);
                }
            }
        } catch (ex) {
            console.error(ex);
        }
    }
}