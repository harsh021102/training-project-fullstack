import { useState } from "react";
import mindsprint from "../assets/mindsprint-logo.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginUser = () => {
	const navigate = useNavigate();
	const [student, setStudent] = useState({ email: "", password: "" });
	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const resp = await axios.post(
				"http://localhost:8082/api/student/login",
				student
			);
			if (resp.status == 200) {
				localStorage.setItem("loggedUser", student.email);
				navigate("/dashboard/user");
			}
		} catch (error) {
			alert(error);
		}
	};

	return (
		<div className="h-screen flex justify-center items-center font-oswald">
			<div className="hidden h-screen w-6/12 md:flex justify-center items-center md:flex-auto bg-black">
				<video
					src="https://hrcdn.net/fcore/assets/onboarding/globe-5fdfa9a0f4.mp4"
					autoPlay
					muted
					loop
					className="hidden h-screen object-cover md:flex brightness-30"
				/>
			</div>
			<div className="w-11/12 md:w-6/12  flex justify-center items-center ">
				<div className="h-full w-11/12 flex flex-col justify-center items-center">
					<img src={mindsprint} alt="logo" className="my-6" />
					<h1 className="w-11/12 text-wrap text-start text-3xl mb-2 font-bold">
						Welcome Back!
					</h1>
					<h1 className="w-11/12 text-wrap text-start text-xl mb-2 font-semibold">
						Login to your account as user
					</h1>
					<p className="w-11/12 text-wrap text-start text-sm m-3 font-light">
						Its nice to see you again.
					</p>
					<form
						type="submit"
						className="w-full flex justify-center flex-col items-center gap-5"
						onSubmit={handleLogin}
					>
						<input
							type="email"
							placeholder="Your email"
							required
							className="w-11/12 rounded-md outline-none p-3 bg-white font-light"
							style={{ border: "1px solid gray" }}
							value={student.email}
							onChange={(e) =>
								setStudent({ ...student, email: e.target.value })
							}
						/>
						<input
							type="password"
							placeholder="Your password"
							required
							className="w-11/12 rounded-md outline-none p-3 bg-white font-light"
							style={{ border: "1px solid gray" }}
							value={student.password}
							onChange={(e) =>
								setStudent({ ...student, password: e.target.value })
							}
						/>
						<button
							type="submit"
							className="w-10/12 mt-10 md:m-0 text-2xl md:text-lg bg-blue-700 py-4 px-8 md:py-3 md:px-6 text-white rounded-lg"
						>
							Login
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default LoginUser;
