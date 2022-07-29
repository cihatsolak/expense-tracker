import { SignInForm, User, UserDispatch } from "../../types/user"
import api from "../../utils/api";

export const signIn = (credentials: SignInForm) => async (dispatch: UserDispatch) => {
    dispatch({
        type: "LOGIN_START"
    });

    try {
        const response = await api.post<User>('/users/login', credentials);
        dispatch({
            type: "LOGIN_SUCCESS",
            payload: response.data
        });
    }
    catch (err) {
        dispatch({
            type: "LOGIN_ERROR"
        });
    }
}
