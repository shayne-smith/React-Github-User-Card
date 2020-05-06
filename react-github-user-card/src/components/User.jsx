import React from 'react';

const User = props => {
    console.log('user rendering');
    console.log(props.location);
    return (
        <div className='card'>
            <img src={props.avatar_url} />
            <div className='cardInfo'>
                <h3 className='name'>{props.name}</h3>
                <p className='username'>{props.login}</p>
                <p className='location'>Location: {props.location}</p>
                <p className='profile'>Profile: {props.html_url}</p>
                <p className='followers'>Followers: {props.followers}</p>
                <p className='following'>Following: {props.following}</p>
            </div>
        </div>
    );
};

export default User;