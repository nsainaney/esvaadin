# esbuild issue 475

This repo is to reproduce the esbuild issue [475](https://github.com/evanw/esbuild/issues/475)

To reproduce, run:

``` bash
yarn install
yarn bundle
yarn serve
```

The last step should launch a browser where you would see the following errors in the console:

``` console
Uncaught DOMException: Failed to execute 'define' on 'CustomElementRegistry': the name "vaadin-lumo-styles" has already been used with this registry
    at http://127.0.0.1:8080/lib/index.js:11413:18
    at http://127.0.0.1:8080/lib/index.js:83160:3
```

The reason for the above error is web-components should only be registered once and the generated bundle imports the following imports multiple times:

``` javascript
  // node_modules/@vaadin/vaadin-lumo-styles/version.js
  var Lumo = class extends HTMLElement {
    static get version() {
      return "24.0.1";
    }
  };
  customElements.define("vaadin-lumo-styles", Lumo);

...

// node_modules/@vaadin/vaadin-core/node_modules/@vaadin/avatar/node_modules/@vaadin/vaadin-lumo-styles/version.js
  var Lumo2 = class extends HTMLElement {
    static get version() {
      return "24.0.1";
    }
  };
  customElements.define("vaadin-lumo-styles", Lumo2);
```
