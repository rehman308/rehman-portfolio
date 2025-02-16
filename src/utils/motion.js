export const slideInFromBottom = {
    hidden: {
        opacity: 0,
        y: 100
    }, // Initially hidden with slight translation on x-axis
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring", // Use tween for easing functions
            mass: 1, // Lower mass for lightness
            stiffness: 100, // Lower stiffness for softness
            damping: 7, // Higher damping to reduce bounce
            duration: 0, // Duration of the animation in seconds
            delay: 0.2 // When in view, smoothly fade in and reset x translation
        }
    }
};

export const slideInFromTop = {
    hidden: {
        opacity: 0,
        y: -50
    }, // Initially hidden with slight translation on x-axis
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring", // Use tween for easing functions
            mass: 1, // Lower mass for lightness
            stiffness: 100, // Lower stiffness for softness
            damping: 7, // Higher damping to reduce bounce
            duration: 0, // Duration of the animation in seconds
            delay: 0 // When in view, smoothly fade in and reset x translation
        }
    }
};

export const slideInFromLeft = {
    hidden: {
        opacity: 0,
        x: -100
    }, // Initially hidden with slight translation on x-axis
    show: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring", // Use tween for easing functions
            mass: 1, // Lower mass for lightness
            stiffness: 100, // Lower stiffness for softness
            damping: 7, // Higher damping to reduce bounce
            duration: 0, // Duration of the animation in seconds
            delay: 0.2 // When in view, smoothly fade in and reset x translation
        }
    }
};

export const slideInFromRight = {
    hidden: {
        opacity: 0,
        x: 100
    }, // Initially hidden with slight translation on x-axis
    show: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring", // Use tween for easing functions
            mass: 1, // Lower mass for lightness
            stiffness: 100, // Lower stiffness for softness
            damping: 7, // Higher damping to reduce bounce
            duration: 0, // Duration of the animation in seconds
            delay: 0.2 // When in view, smoothly fade in and reset x translation
        }
    }
};

export const navAnimation = (delay) => {
    return {
        hidden: {
            opacity: 0,
            x: 100
        }, // Initially hidden with slight translation on x-axis
        show: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring", // Use tween for easing functions
                mass: 1, // Lower mass for lightness
                stiffness: 100, // Lower stiffness for softness
                damping: 7, // Higher damping to reduce bounce
                duration: 0, // Duration of the animation in seconds
                delay: delay // When in view, smoothly fade in and reset x translation
            }
        }
    };
};

export const footerAnimation = {
    hidden: {
        opacity: 0,
        y: 20
    }, // Initially hidden with slight translation on x-axis
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring", // Use tween for easing functions
            mass: 1, // Lower mass for lightness
            stiffness: 100, // Lower stiffness for softness
            damping: 7, // Higher damping to reduce bounce
            duration: 0, // Duration of the animation in seconds
            delay: 0.2 // When in view, smoothly fade in and reset x translation
        }
    }
};