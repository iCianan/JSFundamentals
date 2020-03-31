import "../styles/index.scss";
import { LinkedList } from "./models/data_structures/LinkedList";

let list = new LinkedList();
list.addLast(5);
list.addLast(10);
list.addLast(52);
list.addAfter(10, 17);
list.addAfter(52, 36);
console.log(list);
