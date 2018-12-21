const createGlot = dictionary => {
	const parseStrings = (lang, value, strs, exprs) => {
		const key = strs.map((str, i) => str + (exprs[i] || "")).join("");
		const found = dictionary[lang][key];

		if (found === undefined) {
			return `NO GLOT FOR ${key}!`;
		}

		return found;
	};

	const glot = options => {
		const { lang, value, mkFn } = options;

		return (head, ...tail) => {
			if (Array.isArray(head)) {
				if (mkFn) {
					return mkFn(parseStrings(lang, value, head, tail));
				}
				return parseStrings(lang, value, head, tail);
			} else {
				return glot({
					...options,
					...head,
				});
			}
		};
	};

	return glot;
};

export default createGlot;
