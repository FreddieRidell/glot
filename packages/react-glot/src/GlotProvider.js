import React from "react";

import createGlot from "@freddieridell/glot";

import Context from "./contex";

const GlotProvider = ({ dictionary, lang, children }) => (
	<Context.Provider
		value={lang ? createGlot(dictionary) : createGlot(dictionary)({ lang })}
	>
		{children}
	</Context.Provider>
);

export default GlotProvider;
