const sfnCreateInputElement = ( type, id = undefined ) => {
     const element = document.createElement( "input" ) ;
     
     element.type = type ;
     element.id = id ;

     return element ;
} ;

export const fnGetElementFromId = ( id ) => {
     return document.getElementById( id ) ;
} ;
export const fnGetElementFromClass = ( className ) => {
     return document.getElementsByClassName( className ) ;
} ;

export const fnCreateTextbox = ( id = undefined ) => {
     return sfnCreateInputElement( "text", id ) ;
} ;
export const fnCreateCheckbox = ( id = undefined ) => {
     return sfnCreateInputElement( "checkbox", id ) ;
} ;
export const fnCreateRadio = ( id = undefined ) => {
     return sfnCreateInputElement( "radio", id ) ;
} ;

export const fnCreateButton = ( id = undefined ) => {
     const element = document.createElement( "button" ) ;
     
     element.id = id ;

     return element ;
} ;

export const fnCreateLabel = ( id = undefined ) => {
     const element = document.createElement( "label" ) ;
     
     element.id = id ;

     return element ;
} ;

export const fnGrantID = ( element, id ) => {
     element.id = id ;
} ;

export const fnGrantClass = ( element, className ) => {
     element.className = className ;
} ;

export const fnSetText = ( element, text ) => {
     element.innerHTML = text ;
} ;

export const fnAppend = ( parent, child ) => {
     parent.appendChild( child ) ;
} ;

export const fnAppendNewLine = ( parent ) => {
     parent.appendChild( document.createElement( "br" ) ) ;
} ;

export const drAddClickEvent = ( element, func ) => {
     element.onclick = func ;
} ;
