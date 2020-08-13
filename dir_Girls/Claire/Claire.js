export const fnCreate = () => {
     return document.createElement( "video" ) ;
} ;

export const fnSetAutoplay = ( video, isAutoplay ) => {
     if( isAutoplay ){
          return ;
     }
     video.setAttribute( "autoplay", isAutoplay ) ;
} ;

export const fnSetSource = ( video, src ) => {
     video.setAttribute( "src", src ) ;
} ;
