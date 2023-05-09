import React from 'react';
import ReactDOM from 'react-dom/client';
// import { ParagraphLink } from './components/paragraphLink/ParagraphLink';
import P from './components/paragraphLink/ParagraphLink';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( 
  <React.StrictMode>

    <P href="https://youtube.com" color='red'> Página Youtube </P>
    <P href="https://web.whatsapp.com" color='green'> Página Whatsapp </P>
    <P href="https://twitch.com" color='purple'> Página Twitch </P>
    <P href="https://mexico.generation.org/" color='blue'> Página Generation </P>
    <P href="#" > Página CH 26 </P>

  </React.StrictMode>
);