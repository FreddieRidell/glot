import createGlot, { smart } from "../src";
import { format as formatDate } from "date-fns/fp";

describe("glot", () => {
	let glot;

	beforeEach(() => {
		glot = createGlot({
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
	});

	it("returns a valid key in the default language", () => {
		expect(glot`greetings`).toBe("'ello, govna'");
	});

	it("returns a warning message when an invalid key is used", () => {
		expect(glot`INVALID_KEY`).toBe("NO GLOT FOR INVALID_KEY!");
	});

	it("can change the languge", () => {
		expect(glot({ lang: "fra" })`greetings`).toBe("'sup, Monsieur");
	});

	it("can create formatting functions", () => {
		expect(glot({ mkFn: formatDate })`date`(new Date("2018-12-21"))).toBe(
			"2018-12-21",
		);
	});

	it("can interpolate values in the template string", () => {
		expect(
			new Array(2).fill(null).map((_, i) => glot`thing_${i + 1}`),
		).toEqual(["number one", "number two"]);
	});
});
