import {
	press,
} from './actions.js';

function listen( owo, )
{
	document.addEventListener( 'keydown', press.bind( owo, ), );
};

export default listen;
