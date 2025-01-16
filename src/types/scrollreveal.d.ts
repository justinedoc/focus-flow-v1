declare module "scrollreveal" {
  interface ScrollRevealOptions {
    origin?: "top" | "bottom" | "left" | "right";
    distance?: string;
    duration?: number;
    delay?: number;
    opacity?: number;
    scale?: number;
    easing?: string;
    container?: string | HTMLElement;
    mobile?: boolean;
    reset?: boolean;
    useDelay?: "always" | "once" | "onload";
    viewFactor?: number;
    viewOffset?: { top: number; right: number; bottom: number; left: number };
    beforeReveal?: (el: HTMLElement) => void;
    afterReveal?: (el: HTMLElement) => void;
    beforeReset?: (el: HTMLElement) => void;
    afterReset?: (el: HTMLElement) => void;
  }

  interface ScrollRevealObject {
    reveal(
      selector: string | HTMLElement | NodeListOf<Element>,
      options?: ScrollRevealOptions,
      interval?: number
    ): void;
    clean(selector: string | HTMLElement | NodeListOf<Element>): void;
  }

  export default function ScrollReveal(
    options?: ScrollRevealOptions
  ): ScrollRevealObject;
}
