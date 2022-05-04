export const fnGetElementFromId = ( id ) => {
     return document.getElementById( id ) ;
} ;
export const fnGetElementFromClass = ( className ) => {
     return document.getElementsByClassName( className ) ;
} ;

export const fnGrantID = ( element, id ) => {
     element.setAttribute( "id", id ) ;
} ;

export const fnGrantClass = ( element, className ) => {
     element.setAttribute( "class", className ) ;
} ;

export const fnGrantNotation = ( element, notation ) => {
     element.innerHTML = notation ;
} ;

export const fnAppend = ( parent, child ) => {
     parent.appendChild( child ) ;
} ;

export const fnAppendNewLine = ( parent ) => {
     parent.appendChild( document.createElement( "br" ) ) ;
} ;
