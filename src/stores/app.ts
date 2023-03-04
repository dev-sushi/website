import { writable, type Writable } from 'svelte/store';

export const heading: Writable<HTMLElement> = writable();
export const showAnimation = writable(false);
export const animationStep: Writable<number> = writable(0);
