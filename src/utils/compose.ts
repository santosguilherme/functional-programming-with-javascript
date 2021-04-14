export const compose = (first, second) => {
    return param => {
        return first(second(param));
    };
};
