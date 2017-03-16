/* eslint-env mocha */
'use strict';

const path = require('path');
const sassTrue = require('sass-true');

const grid = path.join(__dirname, 'fixtures/grid.scss');
const span = path.join(__dirname, 'fixtures/span.scss');

sassTrue.runSass({ file: grid }, describe, it);

sassTrue.runSass({ file: span }, describe, it);
