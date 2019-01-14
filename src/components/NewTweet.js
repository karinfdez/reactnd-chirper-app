import React, { Component } from 'react'

export default class NewTweet extends Component {
    state = {
        text: ''
    }

    handleChange = (e) => {
        this.setState({text: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({text: ''});
    }

    render() {
        const { text } = this.state;
        const maxLength = 280;
        const tweetLeft = maxLength - text.length;

        return (
            <div> 
                <h3 className='center'>Compose new tweet</h3>
                <form className='new-tweet' onSubmit={this.handleSubmit}>
                    <textarea 
                        placeholder="What's happening?"
                        value={text}
                        onChange={this.handleChange}
                        className='textarea'
                        maxLength={maxLength}
                    />
                    {tweetLeft <= 100 && (
                        <div className='tweet-length'>
                            {tweetLeft}
                        </div>
                    )}
                    <button
                        className='btn'
                        type='submit'
                        disabled={text === ''}>
                        Submit
                    </button>
                </form>
            </div>
        )
  }
}
