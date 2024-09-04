import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Quiz from "../components/Quiz";
import Loader from "../components/Loader";
const LearnCourse = () => {
	const { id } = useParams();

	const [displayQuiz, setDisplayQuiz] = useState(false);
	const [course, setCourse] = useState({});
	const [download, showDownload] = useState(false);
	const [loading, setLoading] = useState(true);
	const fetchCourseById = async () => {
		try {
			const resp = await axios.get(`http://localhost:8082/api/course/${id}`);
			setCourse(resp.data);
		} catch (error) {
			alert(error);
		}
	};
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
		fetchCourseById();
	}, []);
	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<>
					<>
						<div className=" flex justify-start items-center flex-col font-oswald">
							<div className="w-full h-96 flex justify-center items-start">
								<iframe
									width="100%"
									height="100%"
									src={course.video_url}
									title="YouTube video player"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									referrerPolicy="strict-origin-when-cross-origin"
									allowFullScreen
								></iframe>
							</div>
							<div className="w-full  flex justify-center flex-col gap-4 bg-slate-100 pt-6 pb-24">
								<h1 className="mx-16 text-3xl font-bold">{course.title}</h1>
								<h1 className="mx-16 text-xl font-light">
									<span className="text-xl">Description: </span>
									{course.description}
								</h1>
							</div>
							<div className="flex justify-center items-center">
								{displayQuiz ? (
									<Quiz download={download} />
								) : (
									<button
										className=" my-10 md:m-24 text-2xl md:text-lg bg-blue-700 py-4 px-8 md:py-3 md:px-6 text-white rounded-lg"
										onClick={() => setDisplayQuiz(true)}
									>
										Start Quiz
									</button>
								)}
							</div>
						</div>
					</>
				</>
			)}
		</>
	);
};

export default LearnCourse;
