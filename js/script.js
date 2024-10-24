document.addEventListener("DOMContentLoaded", (event) => {
    // Register GSAP plugins (if any are needed in the future)
    gsap.registerPlugin(
      Flip,
      ScrollTrigger,
      Observer,
      ScrollToPlugin,
      Draggable,
      MotionPathPlugin,
      EaselPlugin,
      PixiPlugin,
      TextPlugin,
      RoughEase,
      ExpoScaleEase,
      SlowMo,
      CustomEase
    );
  
    // Slide-down animation for the nav bar
    gsap.from("nav", {
      y: "-100%", // Start above the viewport
      duration: 1, // Animation duration
      ease: "power2.out", // Ease out for smoothness
    });
  
    console.log("GSAP navbar slide-down animation triggered!");
  });
  