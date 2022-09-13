export * as users from './users';
export * as students from './students';
export * as teachers from './teachers';
export * as credits from './credits';

export const is2XXResponse = (status) => {
    return Math.floor(status / 100) === 2;
}