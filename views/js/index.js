import { initializeGlide } from "../../helpers/slider.js";

const config = {
    type: 'slider',
    focusAt: '0',
    startAt: 0, 
    perView: 3.5,
    perTouch: 1,
    hoverpause: true,
    autoplay: 3000,
    rewind: false, 
    bound: true,
    breakpoints: {
        800: {
            perView: 2
        },
        400: {
            perView: 1
        }
    }
}

initializeGlide('#glide', config);

AOS.init();