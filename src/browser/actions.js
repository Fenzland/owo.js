export function press( e, )
{
	const modifier= (e.shiftKey&&1)|(e.ctrlKey&&2)|(e.altKey&&4)|(e.metaKey&&8);
	
	this.dispatch( `KEY:${e.key}:${modifier}`, ) && e.preventDefault();
}
