export const fnCreate = () => {
     return document.createElement( "button" ) ;
} ;

export const fnGrantNotation = ( button, notation ) => {
     button.innerHTML = notation ;
} ;

export const drAddClickEvent = ( button, callback ) => {
     button.onclick = callback ;
} ;
