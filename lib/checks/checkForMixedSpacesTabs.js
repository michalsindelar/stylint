/**
 * check for mixed spaces and tabs
 * @param  {string} line  the line being tested
 * @param  {number} indentSpaces  default is 4. if set to false the we do hard tabs instead of spaces
 * @return {boolean} true if mixed spaces and tabs, false if not
 * @todo  this is kinda not 100% reliable in it's current form
 */
var tabs  = /\t/, // was a tab used, at all
    spaces = /\s{2,}/; // check for 2 or more spaces (if hard tabs, shouldn't find anything)

module.exports = function checkMixedSpacesAndTabs( line, indentSpaces ) {
    // if this isnt set to false then we're indenting with spaces
    if ( indentSpaces ) {
        // look for hard tabs
        if ( tabs.test( line ) ) {
            return true;
        }
        // soft tabs, no hard tabs, all good
        else {
            return false;
        }
    }
    // else you're a hard tab believer
    else {
        // look for 2 or more spaces
        if ( spaces.test( line ) ) {
            return true;
        }
        // hard tab, no spaces, all good
        else {
            return false;
        }
    }
}