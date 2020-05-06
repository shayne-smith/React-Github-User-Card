import React from 'react';

import Follower from './Follower'

const FollowerList = props => {
    console.log('FollowerList rendering');
    return (
        <>
            {props.followers.map( (follower, index) => (
                <Follower 
                    avatar_url={follower.avatar_url} 
                    login={follower.login} 
                    html_url={follower.html_url}
                    key={index}
                />
            ))}
        </>
    );
};

export default FollowerList;