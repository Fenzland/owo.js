
class Listener
{
	constructor( callback, weight=1, )
	{
		this.callback= callback;
		this.weight= weight;
	}
	
	call( context, params, )
	{
		return this.callback.call( context, params, );
	}
}

export default Listener;
