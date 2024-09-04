import React from "react";
import { FallingLines } from "react-loader-spinner";
const Loader = () => {
	return (
		<div className="flex justify-center items-center h-screen">
			<FallingLines
				color="#1f47d8"
				width="100"
				visible={true}
				ariaLabel="falling-circles-loading"
			/>
		</div>
	);
};

export default Loader;
