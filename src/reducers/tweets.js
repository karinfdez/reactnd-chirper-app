import { RECEIVE_TWEETS } from '../actions/tweets';


export default function tweets (state = {}, action) {  //reducer sets default state to an empty obj
    
    switch(action.type) {
        case RECEIVE_TWEETS :
            return {
                ...state,
                ...action.tweets
            }
        default :
            return state;
    }
}