import { useState } from "react";

export const useContextData = () => {
	// Global Authentication State
	const [loggedIn, setLoggedIn] = useState(false);
	const [user, setUser] = useState(null);

	return {
		loggedIn,
		setLoggedIn,
		user,
		setUser,
	};
};
