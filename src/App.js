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
    this.setState({videos: response.data.items, selectedVideo: response.data.items[0]})

    
  }

  onVideoSelect =(vid) => {
    //console.log('from the app', vid);
    this.setState({selectedVideo: vid});
  }


  render(){
    return (
      <div className="ui container">
          <SearchBar onSearchFormSubmit={this.onSearchSubmit}  />
          <div className="ui grid">
            <div className='ui row'>
              <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
              </div>

              <div className="five wide column">
              <VideoList  videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
              </div>
            </div>
          </div>
          
      </div>
    );
  }


}

export default App;
