import constants from './minecraft.constants';
const initialState = {
    online: false,
    users: []
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case constants.ONLINE: // Chekcs if server is online
            return {
                ...state,
                online: payload
            }

        case constants.USERS: //Register a new user
            return {
                ...state,
                users: payload
            };
        default:
            return state;
    }
};