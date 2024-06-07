import { useSpring } from '@react-spring/web';



export const useFadeInLeft = () => {

    const [useFadeInLeftStyles, api] = useSpring(() => ({
        from: { 
          x: -30, 
          opacity: 0
        },
        config: { duration: 1000 }, // Adjust the duration as needed
    }));

    return { useFadeInLeftStyles, api};
};

export const useFadeInRight = () => {

    const [useFadeInRightStyles, right_api] = useSpring(() => ({
        from: { 
          x: 100, 
          opacity: 0
        },
        config: { duration: 1000 }, // Adjust the duration as needed
    }));

    return { useFadeInRightStyles, right_api};
};

export const usePopUp = () => {

    const [popUpStyles, api] = useSpring(() => ({
        from: {
            opacity: 0,
          },
          to: { 
              opacity: 1,
          },
        config: { duration: 1000 }
    }));

    return { popUpStyles, api};
};


export const useLoadDivWidth = (givenWidth) => {

    const [useLoadDivWidthStyles, api] = useSpring(() => ({
        from: { 
          width: '0%'
        },
        to: {
          
        },
        config: { duration: 1000 }, // Adjust the duration as needed
    }));

    return { useLoadDivWidthStyles, api };
};