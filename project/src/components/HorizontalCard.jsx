export const HorizontalCard = ({ name, number, image }) => {
	return (
		<div className="flex rounded-md shadow-sm shadow-slate-700 gap-6 cursor-pointer md:hover:scale-110 transition ease-in-out delay-150">
			<img
				src={image}
				alt="img"
				className="rounded-s-md w-24 h-24 bg-cover bg-no-repeat bg-center"
			/>
			<div className="flex justify-center items-start flex-col">
				<h1 className="text-xl">{name}</h1>
				<h2 className="text-sm">{number} courses</h2>
			</div>
		</div>
	);
};
