import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';
import KEYS from './../key'; 

//create a new component. This component should produce some HTML
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };
        
    };

    render() {
        return (
            <div>
                <SearchBar />
            </div>
        );
    } 
}

//Take this component's generated HTML and put it on the page (in the DOM)
//aqui se instancia e adiciona no html declarado em index.html da raiz da aplicação
ReactDOM.render(<App />, document.querySelector('.container'));