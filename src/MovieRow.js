import React from 'react'

class MovieRow extends React.Component{
    viewMovie(){
        console.log(this.props.movie.title)

        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
    }

    render() {
        return <div class="movie-block">
        <div class="movie-cover">  
            <img src={this.props.movie.poster_src} alt="movie title" width="169" height="252" onClick={this.viewMovie.bind(this)}/>
            <div class="newbox"></div>
        </div>
        <div class="movie-name">
            <p class="film-title">{this.props.movie.title}</p>
            <p class="film-desc">Mar 8, 2019</p>
            <p class="film-genre">Fantasy</p>
            <p class="film-rating">RATINGS</p> 
        </div><br></br>
        {/* <input type="button" onClick={this.viewMovie.bind(this)} value="More Info" id="view-more-btn"/> */}
    </div>
    }
}

export default MovieRow