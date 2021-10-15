import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js';
import $ from 'jquery';
import Nav from './components/Nav';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.performSearch("marvel");
  }

  performSearch(searchTerm) {
    console.log("Perform search using moviedb"); 
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=f76f86dfb0269613cba4cca37c0418ff&language=en-US&page=1&include_adult=false&query=" + searchTerm;
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully")
        console.log(searchResults);
        const results = searchResults.results
        console.log(results[0])

        var movieRows = []

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path;
          const movieRow = <MovieRow movie={movie}/>
          movieRows.push(movieRow)
        })

        this.setState({rows: movieRows})
      },
        error: (xhr, status, error) => {
          console.log("Failed to fetch data")
        }
    })
  }

  searchChangeHandler(event) {
    console.log(event.target.value);
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm);
  }

  render() {
    return (
     

      <React.Fragment> 

          <section id="logo-header">
              <div id="main-logo">
                  <img src={require("./images/logo.png")} height="55" width="200" alt="The movie network"/>
              </div>
          </section>
      
          <section id="navigation">
              <ul>
                  <li><a href="http://www.google.ca" class="active">Home</a></li>
                  <li><a href="./components/upcoming.js">Upcoming</a></li>
                  <li><a href="http://www.google.ca">Top Rated</a></li>
                  <li><a href="http://www.google.ca">Movies</a></li>
                  <li><a href="http://www.google.ca">Tv Shows</a></li>
                  <li><a href="http://www.google.ca">Games</a></li>
                  <li><a href="http://www.google.ca">More</a></li>
              </ul>
          </section>
     
          <section id="jumbo-banner">
              <div id="newest-movies-banner">
                  <img src={require("./images/banner-right-arrow.png")} id="banner-arrow" alt="click to see the newest movies"/>
              </div>
          </section>
      <div class="container"> 
          <section id="main">
              <div id="search-section">
                  <div id="search-field">
                      <img src={require("./images/search-icon.png")} id="searchIcon" alt="search icon"/>
                      <form action="#" method="post">
                          <input type="text" name="item-title" onChange={this.searchChangeHandler.bind(this)} placeholder="SEARCH MOVIES"/>
                      </form>
                      <div class="suggestion-box">
                      <div class="suggestion">
                            <img src={require("./images/suggestion-tag.png")} alt="hint tag"/>
                            <p>Popular</p>
                        </div>
                        <div class="suggestion">
                            <img src={require("./images/suggestion-tag.png")} alt="hint tag"/>
                            <p>Adventure</p>
                        </div>
                        <div class="suggestion">
                            <img src={require("./images/suggestion-tag.png")} alt="hint tag"/>
                            <p>Animation</p>
                        </div>
                        <div class="suggestion">
                            <img src={require("./images/suggestion-tag.png")} alt="hint tag"/>
                            <p>Crime</p>
                        </div>
                        <div class="suggestion">
                            <img src={require("./images/suggestion-tag.png")} alt="hint tag"/>
                            <p>Documentary</p>
                        </div>
                        <div class="suggestion">
                            <img src={require("./images/suggestion-tag.png")} alt="hint tag"/>
                            <p>History</p>
                        </div>
                        <div class="suggestion">
                            <img src={require("./images/suggestion-tag.png")} alt="hint tag"/>
                            <p>Family</p>
                        </div>
                        <div class="suggestion">
                            <img src={require("./images/suggestion-tag.png")} alt="hint tag"/>
                            <p>Fantasy</p>
                        </div>
                        <div class="suggestion">
                            <img src={require("./images/suggestion-tag.png")} alt="hint tag"/>
                            <p>Music</p>
                        </div>
                        <div class="suggestion">
                            <img src={require("./images/suggestion-tag.png")} alt="hint tag"/>
                            <p>TV Movie</p>
                        </div>
                        <div class="suggestion">
                            <img src={require("./images/suggestion-tag.png")} alt="hint tag"/>
                            <p>War</p>
                        </div>
                        <div class="suggestion">
                            <img src={require("./images/suggestion-tag.png")} alt="hint tag"/>
                            <p>Science Fiction</p>
                        </div>
                        <div class="suggestion">
                            <img src={require("./images/suggestion-tag.png")} alt="hint tag"/>
                            <p>Comedy</p>
                        </div>
                        <div class="suggestion">
                            <img src={require("./images/suggestion-tag.png")} alt="hint tag"/>
                            <p>Romance</p>
                        </div>
                        <div class="suggestion">
                            <img src={require("./images/suggestion-tag.png")} alt="hint tag"/>
                            <p>Mistery</p>
                        </div>
                        <div class="suggestion">
                            <img src={require("./images/suggestion-tag.png")} alt="hint tag"/>
                            <p>Thriller</p>
                        </div>
                        <div class="suggestion">
                            <img src={require("./images/suggestion-tag.png")} alt="hint tag"/>
                            <p>Drama</p>
                        </div>
                      </div>
                  </div>
              </div>
          </section>

          <section id="movies">
          <div id="search-tag">
              <h1 id="movie-name-preview">Popular Movies</h1>
              <p id="search-results">35 results found in category <span id="search-tag-bolded">popular</span></p>
              <a href="http://www.google.ca"><i class="arrow down"></i> Filter</a>
          </div>
              {this.state.rows}
          
              {}
          </section>
          
      </div>
      <footer id="footer">
              <nav>
                  <ul>
                      <li>Movie API Providers: <a href="https://www.themoviedb.org/?language=en-US" class="websiteCredit" rel="noopener noreferrer" target="_blank">TheMovieDB</a></li>
                      <li><a href="http://www.cineplex.com" rel="noopener noreferrer"  class="websiteCredit"  target="_blank">Cineplex</a></li>
                      <li id="creds">© Movie Box 2019. All rights reserved. Website created by <a href="https://github.com/jorda13456" rel="noopener noreferrer" target="_blank" class="websiteCredit"  >Jordan Brown.</a></li>
                  </ul>
              </nav>
          </footer>
        </React.Fragment>
    );
  }
}

export default App;
