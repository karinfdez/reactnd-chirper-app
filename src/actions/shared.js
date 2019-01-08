import { getInitialData } from '../utils/api';
import { receiveUsers } from 'users';
import { receiveTweets } from 'tweets';

export function handleInitalData () {
    return (dispatch) => {  //This func will use the Redux thunk pattern to do an asynchronous request
        return getInitialData()
        .then(({ users, tweets }) => {  //Add these to the redux store
            dispatch(receiveUsers(users))
            dispatch(receiveTweets(tweets))
        })
    }
}