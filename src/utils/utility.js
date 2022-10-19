/**
 * genrates random number withing a range
 * @param {Number} min
 * @param {Number} max
 * @returns {Number}
 */
const generateRandomNumber = async (min, max) =>
    Math.floor(Math.random() * ((await max) - min + 1)) + min;

/**
 * //https://bobbyhadz.com/blog/javascript-get-random-property-from-object
 * @param {Object} obj
 * @returns
 */
const generateRandomProperty = (obj) => {
    const keys = Object.keys(obj);
    return keys[Math.floor(Math.random() * keys.length)];
};

module.exports = {
    generateRandomNumber,
    generateRandomProperty,
};
