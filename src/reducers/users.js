import { RECEIVE_USERS } from '../actions/users';


export default function users (state = {}, action) {  //reducer sets default state to an empty obj
    
    switch(action.type) {
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users
            }
        default :
            return state;
    }
}