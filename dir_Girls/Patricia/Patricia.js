export const fnCreate = () => {
     return document.createElement( "button" ) ;
} ;

export const fnGrantLabel = ( button, label ) => {
     button.innerHTML = label ;
} ;

export const drAddClickEvent = ( button, callback ) => {
     button.onclick = callback ;
} ;
