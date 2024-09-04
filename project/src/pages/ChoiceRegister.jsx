import { useNavigate } from "react-router-dom";

const ChoiceRegister = () => {
	const navigate = useNavigate();
	return (
		<>
			<section className="h-screen flex flex-col md:flex-row font-oswald">
				<div className="md:w-1/2 h-full flex justify-center items-center flex-col gap-5 bg-blue-100 py-16 md:py-2">
					<h1 className="text-4xl font-oswald font-bold text-blue-700">
						For admins
					</h1>
					<p className="text-center font-light text-xl  w-8/12">
						Sign up to manage and enhance our market-leading platform, ensuring
						we continue to identify and hire developers with the right skills.
					</p>
					<button
						className="w-8/12 md:w-4/12 mt-10 md:m-0 text-2xl md:text-lg bg-blue-700 py-4 px-8 md:py-2 md:px-6 rounded-md text-white font-medium"
						onClick={() => navigate("/register/admin")}
					>
						Sign up
					</button>
				</div>
				<div className="md:w-1/2 h-full flex justify-center items-center flex-col gap-5 py-16">
					<h1 className="text-4xl font-oswald font-bold ">For users</h1>
					<p className="text-center font-light text-xl w-8/12">
						Sign up to continue your journey with the market-leading platform
						for mastering technical skills and advancing your career.
					</p>
					<button
						className="w-8/12 md:w-4/12 mt-10 md:m-0 text-2xl md:text-lg py-4 px-8 md:py-2 md:px-6 rounded-md font-medium border-1 border-black"
						onClick={() => navigate("/register/user")}
					>
						Sign up
					</button>
				</div>
			</section>
		</>
	);
};

export default ChoiceRegister;
