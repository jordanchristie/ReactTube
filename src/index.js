import React from 'react';
import { render } from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import * as styles from './Style/style.css';

import SearchBar from './Components/SearchBar';
import VideoList from './Components/VideoList';
import VideoDetail from './Components/VideoDetail';



const API_KEY = 'AIzaSyC1glKwPQVNjvR3LBOFPnupkwT4lLCASTY';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videos: [],
      selectedVideo: null
    }

  this.videoSearch = this.videoSearch.bind(this);
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    });
  }


  render() {
    const videoSearch = _.debounce(term => this.videoSearch(term), 300);

    return (
      <div>
        <SearchBar onSearchInputChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>

    )
  }
  
}

render(<App style={styles}/>, document.getElementById('root'));
