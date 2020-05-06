import React from 'react';

const User = props => {
    console.log('user rendering');
    return (
        <div className='card'>
            <img src={props.avatar_url} />
            <div className='cardInfo'>
                <h3 className='name'>{props.name}</h3>
                <p className='username'>{props.login}</p>
                <p className='location'>{props.location}</p>
                <p className='profile'>{props.html_url}</p>
                <p className='followers'>{props.followers}</p>
                <p className='following'>{props.following}</p>
            </div>
        </div>
    );
};

export default User;