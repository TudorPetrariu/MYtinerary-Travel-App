import { CREATE_NEW_USER_SUCCES, CREATE_NEW_USER_REQUEST, CREATE_NEW_USER_FAILURE } from './Types';

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

export const fetchCreateUser = (body) => {
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
