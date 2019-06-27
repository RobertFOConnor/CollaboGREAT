import {cardSpacing} from "./expandedCard.style";

const inputRange = index => [-cardSpacing * (index + 1), -cardSpacing * index, -cardSpacing * (index - 1)];

export const translateY = (val, index) => val.interpolate({
    inputRange: inputRange(index),
    outputRange: [40, 0, 40],
    extrapolate: "clamp",
});

export const contentScale = (val, index) => val.interpolate({
    inputRange: inputRange(index),
    outputRange: [0.01, 1, 0.01],
    extrapolate: "clamp",
});

export const contentOpacity = (val, index) => val.interpolate({
    inputRange: inputRange(index),
    outputRange: [0, 1, 0],
    extrapolate: "clamp",
});