import React from 'react';
import axios from 'axios';

import List from './components/List';

import './App.css';

class App extends React.Component {
  constructor() {
    console.log("constructor is running");
    super();
    this.state = {
      userList: []
    };
  };

  componentDidMount() {
    console.log("cDM is running");
    axios.get("https://api.github.com/users/shayne-smith")
      .then(res => {
        this.setState({ 
          userList: res.data
         })
         console.log(this.state.userList);
      })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidUpdate() {
    console.log("cDU is running");
  }

  render() {
    return (
      <div className="App">
        <div className='users'>
          {/* {this.state.userList.map(user => (
            <div>{user}</div>
          ))} */}
          <List 
            userList={this.state.userList}
          />
        </div>
      </div>
    );
  }
}

export default App;

