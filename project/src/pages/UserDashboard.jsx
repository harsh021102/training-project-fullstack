import Card from "../components/Card";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import axios from "axios";
import MyCard from "../components/MyCards";
import Loader from "../components/Loader";

const UserDashboard = () => {
	const [display, setDisplay] = useState(true);
	const [course, setCourse] = useState([]);
	const [mycourse, setMycourse] = useState([]);
	const [category, setCategory] = useState([
		"cloud",
		"programming",
		"science",
		"os",
	]);
	const [semail, setSemail] = useState(localStorage.getItem("loggedUser"));
	const [loading, setLoading] = useState(true);

	const fetchMyCourses = async () => {
		try {
			const respCourse = await axios.post(
				`http://localhost:8082/api/student/studentcoursedetails/${semail}`
			);
			setMycourse(respCourse.data);
		} catch (error) {
			alert(error);
			console.log(error);
		}
	};

	const loadCourses = async () => {
		try {
			const resp = await axios.get(`http://localhost:8082/api/course`);
			setCourse(resp.data);
		} catch (error) {
			alert(error);
		}
	};
	const showHome = () => {
		if (!display) setDisplay(true);
	};
	const showLearning = () => {
		if (display) setDisplay(false);
		fetchMyCourses();
	};

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
		loadCourses();
	}, []);
	return (
		<>
			<div className="w-full text-normal h-12 flex gap-4  justify-start items-end border-b-1 border-slate-400 font-oswald">
				<button
					className={`h-full px-4 font-oswald font-light ml-10 p-2 text-end ${display ? "border-b-2 border-blue-700" : ""}`}
					onClick={showHome}
				>
					Home
				</button>
				<button
					className={`h-full px-4 font-oswald font-light p-2 text-end ${!display ? "border-b-2 border-blue-700" : ""}`}
					onClick={showLearning}
				>
					My Learning
				</button>
			</div>
			{loading ? (
				<Loader />
			) : (
				<>
					{display ? (
						<>
							{category.map((item, i) => (
								<section
									key={i}
									className="py-12 my-12 mx-2 font-oswald md:mx-4 md:my-0 flex flex-col px-3 lg:px-24 h-screen"
								>
									<h1 className="text-2xl md:text-3xl py-3 mb-4 font-oswald font-normal w-full ">
										{item[0].toUpperCase() + item.slice(1)} Courses
									</h1>
									<div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-5 justify-items-center md:justify-items-start overflow-auto">
										{course.map((c, index) => {
											if (c.category === item) {
												return (
													<Card
														key={index}
														company={c.title}
														imageUrl={c.image_url}
														price={c.price}
														id={c.id}
													/>
												);
											}
										})}
									</div>
								</section>
							))}
						</>
					) : (
						<>
							<section className="py-12 my-12 mx-2 md:mx-4 font-oswald md:my-0 flex flex-col px-3 lg:px-24 h-screen">
								<h1 className="text-2xl md:text-3xl py-3 mb-4 font-oswald font-normal w-full ">
									Courses
								</h1>
								<div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-5 justify-items-center md:justify-items-start overflow-auto">
									{mycourse.map((c, index) => {
										return (
											<MyCard
												key={index}
												company={c.title}
												imageUrl={c.image_url}
												price={c.price}
												id={c.id}
											/>
										);
									})}
								</div>
							</section>
						</>
					)}
				</>
			)}
			<section className="px-3 lg:px-24  pt-14">
				<Footer />
			</section>
		</>
	);
};

export default UserDashboard;
