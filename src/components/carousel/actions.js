import { SLIDE } from './actionTypes';

export const slideCarousel = (direction, listLength) => ({
    type: SLIDE,
    direction: direction,
    length: listLength
});
