import mpg_data from "./src/medium/data/mpg_data.js";
import { getMedian, getStatistics, getSum } from "./src/medium/medium_1.js";
import { allCarStats, getAvgMpgByYearAndHybrid, getMakerHybrids, moreStats } from "./src/medium/medium_2.js";
import { searchByYear, searchHighPower, searchName } from "./src/medium/medium_3.js";
import {countArray, maxAndMin, sumToString} from "./src/mild/mild_1.js";  
import { identifyArray, identifyVariable, removeKey, removeKeyNonDestructive } from "./src/mild/mild_2.js";
  



console.log(searchByYear(mpg_data, [2012, 2010]));