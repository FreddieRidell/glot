import React from "react";

import Context from "./context";

const GlotConsumer = ({ children }) => (
	<Context.Consumer>{children}</Context.Consumer>
);

export default GlotConsumer;
