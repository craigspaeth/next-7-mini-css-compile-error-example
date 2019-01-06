# next-7-mini-css-compile-error-example

This repo reproduces an issue with Next 7, @zeit/next-css, and mini-css-extract-plugin. This runs two Next.js apps on different ports where one app is able to compile CSS and the other throws the following error:

```
./pages/index.css
Module build failed (from ../node_modules/mini-css-extract-plugin/dist/loader.js):
TypeError: this[MODULE_TYPE] is not a function
```

To reproduce run `npm install` then `npm start` and open [localhost:3001](http://localhost:3001/).
