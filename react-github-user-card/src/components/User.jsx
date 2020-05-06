import React from 'react';

const User = props => {
    console.log('user rendering');
    console.log(props.location);
    return (
        <div className='card'>
            <img src={props.avatar_url} alt='Github user avatar' />
            <div className='cardInfo'>
                <h3 className='name'>{props.name}</h3>
                <p className='username'>{props.login}</p>
                <p className='profile'>Profile: <a href={props.html_url} target='_blank'>{props.html_url}</a></p>
                <p className='followers'>Followers: {props.followers}</p>
                <p className='following'>Following: {props.following}</p>
            </div>
        </div>
    );
};

export default User;