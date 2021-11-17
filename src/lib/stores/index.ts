import { browser } from "$app/env";
import { get, writable } from "svelte/store";


export const slideIndex = writable(0);
if (browser) {
  if (window.location.hash) {
    const index = parseInt(window.location.hash.replace("#", ""));
    slideIndex.set(index);
  }
  slideIndex.subscribe(v => {
    window.location.hash = v + "";
  })
}

export const slideAmount = writable(0);

export const slideTitle = writable("")

export const nextSlide = () => slideIndex.update((index) => Math.min(get(slideAmount) - 1, index + 1));

export const previousSlide = () => slideIndex.update((index) => Math.max(0, index - 1));

