import { writable, type Writable } from 'svelte/store';

export const heading: Writable<HTMLElement> = writable();
export const showAnimation = writable(false);
export const animationStep: Writable<number> = writable(0);

export const terminalText = [
	{ content: '# it works for any language!', ms: 600, typewriter: true },
	{ content: '&nbsp;', ms: 2200, typewriter: false },

	{ content: 'ls lib', ms: 2200, typewriter: true },
	{ content: 'hello.hpp', ms: 2800, typewriter: false },
	{ content: 'hello.rs', ms: 2800, typewriter: false },
	{ content: 'hello.rb', ms: 2800, typewriter: false },
	{ content: '&nbsp;', ms: 2800, typewriter: false },

	{ content: 'python app.py', ms: 3300, typewriter: true },
	{
		content: 'sushi saving indexed functions',
		ms: 4300,
		typewriter: false
	},
	{ content: 'Hello from C++', ms: 5000, typewriter: false },
	{ content: 'Hello from rust', ms: 5500, typewriter: false },
	{ content: 'Hello from ruby', ms: 6000, typewriter: false }
];
