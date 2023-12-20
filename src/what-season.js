import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date || date === null) {
    return 'Unable to determine the time of year!';
  }

  if (
    !(date instanceof Date) ||
    typeof date.getTime !== 'function' ||
    isNaN(date) ||
    Object.prototype.toString.call(date) !== '[object Date]' ||
    date.constructor !== Date
  ) {
    throw new Error('Invalid date!');
  }

  const month = date.getMonth();
  if (isNaN(month)) {
    throw new Error('Invalid date!');
  }

  if (month >= 0 && month <= 1 || month === 11) {
    return 'winter';
  } else if (month >= 2 && month <= 4) {
    return 'spring';
  } else if (month >= 5 && month <= 7) {
    return 'summer';
  } else if (month >= 8 && month <= 10) {
    return 'autumn';
  }
}

module.exports = {
  getSeason
};
