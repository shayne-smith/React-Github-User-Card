import React from 'react';

import User from './User'

const List = props => {
    console.log('userList rendering');
    return (
        props.userList.map(user => (
            <User 
                avatar_url={user.avatar_url} 
                name={user.name} 
                login={user.login} 
                profile={user.profile}
                followers={user.followers}
                following={user.following}
            />
        ))
    );
};

export default List;