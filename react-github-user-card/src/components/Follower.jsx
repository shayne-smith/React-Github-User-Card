import React from 'react';

const Follower = props => {
    console.log('Follower rendering');
    return (
        <div className='card'>
            <img src={props.avatar_url} alt='Github user avatar' />
            <div className='followerCardInfo'>
                <h3 className='username'>{props.login}</h3>
                <p className='profile'>Profile: <a href={props.html_url} target='_blank'>{props.html_url}</a></p>
            </div>
        </div>
    );
};

export default Follower;