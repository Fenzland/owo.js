import OwO from './src/OwO.js';

export default function debug( owo )
{
	if(!( owo instanceof OwO ))
		throw 'This debuger only debugs instanceof OwO.';
	
	const dispatch= owo.dispatch;
	
	owo.dispatch= ( event, context, params, )=>{
		console.log( `event ${event} is dispatched` );
		
		dispatch.call( owo,  event, context, params, );
	}
};
