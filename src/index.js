import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './reducer/postreducer.js'
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store=createStore(reducer);
console.log("store",store);

ReactDOM.render(<Provider store={store}>,
<App />,
</Provider>, document.getElementById('root'));



