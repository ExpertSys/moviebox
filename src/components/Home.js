import React, { Component } from 'react';
import '../App.css';
import MovieRow from '../MovieRow.js';
import LargeLogoHeader from '../components/LargeLogoHeader';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.performSearch("pokemon");
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
          <section id="jumbo-banner">
              <div id="newest-movies-banner">
                  <img src={require("../images/banner-right-arrow.png")} id="banner-arrow" alt="click to see the newest movies" width="60" height="30"/>
              </div>
          </section>
      <div class="container"> 
          <section id="main">
              <div id="search-section">
                  <div id="search-field">
                      <form action="#" method="post">
                      <img src={require("../images/search-icon.png")} id="searchIcon" alt="search icon" width="23"/>
                          <input type="text" name="item-title" onChange={this.searchChangeHandler.bind(this)} placeholder="SEARCH MOVIES"/>
                      </form>
                      <div class="suggestion-box">
                      <div class="suggestion">
                            <img src={require("../images/suggestion-tag.png")} alt="hint tag"/>
                            <p>Popular</p>
                        </div>
                        <div class="suggestion">
                            <img src={require("../images/suggestion-tag.png")} alt="hint tag"/>
                            <p>Adventure</p>
                        </div>
                        <div class="suggestion">
                            <img src={require("../images/suggestion-tag.png")} alt="hint tag"/>
                            <p>Animation</p>
                        </div>
                        <div class="suggestion">
                            <img src={require("../images/suggestion-tag.png")} alt="hint tag"/>
                            <p>Crime</p>
                        </div>
                        <div class="suggestion">
                            <img src={require("../images/suggestion-tag.png")} alt="hint tag"/>
                            <p>Documentary</p>
                        </div>
                        <div class="suggestion">
                            <img src={require("../images/suggestion-tag.png")} alt="hint tag"/>
                            <p>History</p>
                        </div>
                        <div class="suggestion">
                            <img src={require("../images/suggestion-tag.png")} alt="hint tag"/>
                            <p>Family</p>
                        </div>
                        <div class="suggestion">
                            <img src={require("../images/suggestion-tag.png")} alt="hint tag"/>
                            <p>Fantasy</p>
                        </div>
                        <div class="suggestion">
                            <img src={require("../images/suggestion-tag.png")} alt="hint tag"/>
                            <p>Music</p>
                        </div>
                        <div class="suggestion">
                            <img src={require("../images/suggestion-tag.png")} alt="hint tag"/>
                            <p>TV Movie</p>
                        </div>
                        <div class="suggestion">
                            <img src={require("../images/suggestion-tag.png")} alt="hint tag"/>
                            <p>War</p>
                        </div>
                        <div class="suggestion">
                            <img src={require("../images/suggestion-tag.png")} alt="hint tag"/>
                            <p>Science Fiction</p>
                        </div>
                        <div class="suggestion">
                            <img src={require("../images/suggestion-tag.png")} alt="hint tag"/>
                            <p>Comedy</p>
                        </div>
                        <div class="suggestion">
                            <img src={require("../images/suggestion-tag.png")} alt="hint tag"/>
                            <p>Romance</p>
                        </div>
                        <div class="suggestion">
                            <img src={require("../images/suggestion-tag.png")} alt="hint tag"/>
                            <p>Mistery</p>
                        </div>
                        <div class="suggestion">
                            <img src={require("../images/suggestion-tag.png")} alt="hint tag"/>
                            <p>Thriller</p>
                        </div>
                        <div class="suggestion">
                            <img src={require("../images/suggestion-tag.png")} alt="hint tag"/>
                            <p>Drama</p>
                        </div>
                      </div>
                  </div>
              </div>
          </section>

          <section id="movies">
          <div id="search-tag">
              <h1 id="movie-name-preview">Popular Movies</h1>
              <p id="search-results">20 results found in category <span id="search-tag-bolded">Pokemon</span></p>
              <a href="http://www.google.ca"><i class="arrow down"></i> Filter</a>
          </div>
              {this.state.rows}
          
              {}
          </section>
          
      </div>
      <footer>
                <div class="footer-logo">
                    <h1>M</h1>
                </div>
                <div class="site-map">
                    <ul id="site-map-left">
                      <li class="site-map-title">Movie Box</li>
                      <li>Tv Shows</li>
                      <li>Movies</li>
                      <li>Games</li>
                      <li>News</li>
                      <li>Videos</li>
                      <li class="site-map-title" id="site-map-api">API</li>
                      <li>Cineplex</li>
                      <li>The Movie Db</li>
                    </ul>
                    <ul id="site-map-right">
                      <li class="site-map-title">Social Media</li>
                      <li>Instagram</li>
                      <li>Facebook</li>
                      <li>Twitter</li>
                      <li>Youtube</li>
                      <li>Github</li>
                      <li class="site-map-title" id="site-map-api">Privacy Agreement</li>
                      <li>Terms of use</li>
                      <li>Privacy Policy</li>
                    </ul>
                    <div class="contact-box">
                      <p>All Site Content and © 2019 movie box, unless otherwise noted here. All rights reserved.</p>
                      <p>website created by jordan brown.</p>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
  }
}


export default App;