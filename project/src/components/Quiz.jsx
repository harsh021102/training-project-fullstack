"use client";
import React, { useState } from "react";
import { questions } from "../assets/links";
import Print from "./Print";
const Quiz = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [showDownloadCertificate, setShowDownloadCertificate] = useState(false);
	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
			setShowDownloadCertificate(true);
		}
	};

	const handleRetry = () => {
		setCurrentQuestion(0);
		setScore(0);
		setShowScore(false);
	};

	return (
		<div className="flex justify-center items-center my-16 bg-gray-100">
			<div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
				{showScore ? (
					<div className="text-center">
						<h1 className="text-2xl font-bold">
							You scored {score} out of {questions.length}
							<div className="w-full  flex justify-center items-center mt-16 md:mt-0">
								{showDownloadCertificate ? (
									<>
										<Print />
									</>
								) : (
									<></>
								)}
							</div>
						</h1>
						{score / questions.length < 0.7 && (
							<button
								onClick={handleRetry}
								className="mt-4 py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-700"
							>
								Try Again
							</button>
						)}
					</div>
				) : (
					<>
						<div className="mb-4">
							<h1 className="text-xl font-bold">
								{questions[currentQuestion].questionText}
							</h1>
						</div>
						<div className="space-y-4">
							{questions[currentQuestion].answerOptions.map(
								(answerOption, index) => (
									<button
										key={index}
										onClick={() =>
											handleAnswerOptionClick(answerOption.isCorrect)
										}
										className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
									>
										{answerOption.answerText}
									</button>
								)
							)}
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Quiz;
