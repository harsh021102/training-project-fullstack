import axios from "axios";
import React from "react";

const AdminCourseCard = ({ id, title, price, imageUrl, loadCourses }) => {
	const handleDelete = async (cid) => {
		try {
			await axios.delete(`http://localhost:8082/api/course/${cid}`);
			loadCourses();
		} catch (error) {
			alert(error);
			console.log(error);
		}
	};

	return (
		<div className="flex rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-full">
			<div className="p-6 flex w-full justify-center items-center">
				<div className="flex flex-col md:flex-row justify-between items-center w-full">
					<div className="flex w-1/2 ">
						<h1 className="mb-2 ml-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
							Title:{" "}
						</h1>
						<h5 className="mb-2 ml-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
							{title}
						</h5>
					</div>
					<div className="flex w-1/2">
						<h1 className="mb-2 ml-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
							Price: {"₹"}
						</h1>
						<h5 className="mb-2 ml-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
							{price}
						</h5>
					</div>
				</div>
				<button
					onClick={() => handleDelete(id)}
					type="button"
					className="inline-block rounded bg-blue-700 px-6 pb-2 pt-2 text-xs font-normal uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
				>
					Delete Course
				</button>
			</div>
		</div>
	);
};

export default AdminCourseCard;
