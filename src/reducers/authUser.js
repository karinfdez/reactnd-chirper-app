import { SEND_AUTH_USER } from '../actions/authUser';


export default function authUser(state = null, action) {
    switch(action.type) {
        case SEND_AUTH_USER: 
            return action.id
        default:
            return state;
    }
}