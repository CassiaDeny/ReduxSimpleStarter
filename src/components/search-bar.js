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
        this.state = { term: 'Escreva algo aqui'};
    }

    render() {
        // return <input onChange={this.onInputChange} />;
        return (
            <div>
                <input 
                value={this.state.term}
                onChange={event => this.setState({ term: event.target.value} )} />
                Value of the input: { this.state.term }
            </div>
        );
    };

    //posso declarar o handler fora tb!
    onInputChange(event) {
        console.log(event.target.value);
    }
};

export default SearchBar;