'use strict';

const path = require('path');

module.exports = function griddle(eyeglass, sass) { // eslint-disable-line no-unused-vars
  return {
    sassDir: path.join(__dirname, 'sass'),
  };
};
