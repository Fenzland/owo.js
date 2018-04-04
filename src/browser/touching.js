
let touching;

export function start( e, )
{
	touching= e;
}
export function move( e, )
{
	
}
export function stop( e, )
{
	if(
		touching.touches.length == 1
		&&
		touching.target === e.target
		&&
		touching.touches[0].clientX - e.changedTouches[0].clientX < 5
		&&
		touching.touches[0].clientY - e.changedTouches[0].clientY < 5
		&&
		e.timeStamp - touching.timeStamp < 300
	) tap( e, );
}

function tap( e, )
{
	const event= new MouseEvent( 'tap', e.changedTouches[0], );
	
	event.initEvent( 'tap', true, true, );
	
	e.target.dispatchEvent( event, );
}
