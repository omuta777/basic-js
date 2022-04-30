const { NotImplementedError } = require('../extensions/index.js');

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
  let season;

  try {
    date.getTime();
 
   } catch(err) {
    if (!arguments.length) {
      return 'Unable to determine the time of year!';
    } else {
     
       throw new Error("Invalid date!");
     }
  
    }
    season = date.getMonth();
  

  /*try {
    date.getTime();
 
   } catch(err) {
     
       throw new Error("Invalid date!");
     }*/
 

  if (season <=1 || season == 11) {
    return 'winter';
  } else if (season <= 4) {
    return 'spring'
  } else if (season <= 7) {
    return 'summer'
  } else if (season <= 10) {
    return 'fall';
  } else {
    throw new Error("Invalid date!");
  }

return data;
 
}

module.exports = {
  getSeason
};


/*try {
   if (date.getTime) {
    season = date.getMonth();
   }
    
  } catch(err) {
    if (typeof data === 'undefined') {
      return 'Unable to determine the time of year!';
    } else  {
      throw new Error("Invalid date!");
    }

  }*/