import { getInitialData } from '../utils/api';
import { receiveUsers } from './users';
import { receiveTweets } from './tweets';
import { setAuthedUser } from './authUser';
import { showLoading, hideLoading } from 'react-redux-loading';

const authUser = 'karinfdez';
export function handleInitialData () {
    return (dispatch) => {  //This func will use the Redux thunk pattern to do an asynchronous request
        dispatch(showLoading())
        return getInitialData()
        .then(({ users, tweets }) => {  //Add these to the redux store
            dispatch(receiveUsers(users))   //Dispatching actions to redux store
            dispatch(receiveTweets(tweets))
            dispatch(setAuthedUser(authUser))
            dispatch(hideLoading())
        })
    }
}