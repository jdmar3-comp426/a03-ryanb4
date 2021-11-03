import mpg_data from "./src/medium/data/mpg_data.js";
import { getMedian, getStatistics, getSum } from "./src/medium/medium_1.js";
import { allCarStats, getAvgMpgByYearAndHybrid, getMakerHybrids, moreStats } from "./src/medium/medium_2.js";
import { searchByYear, searchHighPower, searchName } from "./src/medium/medium_3.js";
import {countArray, maxAndMin, sumToString} from "./src/mild/mild_1.js";  
import { identifyArray, identifyVariable, removeKey, removeKeyNonDestructive, removeKeys } from "./src/mild/mild_2.js";
import { everyEven, filter, multiplyBy, repeat, repeatDemo, someEven, tenTimes, tenTimesFifty } from "./src/spicy/spicy_9.js";
  


console.log(filter(['spectacle', 'pretend', 'orange', 'melt'], x => x[2] === 'e'));