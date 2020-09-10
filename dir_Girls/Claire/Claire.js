export const fnCreate = () => {
     return document.createElement( "video" ) ;
} ;

export const fnSetSource = ( video, src ) => {
     video.setAttribute( "src", src ) ;
} ;

export const fnStart = ( video ) => {
	video.play() ;
} ;

export const fnStop = ( video ) => {
	video.pause() ;
} ;