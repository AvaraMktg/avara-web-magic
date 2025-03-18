
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

interface ScrollTriggerOptions {
  trigger?: string | Element;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  markers?: boolean;
  toggleActions?: string;
  anticipatePin?: number;
  onEnter?: (self: ScrollTrigger) => void;
  onLeave?: (self: ScrollTrigger) => void;
  onEnterBack?: (self: ScrollTrigger) => void;
  onLeaveBack?: (self: ScrollTrigger) => void;
  pinSpacing?: boolean | string;
  id?: string;
}

interface AnimationOptions {
  x?: number | string;
  y?: number | string;
  opacity?: number;
  scale?: number;
  rotation?: number;
  duration?: number;
  ease?: string;
  stagger?: number | object;
  delay?: number;
  transformOrigin?: string;
  rotationX?: number;
  rotationY?: number;
  skewX?: number;
  skewY?: number;
}

const useGsapScrollTrigger = () => {
  const scrollTriggerRefs = useRef<ScrollTrigger[]>([]);

  const createScrollTrigger = (
    elements: string | Element | Element[],
    animation: gsap.core.Timeline | gsap.core.Tween,
    options: ScrollTriggerOptions
  ) => {
    const trigger = {
      trigger: typeof elements === 'string' ? elements : options.trigger,
      start: options.start || 'top 80%',
      end: options.end || 'bottom 20%',
      scrub: options.scrub ?? false,
      pin: options.pin ?? false,
      markers: options.markers ?? false,
      toggleActions: options.toggleActions || 'play none none none',
      anticipatePin: options.anticipatePin ?? 0,
      onEnter: options.onEnter,
      onLeave: options.onLeave,
      onEnterBack: options.onEnterBack,
      onLeaveBack: options.onLeaveBack,
      pinSpacing: options.pinSpacing,
      id: options.id,
      animation: animation
    };

    const st = ScrollTrigger.create(trigger);
    scrollTriggerRefs.current.push(st);
    return st;
  };

  const createAnimation = (
    elements: string | Element | Element[],
    props: AnimationOptions,
    scrollTriggerOptions?: ScrollTriggerOptions
  ) => {
    const animation = gsap.to(elements, {
      ...props,
      scrollTrigger: scrollTriggerOptions
    });
    return animation;
  };

  const createTimeline = (scrollTriggerOptions?: ScrollTriggerOptions) => {
    const timeline = gsap.timeline({
      scrollTrigger: scrollTriggerOptions
    });
    return timeline;
  };

  const createParallaxEffect = (
    element: string | Element,
    speed: number = 0.5,
    options?: ScrollTriggerOptions
  ) => {
    return gsap.to(element, {
      y: `${speed * 100}%`,
      ease: 'none',
      scrollTrigger: {
        trigger: typeof element === 'string' ? element : options?.trigger || element,
        start: options?.start || 'top bottom',
        end: options?.end || 'bottom top',
        scrub: options?.scrub ?? true,
        markers: options?.markers ?? false,
        id: options?.id
      }
    });
  };

  // Create a kinetic typography effect
  const createKineticTypography = (
    element: string | Element,
    options?: {
      scale?: number;
      rotation?: number;
      y?: number;
      x?: number;
      staggerChildren?: number;
      scrollTrigger?: ScrollTriggerOptions;
    }
  ) => {
    const chars = gsap.utils.toArray(
      typeof element === 'string' ? `${element} .char` : element.querySelectorAll('.char')
    );
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: typeof element === 'string' ? element : options?.scrollTrigger?.trigger || element,
        start: options?.scrollTrigger?.start || 'top 80%',
        end: options?.scrollTrigger?.end || 'bottom 20%',
        scrub: options?.scrollTrigger?.scrub ?? true,
        markers: options?.scrollTrigger?.markers ?? false
      }
    });

    tl.to(chars, {
      scale: options?.scale ?? 1.2,
      rotation: options?.rotation ?? 5,
      y: options?.y ?? -20,
      x: options?.x ?? 0,
      stagger: options?.staggerChildren ?? 0.02,
      ease: 'power2.out',
      duration: 1
    });

    return tl;
  };

  // 3D perspective shift effect
  const createPerspectiveShift = (
    element: string | Element,
    options?: {
      rotationX?: number;
      rotationY?: number;
      z?: number;
      scrollTrigger?: ScrollTriggerOptions;
    }
  ) => {
    return gsap.to(element, {
      rotationX: options?.rotationX ?? 15,
      rotationY: options?.rotationY ?? 15,
      z: options?.z ?? 100,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: typeof element === 'string' ? element : options?.scrollTrigger?.trigger || element,
        start: options?.scrollTrigger?.start || 'top 80%',
        end: options?.scrollTrigger?.end || 'bottom 20%',
        scrub: options?.scrollTrigger?.scrub ?? true,
        markers: options?.scrollTrigger?.markers ?? false
      }
    });
  };

  // Reveal animation
  const createRevealAnimation = (
    element: string | Element,
    fromVars: AnimationOptions = {},
    toVars: AnimationOptions = {},
    options?: ScrollTriggerOptions
  ) => {
    const defaults = {
      from: { opacity: 0, y: 50 },
      to: { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    };

    const finalFromVars = { ...defaults.from, ...fromVars };
    const finalToVars = { ...defaults.to, ...toVars };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: typeof element === 'string' ? element : options?.trigger || element,
        start: options?.start || 'top 80%',
        end: options?.end || 'bottom 20%',
        toggleActions: options?.toggleActions || 'play none none none',
        markers: options?.markers ?? false
      }
    });

    tl.fromTo(element, finalFromVars, finalToVars);
    return tl;
  };

  // Warp and distortion effect using GSAP
  const createWarpEffect = (
    element: string | Element,
    intensity: number = 0.2,
    options?: ScrollTriggerOptions
  ) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: typeof element === 'string' ? element : options?.trigger || element,
        start: options?.start || 'top bottom',
        end: options?.end || 'bottom top',
        scrub: options?.scrub ?? true,
        markers: options?.markers ?? false
      }
    });

    tl.to(element, {
      skewX: intensity * 10,
      skewY: intensity * 5,
      scale: 1 + intensity * 0.1,
      duration: 1
    }).to(element, {
      skewX: 0,
      skewY: 0,
      scale: 1,
      duration: 1
    });

    return tl;
  };

  // Pin and unpin sections
  const createPinAnimation = (
    element: string | Element,
    duration: number = 1,
    options?: ScrollTriggerOptions
  ) => {
    return ScrollTrigger.create({
      trigger: typeof element === 'string' ? element : options?.trigger || element,
      start: options?.start || 'top top',
      end: options?.end || `+=${duration * 100}%`,
      pin: true,
      pinSpacing: options?.pinSpacing ?? true,
      markers: options?.markers ?? false,
      id: options?.id
    });
  };

  // Cleanup all scroll triggers on component unmount
  useEffect(() => {
    return () => {
      scrollTriggerRefs.current.forEach(trigger => trigger.kill());
      scrollTriggerRefs.current = [];
    };
  }, []);

  return {
    createScrollTrigger,
    createAnimation,
    createTimeline,
    createParallaxEffect,
    createKineticTypography,
    createPerspectiveShift,
    createRevealAnimation,
    createWarpEffect,
    createPinAnimation,
    gsap,
    ScrollTrigger
  };
};

export default useGsapScrollTrigger;
