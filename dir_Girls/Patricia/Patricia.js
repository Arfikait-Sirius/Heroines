export const fnCreate = () => {
     return document.createElement( "button" ) ;
} ;

export const drAddClickEvent = ( button, callback ) => {
     button.onclick = callback ;
} ;
export const drAddClickDownEvent = ( button, callback ) => {
     button.onmousedown = callback ;
} ;
export const drAddClickUpEvent = ( button, callback ) => {
     button.onmouseup = callback ;
} ;
