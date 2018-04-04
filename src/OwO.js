import Listener from './Listener.js';

class OwO
{
	constructor()
	{
		this.listeners= {};
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
}

export default OwO;
