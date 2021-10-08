import mpg_data from "./data/mpg_data.js";

/*
mpg_data is imported for you but that is for testing purposes only. All of the functions should use
a car_data param that is supplied as the first parameter.

As you write these functions notice how they could possibly be chained together to solve more complicated
queries.
 */

/**
 * @param {array} car_data - an instance of mpg_data that should be used for filtering.
 * @param minHorsepower {number}
 * @param minTorque {number}
 *
 * @return {array} An array of car objects with horsepower >= minHorsePower and torque >= minTorque
 * sorted by horsepower in descending order.
 *
 */
export function searchHighPower(car_data, minHorsepower, minTorque) {
    let carArray = [];
    let currCar;

    //add all the cars to the car array
    for (let i = 0; i < car_data.length; i++) {
        //variable for the current car
        currCar = car_data[i];

        //if the car has the required horsepower and torque, add it to the car array
        if (currCar.horsepower >= minHorsepower && currCar.torque >= minTorque) {
            carArray.push(currCar);
        }
    }

    //create temp car obj
    let tempCarObj = new Object();

    //sort the car array
    for (let i = 0; i < carArray.length - 1; i++) {
        for (let j = 0; j < carArray.length - 1; j++) {

            //largest horsepower to smallest
            if (carArray[j].horsepower <  carArray[j + 1].horsepower) {
                tempCarObj = carArray[j + 1];
                carArray[j + 1] = carArray[j];
                carArray[j] = tempCarObj;
            }
        }
    }
    return carArray;
}


/**
 * @param {array} car_data
 * @param minCity
 * @param minHighway
 *
 *
 * @return {array} An array of car objects with highway_mpg >= minHighway and city_mpg >= minCity
 * sorted by highway_mpg in descending order
 *
 */
export function searchMpg(car_data, minCity, minHighway) {
    let carArray = [];
    let currCar;

    //add all the cars to the car array
    for (let i = 0; i < car_data.length; i++) {
        //variable for the current car
        currCar = car_data[i];

        //if the car has the required hw and city, add it to the car array
        if (currCar.city_mpg >= minCity && currCar.highway_mpg >= minHighway) {
            carArray.push(currCar);
        }
    }

    //create temp car obj
    let tempCarObj = new Object();

    //sort the car array
    for (let i = 0; i < carArray.length - 1; i++) {
        for (let j = 0; j < carArray.length - 1; j++) {

            //largest horsepower to smallest
            if (carArray[j].highway_mpg <  carArray[j + 1].highway_mpg) {
                tempCarObj = carArray[j + 1];
                carArray[j + 1] = carArray[j];
                carArray[j] = tempCarObj;
            }
        }
    }
    return carArray;
}


/**
 * Find all cars where 'id' contains the search term below.
 * Sort the results so that if the term appears earlier in the string
 * it will appear earlier in the list. Make sure searching and sorting ignores case.
 * @param car_data
 * @param searchTerm A string to that is used for searching
 * @returns {[]} array of cars
 */
export function searchName(car_data, searchTerm) {

    let carArray = [];
    let carID;

    //make the term all lower case
    searchTerm = searchTerm.toLowerCase();


    //loop through the data 
    for (let i = 0; i < car_data.length; i++) {

        //change the car id to lowercase
        carID = car_data[i].id.toLowerCase();

        //if the car id has the search term then add the car to the array
        if (carID.includes(searchTerm)) {
            carArray.push(car_data[i]);
        }
    }

    return carArray;
}


/**
 * Find all cars made in the years asked for.
 * Sort the results by year in descending order.
 *
 * @param car_data
 * @param {number[]} years - array of years to be included in the results e.g. [2010, 2012]
 * @returns {[]} an array of car objects
 */
export function searchByYear(car_data, years) {
    //variables
    let carArray = [];
    let carYear;

    //sort the years array
    years.sort;

    //reverse the years array (this exists??)
    years.reverse;

    //loop through the years array
    for (let i = 0; i < years.length; i++) {
        //loop through the data
        for (let j = 0; j < car_data.length; j++) {

            //if the car year is correct then add it to the car array
            if (car_data[j].year == years[i]) {
                carArray.push(car_data[j]);
            }
        }
    }

    return carArray;
}