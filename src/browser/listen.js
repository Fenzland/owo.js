import {
	press,
	click,
} from './actions.js';

function listen( owo, )
{
	document.addEventListener( 'keydown', press.bind( owo, ), );
	
	if( document.ontouchstart!==undefined )
	{
		document.addEventListener( 'tap', click.bind( owo, ), );
	}
	else{
		document.addEventListener( 'click', click.bind( owo, ), );
	}
};

export default listen;
