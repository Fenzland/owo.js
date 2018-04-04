import {
	press,
	click,
} from './actions.js';

import {
	start as touchStart,
	move as touchMove,
	stop as touchStop,
} from './touching.js';

////////////////////////////////////////////////////////////////

function listen( owo, )
{
	document.addEventListener( 'keydown', press.bind( owo, ), );
	
	if( document.ontouchstart!==undefined )
	{
		document.addEventListener( 'touchstart', touchStart, );
		document.addEventListener( 'touchmove', touchMove, );
		document.addEventListener( 'touchend', touchStop, );
		document.addEventListener( 'touchcancel', touchStop, );
		
		document.addEventListener( 'tap', click.bind( owo, ), );
	}
	else{
		document.addEventListener( 'click', click.bind( owo, ), );
	}
};

export default listen;
