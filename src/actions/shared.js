import { getInitialData } from '../utils/api';
import { receiveUsers } from './users';
import { receiveTweets } from './tweets';
import { setAuthUser } from './authUser';

const authUser = 'karinfdez';
export function handleInitialData () {
    return (dispatch) => {  //This func will use the Redux thunk pattern to do an asynchronous request
        return getInitialData()
        .then(({ users, tweets }) => {  //Add these to the redux store
            console.log('USERS', users);
            console.log('TWEETS', tweets);
            dispatch(receiveUsers(users))   //Dispatching actions to redux store
            dispatch(receiveTweets(tweets))
            dispatch(setAuthUser(authUser))
        })
    }
}