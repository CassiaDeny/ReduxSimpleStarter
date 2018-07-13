import React from 'react';
import ReactDOM from 'react-dom';

//create a new component. This component should produce some HTML
//aqui se cria a classe do componente
const App = () => {
    return <div>Hi!</div>;
}


//Take this component's generated HTML and put it on the page (in the DOM)
//aqui se instancia e adiciona no html declarado em index.html da raiz da aplicação
ReactDOM.render(<App />, document.querySelector('.container'));