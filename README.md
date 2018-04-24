OwO.js (dev)
================================

I'm a capable document event manager.

## How do I work

I listen events on document, and understand them, 
then do works that you told me.

You can tell me what to do when an event is dispatched.
Or you can map a event to another, to make event readable and reusable.

With my help, you can build a complex event system easily. 
Such as a keymapping system.


## Usage

Basically listen a event to do something.

```js
import owo from 'https://some.cdn.host/path/to/owo.js';

let eventName= 'KEY:Enter:1';   // Event name.
let callback=  ()=>{};          // What to do.
let weight=    8;               // The larger the earlier executed. [default by 1]

let listener= owo.listen( eventName, callback, weight, );  // Listen a event.

owo.unlisten( eventName, listener, );  // Stop listening the event.

```

Mapping one event to another.

```js
owo.listen( 'quit', ()=>{ /**/ }, );
owo.listen( 'end-process', ()=>{ /**/ }, );

owo.map( 'KEY:Escape:0', 'quit', );           // Map key 'Esc' to event 'quit';
owo.map( 'KEY:Escape:0', 'end-process', );    // Change mapping key 'Esc' to event 'end-process';
owo.unmap( 'KEY:Escape:0', );                  // Stop mapping key 'ESC'.
```

Keyboards event.

```js
let eventName= `KEY:${keyName}:${modifier}`;

let commentOfModifiers= {
	 0: 'Single key',
	 1: ' + Shift',
	 2: ' + Ctrl',
	 3: ' + Ctrl+ Shift',
	 4: ' + Alt',
	 5: ' + Alt + Shift',
	 6: ' + Alt + Ctrl',
	 7: ' + Alt + Ctrl + Shift',
	 8: ' + Meta',
	 9: ' + Meta + Shift',
	10: ' + Meta + Ctrl',
	11: ' + Meta + Ctrl + Shift',
	12: ' + Meta + Alt',
	13: ' + Meta + Alt + Shift',
	14: ' + Meta + Alt + Ctrl',
	15: ' + Meta + Alt + Ctrl + Shift',
};

let keyNames= [
	'0','1','2','3','4','5','6','7','8','9',
	'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
	'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
	'F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12',
	'-','_','\'','"',';',':',',','?','.','!','/','\','$','%','`','~','{','}','[',']','(',')','>','<','=','@','*','^','&','|','+','#',
	'Shift','Control','Alt','Meta',
	'Enter',' ','Tab','Escape','BackSpace','Delete',
	'ArrowUp','ArrowDown','ArrowLeft','ArrowRight','PageUp','PageDown','Home','End',
	'ContextMenu','Print','Pause'
	'Insert','NumLock','CapsLock','ScrollLock',
];

```

Using click event.

```html
<div owo-click="close-dialog"></div>
<script type="module">
import owo from 'https://some.cdn.host/path/to/owo.js';

owo.listen( 'CLICK:close-dialog', ()=>{ /**/ }, );
</script>
```

Using Debuger.

```js
import owo from 'https://some.cdn.host/path/to/owo.js';
import debug from 'https://some.cdn.host/path/to/debuger.js';

debug( owo, )

// own.listen...
```

Ther debuger will dump event name with console.log when the event is dispatched.
