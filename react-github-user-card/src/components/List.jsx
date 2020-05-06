import React from 'react';

import User from './User'

const List = props => {
    console.log('userList rendering');
    return (
        <>
            {props.userList.map( (user, index) => (
                <User 
                    avatar_url={user.avatar_url} 
                    name={user.name} 
                    login={user.login} 
                    location={user.location}
                    html_url={user.html_url}
                    followers={user.followers}
                    following={user.following}
                    bio={user.bio}
                    key={index}
                />
            ))}
        </>
    );
};

export default List;