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
  
    // Animate the navbar sliding down and expanding its width from the center
    gsap.from("nav", {
      y: "-100%",        // Start above the viewport
      width: "5%",       // Start with 5% width
      duration: 1.5,     // Duration for both sliding down and expanding width
      ease: "power2.out", // Smooth easing for both animations
      onComplete: () => {
        // After sliding down, animate width expansion
        gsap.to("nav", { 
          width: "90%",     // Expand to 90% width
          duration: 0.5,    // Duration for the width expansion
          ease: "power2.out" // Smooth easing for width expansion
        });
      }
    });
  
    console.log("GSAP navbar slide-down with width expansion triggered!");
  });
  