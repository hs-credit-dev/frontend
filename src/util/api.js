export const is2XXResponse = (status) => {
    return `${status}`[0] === '2';
}