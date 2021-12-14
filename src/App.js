import React from "react";
import SearchBar from "./SearchBar";
import youtube from '../src/api/youtube';
import VideoList from '../src/videoList/VideoList';
import VideoDetail from '../src/videoDetail/VideoDetail';


class App extends React.Component  {
  state = {videos : [], selectedVideo: null };

  onSearchSubmit = async (searchString) => {
    console.log(searchString);

    const response = await youtube.get('/search', {
      params: {
        q: searchString
      }
    });
    
    //console.log(response.data.items);
    this.setState({videos: response.data.items})

    
  }

  onVideoSelect =(vid) => {
    //console.log('from the app', vid);
    this.setState({selectedVideo: vid});
  }


  render(){
    return (
      <div className="ui container">
          <SearchBar onSearchFormSubmit={this.onSearchSubmit}  />
          <VideoDetail video={this.state.selectedVideo} />
          
          <VideoList  videos={this.state.videos} onVideoSelect={this.onVideoSelect} />

          
          
      </div>
    );
  }


}

export default App;
