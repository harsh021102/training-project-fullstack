import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
const CourseDetails = () => {
	const { id } = useParams();
	const [course, setCourse] = useState({
		id: "",
		title: "",
		description: "",
		price: "",
		category: "",
		image_url: "",
	});
	const [semail, setSemail] = useState(localStorage.getItem("loggedUser"));
	const [enroll, setEnroll] = useState(true);
	const [sid, setSid] = useState(0);
	const [enrolledcourse, setEnrolledcourse] = useState([]);

	const fetchStudentIdByEmail = async () => {
		try {
			const respEmail = await axios.post(
				`http://localhost:8082/api/student/searchidbyemail/${semail}`
			);
			setSid(respEmail.data);
			const respCourse = await axios.post(
				`http://localhost:8082/api/student/studentcoursedetails/${semail}`
			);
			``;
			setEnrolledcourse(respCourse.data);
		} catch (error) {
			console.log(error);
		}
	};
	const loadCourseDetails = async (cid) => {
		try {
			const resp = await axios.get(`http://localhost:8082/api/course/${id}`);
			setCourse(resp.data);
		} catch (error) {
			console.log(error);
		}
	};
	const handleEnroll = async () => {
		try {
			await axios.put(
				`http://localhost:8082/api/student/add/${sid}/course/${id}`
			);
			loadCourseDetails();
			setEnroll(false);
		} catch (error) {
			console.log(error);
		}
	};
	const fetchCourseById = async (cid) => {
		try {
			const resp = await axios.get(`http://localhost:8082/api/course/${cid}`);
			const respCourse = await axios.post(
				`http://localhost:8082/api/student/studentcoursedetails/${semail}`
			);
		} catch (error) {
			alert(error);
		}
	};
	useEffect(() => {
		enrolledcourse.map((course) => {
			if (course.id == id) {
				setEnroll(false);
			}
		});
	}, [enrolledcourse]);

	useEffect(() => {
		fetchStudentIdByEmail();
		// fetchCourseById(id);
		loadCourseDetails(id);
	}, []);
	return (
		<>
			{/* Details */}
			<section className=" md:h-screen flex justify-center font-oswald">
				<div className="w-full md:w-9/12 grid grid-cols-12 md:grid-cols-8 grid-rows-7 pt-16 bg-slate-100">
					<div className="col-span-12 md:col-span-5 row-span-4 flex flex-col mx-16 justify-between ">
						<div className="flex flex-col gap-7">
							<h1 className="text-4xl">{course.title}</h1>
							<p className="text-lg font-extralight">Price: {course.price}</p>
							<h1 className="text-md font-extralight">{course.description}</h1>
						</div>
						<button
							className="w-full md:w-5/12 md:m-0 mt-14 md:mt-0 text-normal md:text-normal py-4 px-8 md:py-4 md:px-2 rounded-md text-white bg-blue-700"
							onClick={handleEnroll}
						>
							{enroll ? "Enroll" : "Already Enrolled"}
						</button>
					</div>
					<img
						src={course.image_url}
						alt="image"
						className="hidden md:flex col-span-2 bg-cover bg-no-repeat rounded-md shadow-lg"
					/>
				</div>
			</section>
			<section className="px-3 lg:px-24  pt-14">
				<Footer />
			</section>
		</>
	);
};

export default CourseDetails;
