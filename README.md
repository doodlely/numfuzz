# NumFuzz.js

Simple number abbreviation library and jQuery plugin.

## Usage

    NumFuzz.fuzzy(1000); // -> "1k"
    NumFuzz.fuzzy(1139); // -> "1.1k"
    NumFuzz.fuzzy(1103291); // -> "1.1M"

## jQuery Plugin

The library is also wrapped into a jQuery plugin for convenience.

HTML:

    <p><span class="abbr-number">8795</span> Followers</p>

JavaScript:
 
    $('.abbr-number').numFuzz();

Will update the DOM to:

    <p><span class="abbr-number" title="8795">8.7k</span> Followers</p>
