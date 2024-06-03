import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';


export const useFadeInLeft = () => {
    const { ref, inView } = useInView({
        triggerOnce: false, 
        threshold: 0.1,
    });

    const [styles, api] = useSpring(() => ({
        from: { 
          x: -30, 
          opacity: 0
        },
        to: { 
          x: 0, 
          opacity: 1
        },
        config: { duration: 600 }, // Adjust the duration as needed
    }));

    useEffect(() => {
        if (inView) {
            api.start();
        }
    }, [inView, api])
    

    return { ref, styles, animated };
};

export const usePopUp = () => {
    const { ref, inView } = useInView({
        triggerOnce: false, 
        threshold: 0.1,
    });

    const [styles, api] = useSpring(() => ({
        from: { 
          x: -30, 
          opacity: 0
        },
        to: { 
          x: 0, 
          opacity: 1
        },
        config: { duration: 600 }, // Adjust the duration as needed
    }));

    useEffect(() => {
        if (inView) {
            api.start();
        }
    }, [inView, api])
    

    return { ref, styles, animated };
};
