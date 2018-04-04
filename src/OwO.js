import Listener from './Listener.js';

////////////////////////////////////////////////////////////////

class OwO
{
	constructor()
	{
		this.listeners= {};
		this.mappings= {};
	}
	
	listen( event, callback, weight=1, )
	{
		const listeners= (
			this.listeners[event] || (
				this.listeners[event]= []
			)
		);
		
		const listener= new Listener( callback, weight, );
		
		listeners.push( listener, );
		
		listeners.sort( ( x, y, )=>(x.weight - y.weight), );
		
		return listener;
	}
	
	unlisten( event, listener, )
	{
		const listeners= this.listeners[event];
		
		if(!(  listeners  )) return;
		
		let index= listeners.indexOf( listener, );
		
		if(!( index >= 0 )) return;
		
		listeners.splice( index, 1, );
	}
	
	map( event, target, )
	{
		this.mappings[event]= target;
	}
	
	unmap( event, )
	{
		this.mappings[event]= undefined;
	}
	
	dispatch( event, context, params, )
	{
		const listeners= this.listeners[event];
		const mapped= this.mappings[event];
		
		if( listeners )
		{
			for( let i= listeners.length-1; i>=0; i-- )
			{
				const result= listeners[i].call( context, params, );
				
				if( result ) return result;
			}
		}
		
		if( mapped )
		{
			return this.dispatch( mapped, );
		}
	}
}

export default OwO;
