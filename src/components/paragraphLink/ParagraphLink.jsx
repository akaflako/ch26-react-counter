// Importar hojas de estilos
import '../../styles/paragraphLink/paragraph-link.css';
import PropTypes from 'prop-types';

// Props: Comunican los componentes padres con los componentes hijos.

const ParagraphLink = ( {href, color, children} ) => { // clave: "valor" , href: "valor"

    //console.log( props);

    const myParagraph = (
     <>
        <a
        className = 'color-anchor'
        style = {  { color: color  }  } 
        id = 'anchor-paragraph'
        href = { href }
        target = '_blank'
        >
        <p> {children} </p>
        </a>
    </>
    );

    return myParagraph;
};

ParagraphLink.propTypes = {
    href: PropTypes.string.isRequired
}

export default ParagraphLink; // exportacion por default.

/*
Desestructuracion:

*/