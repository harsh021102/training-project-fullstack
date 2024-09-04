import mindsprint from "../assets/mindsprint-logo.svg";

const Footer = () => {
	return (
		<footer className="px-3 pt-4 lg:px-9 mt-3">
			<div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
				<div className="sm:col-span-2">
					<a href="#" className="inline-flex items-center">
						<img src={mindsprint} alt="logo" className="" />
					</a>
					<div className="mt-6 lg:max-w-xl">
						<p className="text-sm text-gray-800">
							At Mindsprint, we believe in transforming lives through
							accessible, high-quality education. Our platform partners with top
							universities and organizations worldwide to offer courses,
							specializations, and degrees in a wide range of subjects. Whether
							you’re looking to advance your career, explore new interests, or
							gain new skills, Coursera provides the tools and resources to help
							you achieve your goals. Join our global community of learners and
							start your journey today!
						</p>
					</div>
				</div>

				<div className="flex flex-col gap-2 text-sm">
					<p className="text-base font-bold tracking-wide text-gray-900">
						Popular Courses
					</p>
					<a href="#">C++</a>
					<a href="#">Python</a>
					<a href="#">Kubernetes</a>
					<p className="text-base font-bold tracking-wide text-gray-900">
						Popular Topics
					</p>
					<a href="#">Science</a>
					<a href="#">Programming</a>
					<a href="#">Cloud</a>
				</div>

				<div>
					<p className="text-base font-bold tracking-wide text-gray-900">
						WE ARE ALSO AVAILABLE ON
					</p>
					<div className="flex items-center gap-1 px-2">
						<a href="#" className="w-full min-w-xl">
							<img
								src="https://mcqmate.com/public/images/icons/playstore.svg"
								alt="Playstore Button"
								className="h-10"
							/>
						</a>
						<a
							className="w-full min-w-xl"
							href="https://www.youtube.com/channel/UCo8tEi6SrGFP8XG9O0ljFgA"
						>
							<img
								src="https://mcqmate.com/public/images/icons/youtube.svg"
								alt="Youtube Button"
								className="h-28"
							/>
						</a>
					</div>
					<p className="text-base font-bold tracking-wide text-gray-900">
						Contacts
					</p>
					<div className="flex">
						<p className="mr-1 text-gray-800">Email:</p>
						<a href="#" title="send email">
							admin@company.com
						</a>
					</div>
				</div>
			</div>
			<div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
				<p className="text-sm text-gray-600">
					© Copyright 2024 Company. All rights reserved.
				</p>
				<ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
					<li>
						<a
							href="#"
							className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
						>
							Privacy &amp; Cookies Policy
						</a>
					</li>
					<li>
						<a
							href="#"
							className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
						>
							Disclaimer
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
