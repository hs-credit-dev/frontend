/**
 * @param {Number} status 
 * @returns Whether status code is from a success type response
 */
export const is2XXResponse = (status) => {
    return `${status}`[0] === '2';
};

/**
 * @param {Number} status 
 * @returns Whether status code is from a client-side error type response
 */
export const is4xxResponse = (status) => {
    return `${status}`[0] === '4';
};