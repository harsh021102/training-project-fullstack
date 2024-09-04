import { useState } from "react";
import mindsprint from "../assets/mindsprint-logo.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterAdmin = () => {
	const [admin, setAdmin] = useState({ name: "", email: "", password: "" });
	const navigate = useNavigate();
	const handleRegister = async (e) => {
		e.preventDefault();
		try {
			const resp = await axios.post("http://localhost:8082/api/admin", admin);
			if (resp.status == 201) {
				alert("Resgistered admin successfully");
				navigate("/login");
			}
		} catch (error) {
			alert(error);
		}
	};
	return (
		<div className="h-screen flex justify-center items-center flex-row-reverse font-oswald">
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
				<div className="h-full w-11/12 flex flex-col justify-center items-center ">
					<img src={mindsprint} alt="logo" className="my-6" />
					<h1 className="w-11/12 text-wrap text-start text-3xl mb-2 font-bold">
						Create you Account as admin!
					</h1>
					<p className="w-11/12 text-wrap text-start text-sm m-3 font-light">
						Be part of a 23 million-strong community of developers
					</p>
					<form
						type="submit"
						className="w-full flex justify-center flex-col items-center gap-5"
						onSubmit={handleRegister}
					>
						<input
							type="text"
							placeholder="Name"
							required
							className="w-11/12 rounded-md outline-none p-3 bg-white font-light"
							style={{ border: "1px solid gray" }}
							value={admin.name}
							onChange={(e) => setAdmin({ ...admin, name: e.target.value })}
						/>
						<input
							type="email"
							placeholder="Email"
							required
							className="w-11/12 rounded-md outline-none p-3 bg-white font-light"
							style={{ border: "1px solid gray" }}
							value={admin.email}
							onChange={(e) => setAdmin({ ...admin, email: e.target.value })}
						/>
						<input
							type="password"
							placeholder="Your password"
							required
							className="w-11/12 rounded-md outline-none p-3 bg-white font-light"
							style={{ border: "1px solid gray" }}
							value={admin.password}
							onChange={(e) => setAdmin({ ...admin, password: e.target.value })}
						/>
						<button
							type="submit"
							className="w-10/12 mt-10 md:m-0 text-2xl md:text-lg bg-blue-700 py-4 px-8 md:py-3 md:px-6 text-white rounded-lg"
						>
							Sign up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default RegisterAdmin;