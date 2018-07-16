import React, { Component } from 'react';
// const Component = React.Component;

//aqui se cria um componente funcional
// const SearchBar = () => {
//     return <input />;
// };

//functional component vs a class based component

//aqui uma classe que define um componente
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: ''};
    }

    render() {
        // return <input onChange={this.onInputChange} />;
        return (
            <div className='search-bar'>
                <input 
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value) } />
            </div>
        );
    };

    //posso declarar o handler fora tb!
    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }
};

export default SearchBar;