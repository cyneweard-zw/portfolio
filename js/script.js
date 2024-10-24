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
  
    // Slide-down and center-outward expand animation for the nav bar
    gsap.from("nav", {
      y: "-100%",     // Start above the viewport
      scaleX: 0.05,   // Start at 5% width scale from the center
      transformOrigin: "center center", // Ensure scaling happens from the center
      duration: 1.5,  // Duration for the entire animation
      ease: "power2.out", // Smooth easing
    });
  
    console.log("GSAP navbar slide-down and center-outward expansion triggered!");
  });
  