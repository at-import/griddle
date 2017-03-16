# GRIDdle [![Build Status](https://travis-ci.org/at-import/griddle.svg?branch=master)](https://travis-ci.org/at-import/griddle)
```
                          (    (         
                          )\ ) )\   (   
   ____ ____  ___ ____   (()/(((_) ))\  
  / ___|  _ \|_ _|  _ \   ((_))_  /((_) 
 | |  _| |_) || || | | |  _| || |(_))   
 | |_| |  _ < | || |_| |/ _` || |/ -_)  
  \____|_| \_\___|____/ \__,_||_|\___|  
```

A simple set of helpers for working with [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout).

## Getting Started

GRIDdle _is not_ a Grid Framework for CSS Grids. Rather, it's a set of helpers for writing sets of common CSS Grid properties together, in language that is likely to be more familiar to those who have used tools like Susy, Singularity, Foundation, or Bootstrap. **There is no magic**, just CSS Grids, so be sure you have [brushed up on the docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) and take a look at [CSS Trick's Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) before using.

### Installation

GRIDdle is distributed as an NPM Module optimized for use with [Eyeglass](https://github.com/sass-eyeglass/eyeglass) (if you're using it). To install, run the following:

```bash
$ npm install sass-griddle --save-dev
```

Then, in your Sass, import GRIDdle:

```scss
@import 'griddle'; // Or path to _griddle.scss if not using Eyeglass
```

## Usage

### Grid Setup Helpers

#### grid($grid, $gap) / columns($grid, $gap) [mixin]

Mixins to define grid columns. 

- `$grid` - The grid to use for columns
- `$gap` - The gap between each column. Will apply to both column and row gap

**Sample Input**
```scss
.container {
  @include grid(100px 1fr 2fr, 1em); // @include columns
}
```

**Sample Output**
```scss
.container {
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 100px 1fr 2fr;
}
```

#### vertical-grid($grid, $gap) / rows($grid, $gap) [mixin]

Mixins to define grid rows. 

- `$grid` - The grid to use for rows.
- `$gap` - The gap between each row

**Sample Input**
```scss
.container {
  @include vertical-grid(2fr 1fr 2fr, 1em); // @include rows
}
```

**Sample Output**
```scss
.container {
  display: grid;
  grid-row-gap: 1em;
  grid-template-rows: 2fr 1fr 2fr;
}
```

### Span Helpers

#### span($span, [$start]) / column-span($span, [$start]) [mixin]

A mixin to span a number of columns.

- `$span` - The number of columns to span
- `$start` - The column to start the span at (optional)

**Sample Input**
```scss
.item {
  @include span(3, 1); // @include column-span
}
.item-2 {
  @include span(4); // @include column-span
}
```

**Sample Output**
```scss
.item {
  grid-column: 1 / span 3;
}
.item-2 {
  grid-column: span 4;
}
```

#### vertical-span($span, [$start]) / row-span($span, [$start]) [mixin]

Mixins to span a number of rows.

- `$span` - The number of row to span
- `$start` - The row to start the span at (optional)

**Sample Input**
```scss
.item {
  @include vertical-span(1, 2); // @include row-span
}
.item-2 {
  @include vertical-span(5); // @include row-span
}
```

**Sample Output**
```scss
.item {
  grid-row: 2 / span 1;
}
.item-2 {
  grid-row: span 5;
}
```
