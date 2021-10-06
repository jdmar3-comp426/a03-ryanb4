/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {string} 'a + b = (a + b)'
 *
 * example: sumToString(3, 4)
 * returns: '3 + 4 = 7'
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
export function sumToString(a, b) {
    let sum = a + b;
    return a + " + " + b + " = " + sum;
}


/**
 *
 * @param {number} startNumber
 * @param {number} endNumber
 * @returns {number[]}
 *
 * example: getIncreasingArray(3, 7)
 * returns: [ 3, 4, 5, 6, 7 ]
 *
 */
export function getIncreasingArray(startNumber, endNumber) {
    let difference = endNumber - startNumber + 1;
    let increasingArray = [];  

    for (let i = 0; i < difference; i++) {
        increasingArray[i] = startNumber;
        startNumber++;
    }
    return increasingArray;
}

/**
 *
 * @param {number[]} numbers
 * @return {{min: number, max: number}}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */
export function maxAndMin(numbers) {
    let length = numbers.length;
    let max = -1000000;
    let min = 1000000;
    let obj = new Object();

    if(numbers.length == 0) {
        return;
    }

    for (let i = 0; i < length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    max = Math.max(...numbers);
    min = Math.min(...numbers);
    
    obj.max = max;
    obj.min = min;
  

    return obj;
}

/**
 *
 * @param array - An array of any primitive type
 * @returns {object} Object where the keys are the values that were passed in
 * and the value was the number of times it occurred.
 *
 * example: countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]])
 * returns: {'2': 2, '3': 3, '6': 1, some: 2, hello: 1, '1,2': 1}
 *
 */
export function countArray(array) {
    let map = new Map();
    let newValue = 0;
    let newArray = [];
    let obj = new Object();

    if (array.length == 0) {
        return;
    } 

    ///iterate through the array
    for (let i = 0; i < array.length; i++) {

        //check if the array item is in the map yet
        if (map.has(array[i])) {
            //if the key is in the map, then get the value
            newValue = map.get(array[i]);
            
            //increment the value
            newValue++;

            //store the new value back in the map
            map.set(array[i], newValue);

            //do not place in new array bc it is already in there
        } else {
            //if the key is not in the map, place it in the map with a value of 1
            map.set(array[i], 1);

            //store the key in the newArray
            newArray.push(array[i]);
        }

    }

    //now i need to return everything from the newArray
    for (let i = 0; i < newArray.length; i++) {
        obj.newArray[i] = map.get(newArray[i]);
    }

    return obj;
    
    


}
