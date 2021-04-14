export const pipe = (...functions) => {
    if (!functions || functions.length < 2) {
        throw new Error('Should provide at least 2 functions');
    }

    return argument => functions.reduce((result, fn) => fn(result), argument);
};
