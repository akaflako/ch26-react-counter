// Props: Comunican los componentes padres con los componentes hijos.

const ParagraphLink = ( {href, color, children} ) => { // clave: "valor" , href: "valor"

    //console.log( props);

    const myParagraph = (
     <>
        <a
        style = {  { textDecoration: 'none', color: color  }  } 
        href = { href }
        target = '_blank'
        >
        <p> {children} </p>
        </a>
    </>
    );

    return myParagraph;
};

export default ParagraphLink; // exportacion por default.

/*
Desestructuracion:

*/