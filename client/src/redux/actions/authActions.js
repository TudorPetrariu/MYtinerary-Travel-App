import {
	CREATE_NEW_USER_SUCCES,
	CREATE_NEW_USER_REQUEST,
	CREATE_NEW_USER_FAILURE,
	USER_LOGIN_REQUEST,
	USER_LOGIN_FAILURE,
	USER_LOGIN_SUCCES,
	USER_LOGOUT
} from './Types';

//////USER LOGIN
export const LogInUserRequest = () => {
	return {
		type: USER_LOGIN_REQUEST
	};
};

export const LogInUserSucces = (users) => {
	return {
		type: USER_LOGIN_SUCCES,
		payload: users
	};
};

export const LogInUserFailure = (error) => {
	return {
		type: USER_LOGIN_FAILURE,
		payload: error
	};
};

export const LogIn = (body) => {
	return (dispatch) => {
		dispatch(LogInUserRequest());
		fetch('/user/LogIn', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		})
			.then((res) => {
				console.log(res);
				return res.json();
			})
			.then((json) => {
				console.log(json);
				dispatch(LogInUserSucces(json));
				localStorage.setItem('auth-token', json.token);
			})
			.catch((error) => {
				console.log(error);
				dispatch(LogInUserFailure(error.message));
			});
	};
};

///////////USER LOGOUT

export const userLogout = () => {
	return {
		type: USER_LOGOUT
	};
};

///////////////////////////// CREATE USER ACCOUNT

export const fetchUserRequest = () => {
	return {
		type: CREATE_NEW_USER_REQUEST
	};
};

export const createUser = (users) => {
	return {
		type: CREATE_NEW_USER_SUCCES,
		payload: users
	};
};

export const fetchUserFailure = (error) => {
	return {
		type: CREATE_NEW_USER_FAILURE,
		payload: error
	};
};

export const CreateAccount = (body) => {
	return (dispatch) => {
		dispatch(fetchUserRequest());
		fetch('user/SignUp', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		})
			.then((res) => res.json())
			.then((json) => {
				dispatch(createUser(json));
				console.log(json);
			})
			.catch((error) => {
				dispatch(fetchUserFailure(error.message));
			});
	};
};
