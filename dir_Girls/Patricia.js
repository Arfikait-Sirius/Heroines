export const fnCreate = () => {
     return document.createElement( "button" ) ;
} ;

export const fnGrantLabel = ( button, label ) => {
     button.innerHTML = label ;
} ;

export const drSet = ( button, callback ) => {
     button.addEventListener( "click", callback ) ;
} ;
