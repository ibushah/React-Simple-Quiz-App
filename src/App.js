import React, { Component } from 'react';
// import logo from './logo.svg';

import './App.css';
import Test from './Test'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      count: 0,
      show: false
    }
  }

  start() {
    this.setState({show:true})

  }
  componentDidMount()
  {
    fetch("https://opentdb.com/api.php?amount=10")
    .then((response)=>
    {
      return response.json();
    })
    .then((d)=>
    {
      this.setState({
        data:d.results
      })
      console.log(this.state.data)
    })
    .catch((error)=>
    {
      console.log(error)
    }
    )
  }

  next()
  {
    this.setState({
      count:this.state.count+1
    })
  }
  render() {
    return (
      <div className="app">
        {!this.state.show && <button style={{width:'60%',marginLeft:'20%',marginTop:'10%',height:'30px'}}  onClick={this.start.bind(this)}>Press the button to start your quiz</button>}
        {this.state.show && <Test next={this.next.bind(this)} count={this.state.count} data={this.state.data} />}
      </div>
    );
  }
}

export default App;
