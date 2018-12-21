# Glot

![min badge](https://badgen.net/bundlephobia/min/@freddieridell/glot)
![minzipped badge](https://badgen.net/bundlephobia/minzip/@freddieridell/glot)

> A tiny, simple, powerful, expressive, i18n library

## Usage

```javascript
import createGlot from "@freddieridell/glot";
import { format as formatDate } from "date-fns/fp";

//initalise with dictionary
const glot = createGlot({
	en: {
		greetings: "'ello, govna'",
		date: "yyyy-MM-dd",
		thing_1: "number one",
		thing_2: "number two",
	},
	fra: {
		greetings: "'sup, Monsieur",
	},
})({ lang: "en" });

//basic usage
console.log(glot`greetings`);
console.log(glot`INVALID_KEY`);

//switch language
console.log(glot({ lang: "fra" })`greetings`);
const foreverFrench = glot({ lang: "fra" });
console.log(foreverFrench`greetings`);

//create parameterized functions
const localisedDteFormatter = glot({ mkFn: formatDate })`date`;
console.log(localisedDteFormatter(new Date()));

// interpolate values
new Array(2).fill(null).map((_, i) => console.log(glot`thing_${i + 1}`));
```

## Todo

-   [ ] create companion react component
-   [ ] think about pluralisation
-   [x] tune babel config to reduce bundle size
-   [x] write tests, full coverage
-   [x] write better readme
-   [x] write better readme
