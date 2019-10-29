import { Rob } from "./models/questions/houseRob";
import { hasSingleCycle } from "./models/questions/singleCycleCheck";

debugger;
let numbers = [1, 2, 3, 1];
let anotherSet = [2, 3, 1, -4, -4, 2];
Rob(numbers);
hasSingleCycle(numbers);
hasSingleCycle(anotherSet);
