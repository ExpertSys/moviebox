import React, { Component } from 'react';
import '../Upcoming.css';

// Start of our Upcoming page. Extend from component
class Upcoming extends Component{
  constructor(props) {
    super(props);
  }

  // Render out the contents of all upcoming movies 
  render() {
    return (
        <div>
            <div id="banner-container">
                <div class="image-container">
                    <div class="banner-details">
                    <img src={require("../images/dark-logo.png")} id="dark-phoenix-title" width="129" height="61"/>
                    <p>every hero has a darkside. in threatres june 7.</p>
                    <div class="banner-btns">
                        <button id="trailer-btn">Watch Trailer</button>
                        <button id="learn-btn">Learn More</button>
                    </div>
                    </div>
                    <img src={require("../images/hero-banner.png")} id="hero-banner-large" width="1440" height="545.1" />
                </div>

                <div class="banner-navigation">
                    <ul>
                      <li id="banner-active"></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                </div>
                
            </div>

            <div id="content" class="flex-direction">
                <sidebar id="filter-options"> 
                    <h1>Filters</h1>
                    <ul>
                        <li>Genre <span class="expand-menu"></span></li>
                        <li>Date <span class="expand-menu"></span></li>
                        <li>Ratings <span class="expand-menu"></span></li>
                        <li>Country <span class="expand-menu"></span></li>
                    </ul>
                </sidebar>

                <section id="main-content">
                    <h1>Upcoming Movies</h1>
                    <p class="movie-date">June 1st - August 28th</p>
                    <hr id="line"></hr>

                    <section id="upcoming-movies">
                        <figure class="movie-list">
                             <div class="movie-desc-box">
                                <img src={require("../images/captainmarvel-block.png")} alt="movie-title-here" height="318" width="212"/>
                                <div class="description-container">  
                                  <p class="film-title">Captain Marvel</p>
                                  <p class="film-date">July 1st, 2019</p>
                                  <p class="film-desc">Captain Marvel is an extraterrestrial Kree warrior who finds herself caught in the middle of an intergalactic battle between her people and the Skrulls. Living on Earth in 1995, she keeps having recurring memories of another life as U.S.</p>
                                  <button id="more-info-btn">More Info</button>
                                </div>
                            </div>
                            
                            <div class="movie-desc-box">
                            <img src={require("../images/godzilla-poster.png")} alt="movie-title-here" height="318" width="212"/>
                                <div class="description-container">
                                  <p class="film-title">Godzilla</p>
                                  <p class="film-date">July 1st, 2019</p>
                                  <p class="film-desc">Captain Marvel is an extraterrestrial Kree warrior who finds herself caught in the middle of an intergalactic battle between her people and the Skrulls. Living on Earth in 1995, she keeps having recurring memories of another life as U.S.</p>
                                  <button id="more-info-btn">More Info</button>
                                </div>
                            </div>
                            <div class="movie-desc-box">
                            <img src={require("../images/spiderman-poster.png")} alt="movie-title-here" height="318" width="212"/>
                                <div class="description-container">
                                  <p class="film-title">Spiderman</p>
                                  <p class="film-date">July 1st, 2019</p>
                                  <p class="film-desc">Captain Marvel is an extraterrestrial Kree warrior who finds herself caught in the middle of an intergalactic battle between her people and the Skrulls. Living on Earth in 1995, she keeps having recurring memories of another life as U.S.</p>
                                  <button id="more-info-btn">More Info</button>
                                </div>
                            </div>
                            <div class="movie-desc-box">
                            <img src={require("../images/mib-poster.png")} alt="movie-title-here" height="318" width="212"/>
                                <div class="description-container">
                                  <p class="film-title">Men In Black</p>
                                  <p class="film-date">July 1st, 2019</p>
                                  <p class="film-desc">Captain Marvel is an extraterrestrial Kree warrior who finds herself caught in the middle of an intergalactic battle between her people and the Skrulls. Living on Earth in 1995, she keeps having recurring memories of another life as U.S.</p>
                                  <button id="more-info-btn">More Info</button>
                                </div>
                            </div>
                            <div class="movie-desc-box">
                            <img src={require("../images/captive-poster.png")} alt="movie-title-here" height="318" width="212"/>
                                <div class="description-container">
                                  <p class="film-title">Captive state</p>
                                  <p class="film-date">July 1st, 2019</p>
                                  <p class="film-desc">Captain Marvel is an extraterrestrial Kree warrior who finds herself caught in the middle of an intergalactic battle between her people and the Skrulls. Living on Earth in 1995, she keeps having recurring memories of another life as U.S.</p>
                                  <button id="more-info-btn">More Info</button>
                                </div>
                            </div>
                        </figure>

                        <div id="movie-page-nav">
                            <ul>
                                <li class="movie-nav-hover">
                                    <img src={require("../images/left-arrow.png")} alt="left arrow" />
                                </li>
                                <li id="page-nav-active" class="movie-nav-hover">
                                    1
                                </li>
                                <li class="movie-nav-hover">
                                    2
                                </li>
                                <li class="movie-nav-hover">
                                    3
                                </li>
                                <li class="movie-nav-hover">
                                    4
                                </li>
                                <li>
                                <img src={require("../images/right-arrow.png")} alt="right arrow" />
                                </li>
                            </ul>
                        </div>
                    </section>

                    <h1>Recent Releases</h1>
                    <p class="movie-date">Movies just released</p>
                    <hr id="line"></hr>
                    <section id="recent-content">
                        <div class="recent-release-film">
                            <img src={require("../images/john-wick-poster.png")} alt="John Wick" width="212" height="318"/>
                            <div class="title-section spacing">
                                <p class="recent-title">John Wick 3: Parabellum</p>
                                <img src={require("../images/heart-btn.png")} alt="favorite button" width="16" height="15"/>
                            </div>
                            <p class="recent-date spacing">Jan 22, 2019</p>
                            <div class="movie-details">
                                <div id="genre-tag" class="spacing">
                                    <img src={require("../images/fantasy-button.png")} alt="Genre: Fantasy" width="11" height="11"/>
                                    <p class="movie-type-tag">Fantasy</p>
                                </div>
                                <div id="rating-tag" class="spacing">   
                                    <img src={require("../images/ratings-button.png")} id="ratings-tag" alt="Genre: Fantasy" width="11" height="11"/>
                                    <p class="movie-type-tag">Ratings</p>
                                </div>
                            </div>
                        </div>
                        <div class="recent-release-film">
                            <img src={require("../images/dark-phoenix-poster.png")} alt="John Wick" width="212" height="318"/>
                            <div class="title-section spacing">
                                <p class="recent-title">Dark Pheonix</p>
                                <img src={require("../images/heart-btn.png")} alt="favorite button" width="16" height="15"/>
                            </div>
                            <p class="recent-date spacing">Jan 22, 2019</p>
                            <div class="movie-details">
                                <div id="genre-tag" class="spacing">
                                    <img src={require("../images/fantasy-button.png")} alt="Genre: Fantasy" width="11" height="11"/>
                                    <p class="movie-type-tag">Fantasy</p>
                                </div>
                                <div id="rating-tag" class="spacing">   
                                    <img src={require("../images/ratings-button.png")} id="ratings-tag" alt="Genre: Fantasy" width="11" height="11"/>
                                    <p class="movie-type-tag">Ratings</p>
                                </div>
                            </div>
                        </div>
                        <div class="recent-release-film">
                            <img src={require("../images/ma-poster.png")} alt="John Wick" width="212" height="318"/>
                            <div class="title-section spacing">
                                <p class="recent-title">Ma</p>
                                <img src={require("../images/heart-btn.png")} alt="favorite button" width="16" height="15"/>
                            </div>
                            <p class="recent-date spacing">Jan 22, 2019</p>
                            <div class="movie-details">
                                <div id="genre-tag" class="spacing">
                                    <img src={require("../images/fantasy-button.png")} alt="Genre: Fantasy" width="11" height="11"/>
                                    <p class="movie-type-tag">Fantasy</p>
                                </div>
                                <div id="rating-tag" class="spacing">   
                                    <img src={require("../images/ratings-button.png")} id="ratings-tag" alt="Genre: Fantasy" width="11" height="11"/>
                                    <p class="movie-type-tag">Ratings</p>
                                </div>
                            </div>
                        </div>
                        <div class="recent-release-film">
                            <img src={require("../images/pokemon-poster.png")} alt="John Wick" width="212" height="318"/>
                            <div class="title-section spacing">
                                <p class="recent-title">Pokemon: Detective</p>
                                <img src={require("../images/heart-btn.png")} alt="favorite button" width="16" height="15"/>
                            </div>
                            <p class="recent-date spacing">Jan 22, 2019</p>
                            <div class="movie-details">
                                <div id="genre-tag" class="spacing">
                                    <img src={require("../images/fantasy-button.png")} alt="Genre: Fantasy" width="11" height="11"/>
                                    <p class="movie-type-tag">Fantasy</p>
                                </div>
                                <div id="rating-tag" class="spacing">   
                                    <img src={require("../images/ratings-button.png")} id="ratings-tag" alt="Genre: Fantasy" width="11" height="11"/>
                                    <p class="movie-type-tag">Ratings</p>
                                </div>
                            </div>
                        </div>
                        <div class="recent-release-film">
                            <img src={require("../images/rocketman-poster.png")} alt="John Wick" width="212" height="318"/>
                            <div class="title-section spacing">
                                <p class="recent-title">Rocketman</p>
                                <img src={require("../images/heart-btn.png")} alt="favorite button" width="16" height="15"/>
                            </div>
                            <p class="recent-date spacing">Jan 22, 2019</p>
                            <div class="movie-details">
                                <div id="genre-tag" class="spacing">
                                    <img src={require("../images/fantasy-button.png")} alt="Genre: Fantasy" width="11" height="11"/>
                                    <p class="movie-type-tag">Fantasy</p>
                                </div>
                                <div id="rating-tag" class="spacing">   
                                    <img src={require("../images/ratings-button.png")} id="ratings-tag" alt="Genre: Fantasy" width="11" height="11"/>
                                    <p class="movie-type-tag">Ratings</p>
                                </div>
                            </div>
                        </div>
                        <div class="recent-release-film">
                            <img src={require("../images/brightburn-poster.png")} alt="John Wick" width="212" height="318"/>
                            <div class="title-section spacing">
                                <p class="recent-title">Brightburn</p>
                                <img src={require("../images/heart-btn.png")} alt="favorite button" width="16" height="15"/>
                            </div>
                            <p class="recent-date spacing">Jan 22, 2019</p>
                            <div class="movie-details">
                                <div id="genre-tag" class="spacing">
                                    <img src={require("../images/fantasy-button.png")} alt="Genre: Fantasy" width="11" height="11"/>
                                    <p class="movie-type-tag">Fantasy</p>
                                </div>
                                <div id="rating-tag" class="spacing">   
                                    <img src={require("../images/ratings-button.png")} id="ratings-tag" alt="Genre: Fantasy" width="11" height="11"/>
                                    <p class="movie-type-tag">Ratings</p>
                                </div>
                            </div>
                        </div>
                        <div class="recent-release-film">
                            <img src={require("../images/fivefeet-poster.png")} alt="John Wick" width="212" height="318"/>
                            <div class="title-section spacing">
                                <p class="recent-title">Five Feet Apart</p>
                                <img src={require("../images/heart-btn.png")} alt="favorite button" width="16" height="15"/>
                            </div>
                            <p class="recent-date spacing">Jan 22, 2019</p>
                            <div class="movie-details">
                                <div id="genre-tag" class="spacing">
                                    <img src={require("../images/fantasy-button.png")} alt="Genre: Fantasy" width="11" height="11"/>
                                    <p class="movie-type-tag">Fantasy</p>
                                </div>
                                <div id="rating-tag" class="spacing">   
                                    <img src={require("../images/ratings-button.png")} id="ratings-tag" alt="Genre: Fantasy" width="11" height="11"/>
                                    <p class="movie-type-tag">Ratings</p>
                                </div>
                            </div>
                        </div>
                        <div class="recent-release-film">
                            <img src={require("../images/booksmart-poster.png")} alt="John Wick" width="212" height="318"/>
                            <div class="title-section spacing">
                                <p class="recent-title">Booksmart</p>
                                <img src={require("../images/heart-btn.png")} alt="favorite button" width="16" height="15"/>
                            </div>
                            <p class="recent-date spacing">Jan 22, 2019</p>
                            <div class="movie-details">
                                <div id="genre-tag" class="spacing">
                                    <img src={require("../images/fantasy-button.png")} alt="Genre: Fantasy" width="11" height="11"/>
                                    <p class="movie-type-tag">Fantasy</p>
                                </div>
                                <div id="rating-tag" class="spacing">   
                                    <img src={require("../images/ratings-button.png")} id="ratings-tag" alt="Genre: Fantasy" width="11" height="11"/>
                                    <p class="movie-type-tag">Ratings</p>
                                </div>
                            </div>
                        </div>
                        <div class="recent-release-film">
                            <img src={require("../images/little-poster.png")} alt="John Wick" width="212" height="318"/>
                            <div class="title-section spacing">
                                <p class="recent-title">Little</p>
                                <img src={require("../images/heart-btn.png")} alt="favorite button" width="16" height="15"/>
                            </div>
                            <p class="recent-date spacing">Jan 22, 2019</p>
                            <div class="movie-details">
                                <div id="genre-tag" class="spacing">
                                    <img src={require("../images/fantasy-button.png")} alt="Genre: Fantasy" width="11" height="11"/>
                                    <p class="movie-type-tag">Fantasy</p>
                                </div>
                                <div id="rating-tag" class="spacing">   
                                    <img src={require("../images/ratings-button.png")} id="ratings-tag" alt="Genre: Fantasy" width="11" height="11"/>
                                    <p class="movie-type-tag">Ratings</p>
                                </div>
                            </div>
                        </div>
                        <div class="recent-release-film">
                            <img src={require("../images/dumbo-poster.png")} alt="John Wick" width="212" height="318"/>
                            <div class="title-section spacing">
                                <p class="recent-title">Dumbo</p>
                                <img src={require("../images/heart-btn.png")} alt="favorite button" width="16" height="15"/>
                            </div>
                            <p class="recent-date spacing">Jan 22, 2019</p>
                            <div class="movie-details">
                                <div id="genre-tag" class="spacing">
                                    <img src={require("../images/fantasy-button.png")} alt="Genre: Fantasy" width="11" height="11"/>
                                    <p class="movie-type-tag">Fantasy</p>
                                </div>
                                <div id="rating-tag" class="spacing">   
                                    <img src={require("../images/ratings-button.png")} id="ratings-tag" alt="Genre: Fantasy" width="11" height="11"/>
                                    <p class="movie-type-tag">Ratings</p>
                                </div>
                            </div>
                        </div>
                        <button id="recent-all-btn">View All</button>
                    </section>   
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
        </div>
    );
}
}

  export default Upcoming;
