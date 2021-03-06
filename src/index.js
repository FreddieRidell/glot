module.exports = (dictionary, shouldThrow) => {
	const parseStrings = (lang, strs, exprs) => {
		const key = strs.map((str, i) => str + (exprs[i] || "")).join("");
		const found = dictionary[lang][key];

		if (found === undefined) {
			if(shouldThrow){
				throw new Error(`NO GLOT FOR ${key}!`);
			} else {
				return `NO GLOT FOR ${key}!`;
			}
		}

		return found;
	};

	const glot = options => {
		const { lang, mkFn } = options;

		return (head, ...tail) => {
			if (Array.isArray(head)) {
				if (mkFn) {
					return mkFn(parseStrings(lang, head, tail));
				}
				return parseStrings(lang, head, tail);
			} else {
				return glot(Object.assign({}, options, head));
			}
		};
	};

	return glot;
};
