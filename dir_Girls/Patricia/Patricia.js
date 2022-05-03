export const EVENT_TYPE = {
     ON_CLICK: "onclick",
     ON_CLICK_DOWN: "onmousedown",
     ON_CLICK_UP: "onmouseup"
} ;

export const fnCreate = () => {
     return document.createElement( "button" ) ;
} ;

export const fnGrantNotation = ( button, notation ) => {
     button.innerHTML = notation ;
} ;

export const drAddClickEvent = ( button, eventType, callback ) => {
     switch( eventType ){
          case EVENT_TYPE.ON_CLICK:
               button.onclick = callback ;
               break ;
          case EVENT_TYPE.ON_CLICK_DOWN:
               button.onmousedown = callback ;
               break ;
          case EVENT_TYPE.ON_CLICK_UP:
               button.onmouseup = callback ;
               break ;
          default:
               // Nothing to do.
     }
} ;
