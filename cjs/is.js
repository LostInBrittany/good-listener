'use strict';

/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
function node(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
}
/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
function nodeList(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || node(value[0]));
}
/**
 * Check if argument is a SVG element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
function svg(value) {
    return value !== undefined
        && value instanceof SVGElement;
}
/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
function string(value) {
    return typeof value === 'string'
        || value instanceof String;
}
/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
function fn(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
}
var is = {node: node, nodeList: nodeList, svg: svg, string: string, fn: fn};

module.exports = is;
