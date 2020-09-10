export const FIX = {
	ID: "id",
	CLASS: "class"
} ;

export const fnGetElement = ( type, value ) => {

     if( type === FIX.ID ){
          return document.getElementById( value ) ;
     }else if( type === FIX.CLASS ){
          return document.getElementByClassName( value ) ;
     }

     return undefined ;
} ;

export const fnGrantID = ( element, id ) => {
     element.setAttribute( FIX.ID, id ) ;
} ;

export const fnGrantClass = ( element, className ) => {
     element.setAttribute( FIX.CLASS, className ) ;
} ;

export const fnAppend = ( parent, child ) => {
     parent.appendChild( child ) ;
} ;
