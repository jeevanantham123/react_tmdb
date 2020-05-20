import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {Button} from 'react-bootstrap';
class Poster extends React.Component{
  constructor(props)
  { super(props);
    this.state={
    search_value:'',
    movie:'',
    loading :true
  }
  this.movieslist=[]
  this.updatevalue=this.updatevalue.bind(this);
  this.fetchmovie=this.fetchmovie.bind(this);
  this.handlesubmit=this.handlesubmit.bind(this);
  }
  updatevalue(e){
    this.setState({
      search_value:e.target.value
    })
  }
  fetchmovie = async val =>{
    const url="https://api.themoviedb.org/3/search/movie?api_key=d272326e467344029e68e3c4ff0b4059&language=en-US&query="+val;
    const response = await fetch(url);
    const data =await response.json();
    //console.log(JSON.stringify(data));
    this.setState({movie:data.results,loading:false})
    this.movieslist=this.state.movie;
    console.log(this.movieslist);
  }
  handlesubmit(e){
  this.fetchmovie(this.state.search_value);
    this.setState({
      search_value:''
    })
  }
    render(){
        return(
          <div>
            <div className="poster">
                <div className="title_head">
                  <h2>Welcome.</h2>
                  <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
                </div>
                <div className="search">
                <input
                type="text"
                placeholder="Search for movie,Tv shows ..."
                value={this.state.search_value}
                onChange={this.updatevalue}
                />
                
                <Button id="search-input" type="button" onClick={this.handlesubmit}><b>search</b></Button>
                
              </div>
            </div>
            <div>
            {this.state.loading || !this.state.movie ? (
                <div>
                  <Falseload/>
                </div>
            ):(
                <div>
        <table class="table">
        <thead>
          <tr>
            <th colSpan="2">Search results..</th>  
          </tr>
        </thead>
        <tbody>
          {this.state.movie.map(todo => (
            <tr key={todo.id}>
              <td>
                <img src={"https://image.tmdb.org/t/p/w500"+todo.poster_path} alt="Poster not available"/>
              </td>
              <td>
              <b>Title:&nbsp;{todo.title}</b>  
              <br/>
              <b>Rating:&nbsp;{todo.vote_average}</b>
              <br/>
              <p style={{"color":"grey"}}>Release Date:{todo.release_date}</p>
              <br/>
              <b style={{"color":"grey","marginBottom":"0px"}}>{todo.overview}</b> 
              </td>               
            </tr>
          ))}
        </tbody>
      </table>
                    </div>
                
            )}
            </div>
          </div>
        )
    }
}

class Falseload extends React.Component{
  render() {
    return (
      <div className="falseload">
        <div class="column_content flex">
          <div class="column">
            <h5>Get access to maintain your own <em>custom personal lists</em>, <em>track what you've seen</em> and search and filter for <em>what to watch next</em>—regardless if it's in theatres, on TV or available on popular streaming services like Netflix, Amazon Prime Video, and Hotstar.</h5>
            <Button variant="primary">Sign Up</Button>
          </div>

          <div class="column">
            <ul>
              <li>Enjoy TMDb ad free</li>
              <li>Maintain a personal watchlist</li>
              <li>Filter by your subscribed streaming services and find something to watch</li>
              <li>Log the movies and TV shows you've seen</li>
              <li>Build custom lists</li>
              <li>Contribute to and improve our database</li>
            </ul>
          </div>

        </div>
      </div>
    );
  }
}
export default Poster;