//https://api.themoviedb.org/3/search/movie?api_key=d272326e467344029e68e3c4ff0b4059&language=en-US&query=spiderman
import React from 'react';
import './App.css';
import Header from './components/Header';
import Poster from './components/Poster';
import Footer from './components/Footer';
class App extends React.Component {
 
 render(){
  return (
    <div className="App">
      <Header />
      <Poster />
      <Footer/>
    </div>
  );
 }
}

export default App;
