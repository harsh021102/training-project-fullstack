import React from "react";

const Certificate = React.forwardRef((props, ref) => {
	return (
		<div
			ref={ref}
			style={{
				padding: "100px",
				border: "10px solid blue",
				width: "700px",
				margin: "0 auto",
			}}
		>
			<h1 style={{ textAlign: "center" }} className="text-3xl font-oswald">
				Certificate of Achievement
			</h1>
			<p style={{ textAlign: "center" }}>This is to certify that</p>
			<h2 style={{ textAlign: "center" }} className="font-light italic">
				{props.name}
			</h2>
			<p style={{ textAlign: "center" }}>
				has successfully completed the course.
			</p>
			<h3 style={{ textAlign: "center" }}>{props.course}</h3>
		</div>
	);
});

export default Certificate;
