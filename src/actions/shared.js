<<<<<<< HEAD
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
=======
import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveTweets } from '../actions/tweets'
import { setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, tweets }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveTweets(tweets))
        dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading())
      })
  }
>>>>>>> c53a69a8b09a0dcab378761f683781c49ead072d
}