import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedCourseDetails = ({ children }) => {
	let isUserAuthenticated = localStorage.getItem("loggedUser");
	return <>{isUserAuthenticated ? children : <Navigate to="/login/user" />}</>;
};

export default ProtectedCourseDetails;
