import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

class Footer extends React.Component{



    render() {
        return (
          <div>
         <footer className="single-column">
          <nav>
          <div class="join">
            <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="The Movie Database (TMDb)" width="130" height="94"/>
  
            
              <a class="rounded" href="/account/signup?language=en-US">Join the Community</a>
            
          </div>
  
          <div>
            <h4>The Basics</h4>
            <ul>
              <li><a href="/about?language=en-US">About TMDb</a></li>
              <li><a href="/about/staying-in-touch?language=en-US">Contact Us</a></li>
              <li><a href="/talk?language=en-US">Support Forums</a></li>
              <li><a href="/documentation/api?language=en-US">API</a></li>
              <li><a href="https://status.themoviedb.org/" rel="noopener">System Status</a></li>
            </ul>
          </div>
          <div>
            <h4>Get Involved</h4>
            <ul>
              <li><a href="/bible?language=en-US"><span class="glyphicons glyphicons-asterisk"></span> Contribution Bible</a></li>
              <li><a href="/apps?language=en-US">3rd Party Applications</a></li>
              <li><a href="/movie/new?language=en-US">Add New Movie</a></li>
              <li><a href="/tv/new?language=en-US">Add New TV Show</a></li>
            </ul>
          </div>
          <div>
            <h4>Community</h4>
            <ul>
              <li><a href="/documentation/community/guidelines?language=en-US">Guidelines</a></li>
              <li><a href="/discuss?language=en-US">Discussions</a></li>
              <li><a href="/leaderboard?language=en-US">Leaderboard</a></li>
              <li><a href="https://twitter.com/themoviedb"  rel="noopener">Twitter</a></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><a href="/documentation/website/terms-of-use?language=en-US">Terms of Use</a></li>
              <li><a href="/documentation/api/terms-of-use?language=en-US">API Terms of Use</a></li>
              <li><a href="/privacy-policy?language=en-US">Privacy Policy</a></li>
            </ul>
          </div>
        </nav>
        </footer>
        <div className="small-footer">
        <a class="logo" href="/">
        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="The Movie Database (TMDb)" width="154" height="20"/>
        </a>  
        <a href="/"><p id="small-comm">
            JOIN THE COMMUNITY
        </p>   
        </a>                                   
        </div>
        </div>             
        );
    }
}

export default Footer;