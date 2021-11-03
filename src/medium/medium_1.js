import { maxAndMin } from "../mild/mild_1.js";
import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    let sortedArray = array.sort(
        function(a, b) {
            return a - b;
        }
    );
    
    let v1, v2;

    //if the array is odd then the median is the middle number
    if (array.length % 2 == 1) {
        return sortedArray[Math.floor(array.length / 2)];
    } else {
        v1 = array.length / 2
        v2 = v1 - 1;
        return (sortedArray[v1] - sortedArray[v2]) / 2 + sortedArray[v2];
    }
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {

    let statsObj = new Object();
    let minMaxObj = maxAndMin(array);

    statsObj.length = array.length;
    statsObj.sum = getSum(array);
    statsObj.mean = statsObj.sum / statsObj.length;
    statsObj.median = getMedian(array);
    statsObj.min = minMaxObj.min;
    statsObj.max = minMaxObj.max;
    statsObj.variance = variance(array, statsObj.mean);
    statsObj.stddev = Math.sqrt(statsObj.variance);

    return statsObj;
}

