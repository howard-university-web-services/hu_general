# silc

Silc is a **S**imple, **I**ntuitive, **L**ibrary of **C**omponents for web developers. Unlike other "frameworks", silc is intentionally bare bones, focusing on functionality over uneccessary styles that you end up overriding later. Silc features purposeful and semantic HTML, minimal "vanilla" JavaScript, and SASS variables for easy customization. Silc includes the following modules:

 - [silc core](https://github.com/nickrigby/silc-core)
 - [silc grid](https://github.com/nickrigby/silc-grid)
 - [silc accordion](https://github.com/nickrigby/silc-accordion)
 - [silc nav](https://github.com/nickrigby/silc-nav)
 - [silc offcanvas](https://github.com/nickrigby/silc-offcanvas)
 - [silc utilities](https://github.com/nickrigby/silc-utilities)

## Installation
After downloading silc, dependencies need to be installed with [yarn](https://yarnpkg.com/lang/en/docs/install/) or [node](https://docs.npmjs.com/getting-started/installing-node).

`npm install` or `yarn install`

## Development
Silc includes [Fractal](http://fractal.build) for component based development. Your own components can be added to the `src/components` folder. Static assets such as JavaScript, CSS and images will be served out of the `build` folder, but can also be configured to your specific needs by editing the [fractal.js file](fractal.js). For more information, read the [fractal guide](http://fractal.build/guide).

To start the fractal development server:

`npm run fractal` or `yarn fractal`

Referencing images from within your component handlebars templates:

```html
<img src="{{path '/img/image.png'}}" alt="">
```

### Watch mode
If you do not wish to use Fractal, or simply want to watch for changes without launching a development server, you can run the watch command:

`npm run watch` or `yarn watch`

### Webpack server
If you do not wish to use Fractal in development at all, you can use the webpack development server:

`npm run serve` or `yarn serve`

## Building for production
To build your code for production, run the following:

`npm run build:production` or `yarn build:production`

This will generate `build` and `fractal` folders at the root of your project. The `build` folder contains all of your compiled assets (CSS, JavaScript etc.), while the `fractal` folder contains a static generated version of your Fractal component library, which can be used for previews and an online reference to your component library. See the [Clearleft Fractal Library](http://fractal.clearleft.com) as an example.

## Overriding styles
Each silc module contains a number of default SASS variables that can be easily overridden by adding the variable to the [silc/_overrides.scss file](src/scss/silc/_overrides.scss). For example, to add your own breakpoints, you would create the following variable in the overrides file:

```scss
$silc-core--breakpoints: (
    ('sm', '(min-width:400px)'),
    ('md', '(min-width:600px)'),
    ('lg', '(min-width:1000px)'),
    ('xl', '(min-width:1400px)')
);
```

## Extending classes
Some silc modules contain JavaScript classes that can be easily extended for your own needs. To extend a class, you need to import the class and then remove the call to the original module init function e.g. `silcOffcanvasInit`

```javascript
import { SilcOffcanvas } from 'silc-offcanvas';
class MyOffcanvas extends SilcOffcanvas {

    constructor(el) {
        super(el);
    }

    protected toggle(event) {
        super.toggle(event); // Call parent toggle function
        console.log('Toggle!'); // Your own functionality
    }

}
```

You can then write your own init function to apply your new class to the appropriate elements.
```javascript
[].forEach.call(document.querySelectorAll('.silc-offcanvas__trigger'), el => {
    new MyOffcanvas(el);
});
```
