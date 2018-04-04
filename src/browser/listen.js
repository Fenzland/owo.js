import {
	press,
	click,
} from './actions.js';

function listen( owo, )
{
	document.addEventListener( 'keydown', press.bind( owo, ), );
	document.addEventListener( 'click', click.bind( owo, ), );
};

export default listen;
