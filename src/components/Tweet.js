import React, { Component } from 'react'
import { connect } from 'react-redux';
import { formatTweet } from '../utils/helpers';

class Tweet extends Component {
    render() {
        const { tweet } = this.props;
        if(!tweet) {
            return <p>This tweet doesn't exist</p>
        } 
        console.log('props', this.props);
        return (
            <div className='tweet'>

            </div>
        )
  }
}
function mapStateToProps ({authedUser, users, tweets}, {id}) { //id from props
    const tweet = tweets[id];
    const parentTweet = tweet ? tweets[tweet.replyingTo] : null
    //Later this object can be access as a prop on the Tweet comp
    return {
        authedUser,
        tweet: tweet 
        ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)  
        : null
    }
}

//Note: mapStateToProps accepts 2 arguments: 
//1. The state of the store (StoreState)
//2. The props passed to the Tweet component(ownProps)
//function mapStateToProps (StoreState, [ownProps])

export default connect(mapStateToProps)(Tweet);

