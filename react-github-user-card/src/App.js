import React from 'react';
import axios from 'axios';

import List from './components/List';
import FollowerList from './components/FollowerList'

import './App.css';
import lambdaLogo from './assets/lambdalogo.png'
import githubLogo from './assets/githublogo.png'

//   {
      //   avatar_url: 'https://avatars0.githubusercontent.com/u/34349978?v=4',
      //   name: 'shayne smith',
      //   location: 'Tennessee',
      //   profile: 'https://github.com/shayne-smith',
      //   followers: 17,
      //   following: 26,
      //   bio: null
      // },{
      //   avatar_url: 'https://avatars0.githubusercontent.com/u/34349978?v=4',
      //   name: 'shayne smith',
      //   location: 'Tennessee',
      //   profile: 'https://github.com/shayne-smith',
      //   followers: 17,
      //   following: 26,
      //   bio: null
      // },
      // {
      //   avatar_url: 'https://avatars0.githubusercontent.com/u/34349978?v=4',
      //   name: 'shayne smith',
      //   location: 'Tennessee',
      //   profile: 'https://github.com/shayne-smith',
      //   followers: 17,
      //   following: 26,
      //   bio: null
      // }

class App extends React.Component {
  constructor() {
    console.log("constructor is running");
    super();
    this.state = {
      userList: [],
      followers: []
    };
  };

  componentDidMount() {
    console.log("cDM is running");
    axios.get("https://api.github.com/users/shayne-smith")
      .then(res => {
        console.log(res)
        this.setState({
          userList: [...this.state.userList, res.data]
         })
      })
      .catch(err => {
        console.log(err);
      })

    axios.get("https://api.github.com/users/shayne-smith/followers")
      .then(res => {
        console.log(res)
        // res.data.map( (follower, index) => {
        //   this.setState({
        //     followers: [...this.state.followers, follower]
        //   })
        // })
        this.setState({
          followers: this.state.followers.concat(res.data)
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidUpdate() {
    console.log("cDU is running");
    console.log(this.state.userList);
    console.log(this.state.followers);
  }

  render() {
    console.log('render has started');
    return (
      <div className="App container">
        <div className="header">
          <img src={lambdaLogo} alt="Lambda Logo"/>
          <p><span role='img'>❤️'s</span></p>
          <img src={githubLogo} alt="GitHub Logo" />
        </div>
        <div className='users'>
          {/* {this.state.userList.map(user => (
            <div>{user}</div>
          ))} */}
          <List 
            userList={this.state.userList}
          />
          <FollowerList 
            followers={this.state.followers}
          />
        </div>
      </div>
    );
  }
}

export default App;

