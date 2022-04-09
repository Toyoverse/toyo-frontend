/**
 *
 * @param {number[]} values
 * @returns {number}
 */
const getToyoLevel = (values) => Math.floor(values.reduce((acc, value) => value + acc) / 20);

export default getToyoLevel;