# Glot

> A tiny, simple, powerful, expressive, i18n library;

## Usage

```javascript
import createGlot from "@freddieridell/glot";
import { format as formatDate } from "date-fns/fp";

//initalise with dictionary
const glot = createGlot({
	en: {
		greetings: "'ello, govna'",
		months: date => `${date.getMonth() + 1} months`,
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
console.log(glot({ value: new Date() })`months`);
console.log(glot({ mkFn: formatDate })`date`(new Date()));

// interpolate values
new Array(2).fill(null).map((_, i) => console.log(glot`thing_${i + 1}`));
```

## Todo

-   [ ] write better readme
-   [ ] create companion react component
-   [ ] write example usage
-   [ ] write tests, full coverage
