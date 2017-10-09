import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route, Redirect, Switch} from 'react-router-dom'
import '../App/App.css';
import TheaterSearch from '../TheaterSearch/TheaterSearch.js';
import ResultsWindow from '../ResultsWindow/ResultsWindow.js';
import axios from "axios";




//main landing page for search
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      theaters: [],
      movies: [],
      user: null,
      theaterResult: null,
    }
    this.changeTheaterResult = this.changeTheaterResult.bind(this)
  }

  componentDidMount() {
    axios.get('https://cmps-backend.herokuapp.com/api/theaters').then((res) => {
      console.log(res)
      this.setState({theaters: res.data})
      console.log(this.state.theaters)
    }).catch((err) => {
      console.log(err)
    })
  }


  changeTheaterResult(theaterResult) {
    this.setState({theaterResult})
  }





  render() {
    return (

      <div className="App">

        <nav className="homeNav">
          <h4>Movies</h4>
          <h4>Theaters</h4>
        </nav>

        <header className="App-header">
          <h1 className="App-title">CMPS</h1>
          <h5 className="subheading">Cinema Movie Play Schedule</h5>
        </header>
        <p className="App-intro">
          Welcome to CMPS, Your theater and movie source for Washington, DC!
        </p>


        <div className="theaterMenu">
          <Router>


              <Route path="/" render={() => {
                    return (
                      <div>
                        {/* <MovieSearch /> */}

                        <TheaterSearch changeTheaterResult={this.changeTheaterResult} theaters={this.state.theaters}/>

                        <ResultsWindow theaterResult={this.state.theaterResult}/>

                      </div>
                    )
                  }}
                />



          </Router>

        </div>
      </div>



    );
  }
}

export default App;
