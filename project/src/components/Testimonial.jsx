const Testimonial = () => {
	return (
		<div className="py-5 dark:bg-gray-900 rounded-lg">
			<div className="container flex flex-col items-center justify-center w-full p-6 mx-auto text-center xl:px-0">
				<div className="text-sm font-bold tracking-wider text-indigo-600 uppercase font-oswald">
					Testimonials
				</div>
				<h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white font-oswald">
					Here's what our customers said
				</h2>
			</div>
			<div className="container p-6 mx-auto mb-10 xl:px-0">
				<div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
					<div className="lg:col-span-2 xl:col-auto">
						<div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
							<p className="text-2xl leading-normal dark:text-gray-300 font-oswald">
								Share a{" "}
								<mark className="mx-1 text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-20 font-oswald">
									testimonial
								</mark>{" "}
								that hits some of your benefits from one of your popular
								customers.
							</p>
							<div className="flex items-center mt-8 space-x-3">
								<div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
									<img
										alt="Avatar"
										src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwMTQ5ODEx&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=100&amp;h=100"
										loading="lazy"
									/>
								</div>
								<div>
									<div className="text-lg font-medium text-gray-600 font-oswald">
										Sarah Steiner
									</div>
									<div className="text-gray-600 dark:text-gray-400 font-oswald">
										VP Sales at Google
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="">
						<div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
							<p className="text-2xl leading-normal dark:text-gray-600 font-oswald">
								Make sure you only pick the{" "}
								<mark className="mx-1 text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
									right sentence
								</mark>{" "}
								to keep it short and simple.
							</p>
							<div className="flex items-center mt-8 space-x-3">
								<div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
									<img
										alt="Avatar"
										src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;crop=faces&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80"
										loading="lazy"
									/>
								</div>
								<div>
									<div className="text-lg font-medium text-gray-600 font-oswald">
										Dylan Ambrose
									</div>
									<div className="text-gray-600 dark:text-gray-400 font-oswald">
										Lead marketer at Netflix{" "}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="">
						<div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
							<p className="text-2xl leading-normal dark:text-gray-300 font-oswald">
								This is an{" "}
								<mark className="mx-1 text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200 font-oswald">
									awesome
								</mark>{" "}
								landing page template I've seen. I would use this for anything.
							</p>
							<div className="flex items-center mt-8 space-x-3">
								<div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
									<img
										alt="Avatar"
										src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;crop=faces&amp;q=80"
										loading="lazy"
									/>
								</div>
								<div>
									<div className="text-lg font-medium text-gray-600 font-oswald">
										Gabrielle Winn
									</div>
									<div className="text-gray-600 dark:text-gray-400 font-oswald">
										Co-founder of Acme Inc
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
