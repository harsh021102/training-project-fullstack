import React from "react";
import { useNavigate } from "react-router-dom";
import { TERipple } from "tw-elements-react";

const Card = () => {
	const navigate = useNavigate();
	const handleclick = (cid) => {
		navigate(`/dashboard/coursedetails/${cid}`);
	};
	return (
		<div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
			<TERipple>
				<div className="relative overflow-hidden bg-cover bg-no-repeat">
					<img
						className="rounded-t-lg bg-cover bg-no-repeat bg-center"
						src={imageUrl}
						alt=""
					/>
					<a href="#!">
						<div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
					</a>
				</div>
			</TERipple>
			<div className="p-6 flex flex-col justify-between h-full">
				<div className="flex flex-col justify-between">
					<div>
						<h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
							{company}
						</h5>
						<h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
							{course}
						</h5>
					</div>
					<p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
						{type}
					</p>
				</div>
				<button
					onClick={() => handleclick(id)}
					type="button"
					className="inline-block rounded bg-blue-700 px-6 pb-2 pt-2 text-xs font-normal uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
				>
					Open Course
				</button>
			</div>
		</div>
	);
};

export default Card;
