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
        attr: { r: 250 }, // Animate radius from 1 to 250
        ease: "none",      // No easing, the growth happens linearly with scroll
        scrollTrigger: {
            trigger: ".hero",  // Start the animation when scrolling the .hero section
            start: "top top",  // Start at the top of the viewport
            end: "bottom",     // End when the bottom of the section reaches the bottom of the viewport
            scrub: true,       // Smoothly tie the animation to scroll
            markers: false     // Hide markers after debugging
        }
    });

    // Function to wrap each word in <span>
    const wrapWords = (selector) => {
        const paragraphs = document.querySelectorAll(selector);
        paragraphs.forEach(paragraph => {
            const words = paragraph.innerHTML.split(' ');  // Split by spaces (words)
            paragraph.innerHTML = '';  // Clear original content

            words.forEach(word => {
                paragraph.innerHTML += `<span>${word}</span> `;  // Wrap each word in <span>
            });
        });
    };

    // Wrap each word in spans
    wrapWords(".about .content p");

    // Animate each word as it scrolls into view
    const wordReveal = gsap.from(".about .content p span", {
        y: 100,               // Start 100px below the final position
        opacity: 0,           // Start with the word completely invisible
        ease: "power3.out",   // Smooth easing
        duration: 0.5,        // Total duration for each word
        stagger: 0.1,         // Stagger the animation for each word by 0.1 seconds
        scrollTrigger: {
            trigger: ".about",  // Start when the ".about" section enters the viewport
            start: "top 0.1%",   // Start when the top of the section hits 80% from the top of the viewport
            end: "bottom top",  // End when the bottom of the section leaves the top of the viewport
            scrub: true,        // Smoothly tie the animation to scroll
            pin: true           // Pin the section while the animation is happening
        }
    });

    // Fade out the entire paragraph after the reveal is done
    const fadeOut = gsap.to(".about .content p", {
        opacity: 0,          // Fade out the entire paragraph
        ease: "power2.out",  // Smooth easing for the fade out
        duration: 1,         // Duration of the fade out
        scrollTrigger: {
            trigger: ".about",   // Trigger at the same about section
            start: "bottom bottom", // Start fading out when the bottom of the section hits the bottom of the viewport
            end: "+=100",         // Slightly continue beyond the trigger to create the fade out
            scrub: true,          // Tie the animation to scroll
            markers: false        // Hide markers for the fade-out
        }
    });
});
