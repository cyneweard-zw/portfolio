document.addEventListener("DOMContentLoaded", (event) => {
    // Register GSAP plugins (if needed)
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
  
    // Slide-down and expand animation for the nav bar
    gsap.from("nav", {
      y: "-100%",     // Start above the viewport
      width: "5%",    // Start at 5% width
      duration: 1.5,  // Animation duration
      ease: "power2.out", // Smooth easing
      onComplete: () => {
        gsap.to("nav", { width: "90%", duration: 0.5, ease: "power2.out" }); // Expand to 90% width
      }
    });
  
    console.log("GSAP navbar slide-down and expand animation triggered!");
  });
  