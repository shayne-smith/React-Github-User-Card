import React from 'react';

import User from './User'

const FollowerList = props => {
    console.log('FollowerList rendering');
    return (
        <>
            {props.followers.map( (follower, index) => (
                <User 
                    avatar_url={follower.avatar_url} 
                    name={follower.name} 
                    login={follower.login} 
                    location={follower.location}
                    profile={follower.profile}
                    followers={follower.followers}
                    following={follower.following}
                    bio={follower.bio}
                    key={index}
                />
            ))}
        </>
    );
};

export default FollowerList;