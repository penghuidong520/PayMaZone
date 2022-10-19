import csrfFetch from "./csrf.js";

export const SET_CURRENT_USER = 'session/setCurrentUser';
export const REMOVE_CURRENT_USER = 'session/removeCurrentUser';

const setCurrentUser = (payload) => ({
    type: SET_CURRENT_USER,
    payload
});

const removeCurrentUser = () => ({
    type: REMOVE_CURRENT_USER
});

const storeCSRFToken = response => {
    const csrfToken = response.headers.get("X-CSRF-Token");
    if (csrfToken) sessionStorage.setItem("X-CSRF-Token", csrfToken);
}

const storeCurrentUser = user => {
    if (user) sessionStorage.setItem("currentUser", JSON.stringify(user));
    else sessionStorage.removeItem("currentUser");
}


export const login = ({ credential, password }) => async dispatch => {
    const response = await csrfFetch("/api/session", {
        method: "POST",
        body: JSON.stringify({ credential, password })
    });
    const data = await response.json();
    storeCurrentUser(data.user);
    dispatch(setCurrentUser(data));
};

export const restoreSession = () => async dispatch => {
    const response = await csrfFetch("/api/session");
    storeCSRFToken(response);
    const data = await response.json();
    storeCurrentUser(data.user);
    dispatch(setCurrentUser(data));
};

export const signup = (user) => async (dispatch) => {
    const { username, email, password } = user;
    const response = await csrfFetch("/api/users", {
        method: "POST",
        body: JSON.stringify({
            username,
            password,
            email
        })
    });
    const data = await response.json();
    storeCurrentUser(data.user);
    dispatch(setCurrentUser(data));
};

export const logout = () => async (dispatch) => {
    await csrfFetch("/api/session", {
        method: "DELETE"
    });
    storeCurrentUser(null);
    dispatch(removeCurrentUser());
};

const initialState = { 
    user: JSON.parse(sessionStorage.getItem("currentUser"))
};

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            if (!action.payload) return state;
            return { ...state, user: action.payload.user };
        case REMOVE_CURRENT_USER:
            return { ...state, user: null };
        default:
            return state;
    }
};

export default sessionReducer;
