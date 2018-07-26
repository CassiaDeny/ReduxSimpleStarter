import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';
import YTSearch from 'youtube-api-search';
import KEYS from './../key'; 

//create a new component. This component should produce some HTML
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null,
         };

        this.videoSearch('surfboards');

    };

    videoSearch(term) {
        YTSearch({key: KEYS.api, term }, videos => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0],
            });
        });
    }

    render() {
        const videoSearch = _.debounce(term => { this.videoSearch(term) }, 300);

        return (
            <div>
                <SearchBar 
                 onSearchTermChange = {videoSearch} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelected={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    } 
}

//Take this component's generated HTML and put it on the page (in the DOM)
//aqui se instancia e adiciona no html declarado em index.html da raiz da aplicação
ReactDOM.render(<App />, document.querySelector('.container'));