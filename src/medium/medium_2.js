import mpg_data from "./data/mpg_data.js";
import {getStatistics} from "./medium_1.js";

/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/


/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */
export const allCarStats = {
    avgMpg: getAvgMpg(),
    allYearStats: getYearStats(),
    ratioHybrids: getRatioHybrids(),
};

export function getAvgMpg() {
    let citySum = 0;
    let hwSum = 0;
    let mpgObj = new Object();

    for (let i = 0; i < mpg_data.length; i++) {
        citySum += mpg_data[i].city_mpg;
        hwSum += mpg_data[i].highway_mpg;
    }

    mpgObj.city = citySum / mpg_data.length;
    mpgObj.highway = hwSum / mpg_data.length;

    return mpgObj;
}

export function getYearStats() {
    let yearArray = [];

    for (let i = 0; i < mpg_data.length; i++) {
        yearArray[i] = mpg_data[i].year;
    }

    return getStatistics(yearArray); 
}

export function getRatioHybrids() {
    let hybridCount = 0;

    for (let i = 0; i < mpg_data.length; i++) {
        if (mpg_data[i].hybrid == true) {
            hybridCount++;
        }
    }

    return hybridCount / mpg_data.length;
}


/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 */
export const moreStats = {
    makerHybrids: getMakerHybrids(),
    avgMpgByYearAndHybrid: getAvgMpgByYearAndHybrid(),
};

export function getAvgMpgByYearAndHybrid() {
    let finalObj = new Object();
    let yearObj = new Object();
    let hybridObj = new Object();
    let gasObj = new Object();

    let yearArray = [];

    //place all of the years in an array
    for (let i = 0; i < mpg_data.length; i++) {
        if (!yearArray.includes(mpg_data[i].year)) {
            yearArray.push(mpg_data[i].year);
        }
    }

    //sort the year array
    yearArray = yearArray.sort(
        function(a, b) {
            return a - b;
        }
    );

    console.log(yearArray);

    //create mpg variables
    let hybridCityMpg = 0;
    let hybridHwMpg = 0;
    let gasCityMpg = 0;
    let gasHwMpg = 0;

    //create total gas and total hybrid variables
    let numHybrids = 0;
    let numGas = 0;

    //iterate through the year array
    for (let i = 0; i < yearArray.length; i++) {

        //go through the mpg array
        for (let j = 0; j < mpg_data.length; j++) {
            
            //if the vehicle is a hybrid then update the hybrid values else update the gas values
            if (mpg_data[j].hybrid == true && mpg_data[j].year == yearArray[i]) {
                hybridCityMpg += mpg_data[j].city_mpg;
                hybridHwMpg += mpg_data[j].highway_mpg;
                numHybrids++;
            } else if (mpg_data[j].year == yearArray[i]) {
                gasCityMpg += mpg_data[j].city_mpg;
                gasHwMpg += mpg_data[j].highway_mpg;
                numGas++;
            }
        }

        //divide the mpgs by the total
        hybridCityMpg = hybridCityMpg / numHybrids;
        hybridHwMpg = hybridHwMpg / numHybrids;
        gasCityMpg = gasCityMpg / numGas;
        gasHwMpg = gasHwMpg / numGas;

        //set up the object and store it in the final obj
        hybridObj.city = hybridCityMpg;
        hybridObj.highway = hybridHwMpg;
        gasObj.city = gasCityMpg;
        gasObj.highway = gasHwMpg;

        yearObj.hybrid = hybridObj;
        yearObj.notHybrid = gasObj;

        finalObj[yearArray[i]] = yearObj;

        //now reset all of the objs and variables
        numGas = 0;
        numHybrids = 0;
        hybridCityMpg = 0;
        hybridHwMpg = 0;
        gasCityMpg = 0;
        gasHwMpg = 0;
        hybridObj = new Object();
        gasObj = new Object();
        yearObj = new Object();
    }

    return finalObj;
}



export function getMakerHybrids() {
    let makerArray = [];
    let makerMap = new Map();
    let numHybrids = 0;

    let obj = new Object();
    let objArray = [];

    //iterate through the total list of cars
    for (let i = 0; i < mpg_data.length; i++) {
        if (mpg_data[i].hybrid == true) {
            if (!makerArray.includes(mpg_data[i].make)) {
                
                //put the makes on the array
                makerArray.push(mpg_data[i].make);
            }

            //if the map has the make in it
            if (makerMap.has(mpg_data[i].make)) {
                //get the number of hybrids and increment it
                numHybrids = makerMap.get(mpg_data[i].make);
                numHybrids++;

                //store the value back in the map
                makerMap.set(mpg_data[i].make, numHybrids);
            } else {
                makerMap.set(mpg_data[i].make, 1);
            }


        }
    }
    //create a variable to hold the temp numHybrids
    let tempNumHybrids = 0;
    let tempMake;

    //iterate through the maker array and check the map to create a sorted maker array (bubble sort this tiny array)
    for (let i = 0; i < makerArray.length - 1; i++) {
        for (let j = 0; j < makerArray.length - 1; j++) {
            if (makerMap.get(makerArray[j]) < makerMap.get(makerArray[j + 1])) {
                tempMake = makerArray[j + 1];
                makerArray[j + 1] = makerArray[j];
                makerArray[j] = tempMake;
            }
        }
    }

    //create a list of hybrid ids for each make and store in obj array
    let idArray = [];
    for (let i = 0; i < makerArray.length; i++) {
        //set the make field
        obj.make = makerArray[i];

        //iterate through the data list again
        for (let j = 0; j < mpg_data.length; j++) {
            //if the make matches and its a hybrid, then add the id to the idArray
            if (mpg_data[j].make == makerArray[i] && mpg_data[j].hybrid == true) {
                idArray.push(mpg_data[j].id);
            }
        }

        //finally set the id field
        obj.hybrids = idArray;

        //add the obj to the obj array
        objArray.push(obj);

        //reset the idarray
        idArray = [];

        //reset obj
        obj = new Object()
    }
    return objArray;
}

