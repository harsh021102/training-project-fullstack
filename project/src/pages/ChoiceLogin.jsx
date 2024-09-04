import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const ChoiceLogin = () => {
	const navigate = useNavigate();

	return (
		<>
			<section className="h-screen flex flex-col md:flex-row">
				<div className="md:w-1/2 h-full flex justify-center items-center flex-col gap-5 bg-blue-100 py-16 md:py-2">
					<h1 className="text-4xl font-oswald font-bold text-blue-700 ">
						For admins
					</h1>
					<p className="text-center font-light text-xl  w-8/12 font-oswald">
						Log in to manage and enhance our market-leading platform, ensuring
						we continue to identify and hire developers with the right skills.
					</p>
					<button
						className="w-8/12 md:w-4/12 mt-10 md:m-0 text-2xl md:text-lg bg-blue-700 py-4 px-8 md:py-2 md:px-6 rounded-md text-white font-medium font-oswald"
						onClick={() => navigate("/login/admin")}
					>
						Login
					</button>
				</div>
				<div className="md:w-1/2 h-full flex justify-center items-center flex-col gap-5 py-16">
					<h1 className="text-4xl font-oswald font-bold ">For users</h1>
					<p className="text-center font-extralight text-xl w-8/12 font-oswald">
						Log in to continue your journey with the market-leading platform for
						mastering technical skills and advancing your career.
					</p>
					<button
						className="w-8/12 md:w-4/12 mt-10 md:m-0 text-2xl md:text-lg py-4 px-8 md:py-2 md:px-6 font-oswald rounded-md font-medium"
						style={{ border: "1px solid black" }}
						onClick={() => navigate("/login/user")}
					>
						Login
					</button>
				</div>
			</section>
			<section className="px-3 lg:px-24  pt-14">
				<Footer />
			</section>
		</>
	);
};

export default ChoiceLogin;
