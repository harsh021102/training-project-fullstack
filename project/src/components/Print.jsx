import React, { useEffect, useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import Certificate from "./Certificate";
import axios from "axios";
import { useParams } from "react-router-dom";
const Print = () => {
	const [name, setName] = useState("");
	const [course, setCourse] = useState("");
	const certificateRef = useRef();
	const [semail, setSemail] = useState(localStorage.getItem("loggedUser"));
	const { id } = useParams();
	console.log(id);

	// Get all details of student
	const fetchStudent = async () => {
		try {
			const resp = await axios.post(
				`http://localhost:8082/api/student/search/${semail}`
			);
			const respCourse = await axios.get(
				`http://localhost:8082/api/course/${id}`
			);
			setName(resp.data.name);
			setCourse(respCourse.data.title);
		} catch (error) {
			alert(error);
			console.log(error);
		}
	};
	useEffect(() => {
		fetchStudent();
	}, []);
	return (
		<div style={{ textAlign: "center", marginTop: "50px" }}>
			<ReactToPrint
				trigger={() => (
					<button className="mt-10 md:mt-4 text-2xl md:text-lg bg-blue-700 py-4 px-8 md:py-3 md:px-6 text-white rounded-lg">
						Download Certificate
					</button>
				)}
				content={() => certificateRef.current}
			/>
			<div style={{ display: "none" }}>
				<Certificate ref={certificateRef} name={name} course={course} />
			</div>
		</div>
	);
};

export default Print;
