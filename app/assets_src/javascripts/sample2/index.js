import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/_header';
import Main from './components/_main';
import Footer from './components/_footer';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>,
        document.getElementById('sample2-root')
    )
});
