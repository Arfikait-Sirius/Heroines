export const fnGetElement = ( type, value ) => {

     if( type === "id" ){
          return document.getElementById( value ) ;
     }else if( type === "class" ){
          return document.getElementByClassName( value ) ;
     }

     return undefined ;
} ;

export const fnGrantID = ( element, id ) => {
     element.setAttribute( "id", id ) ;
} ;

export const fnGrantClass = ( element, className ) => {
     element.setAttribute( "class", className ) ;
} ;

export const fnAppend = ( parent, child ) => {
     parent.appendChild( child ) ;
} ;
