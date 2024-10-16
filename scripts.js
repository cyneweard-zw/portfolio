document.addEventListener("DOMContentLoaded", () => {
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

    // Animate the SVG circle as you scroll to increase its size
    gsap.to("circle", {
        attr: { r: 250 }, // Animate radius from 1 to 150
        ease: "none",      // No easing, the growth happens linearly with scroll
        scrollTrigger: {
            trigger: ".hero",  // Start the animation when scrolling the .hero section
            start: "top top",  // Start at the top of the viewport
            end: "bottom", // End when the bottom of the section reaches the bottom of the viewport
            scrub: true,       // Smoothly tie the animation to scroll
            markers: true     // Disable markers (for debugging you can set this to true)
        }
    });
});
