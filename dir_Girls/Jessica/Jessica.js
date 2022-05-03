export const ELEMENT_TYPE = {
     ID: "id",
     CLASS: "class"
} ;

export const fnGetElement = ( type, value ) => {

     if( type === ELEMENT_TYPE.ID ){
          return document.getElementById( value ) ;
     }else if( type === ELEMENT_TYPE.CLASS ){
          return document.getElementByClassName( value ) ;
     }

     return undefined ;
} ;

export const fnGrantID = ( element, id ) => {
     element.setAttribute( ELEMENT_TYPE.ID, id ) ;
} ;

export const fnGrantClass = ( element, className ) => {
     element.setAttribute( ELEMENT_TYPE.CLASS, className ) ;
} ;

export const fnAppend = ( parent, child ) => {
     parent.appendChild( child ) ;
} ;

export const fnGrantNewLine = ( parent ) => {
     parent.appendChild( document.createElement( "br" ) ) ;
} ;
