import React from 'react';
import ReactDOM from 'react-dom/client';
// import { ParagraphLink } from './components/paragraphLink/ParagraphLink';
import P from './components/paragraphLink/ParagraphLink';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( 
  <React.StrictMode>

    <P href="https://youtube.com" color='red'> Pagina Youtube </P>
    <P href="https://web.whatsapp.com" color='green'> Pagina Whatsapp</P>
    <P href="https://twitch.com" color='pruple'> Pagina Twitch</P>

  </React.StrictMode>
);