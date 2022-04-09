/**
 *
 * @param {number} max
 * @param {number} min
 * @returns {string}
 */
const getRandomNumber = (max, min) => String(Math.floor(Math.random() * (max - min)) + min);

export default getRandomNumber;