# Boilerplate Bootstrap

MARKDOWN

https://parceljs.org/

## Instalar Parcel

```shell
npm install -g parcel-bundler
```

## Instalar Bootstrap

```shell
npm install bootstrap@next
```

```shell
npm install popper.js
```

## Configurar index.js

```js
import * as bootstrap from 'bootstrap';
```

## Configurar bootstrap.scss

```css
@import "../node_modules/bootstrap/scss/bootstrap";
```

## Configurar custom.scss

**Nota**: Para que la compilación del scss sea rápida es necesaria separar el scss del bootstrap.scss del resto. Para eso se crea y se linkea en el html el archivo **custom.scss**

## Configurar package.json

```json
"scripts": {
  "dev": "parcel ./src/index.html",
  "prebuild": "npx rimraf build",
  "build": "parcel build --public-url ./ ./src/index.html --experimental-scope-hoisting --out-dir build"
}
```

## Correr Parcel para desarrollo

```shell
npm run dev
```

## Correr Parcel para producción

```shell
npm run build
```