/**
 *
 * @authors Your Name (you@example.org)
 * @date    2020-10-15 12:03:35
 * @version $Id$
 */
//导入import
 import{flag,sum} from "./aaa.js";
if(flag){
    console.log("小明是天才");
    console.log(sum(20,30));
}

import {num1,height} from "./aaa.js";

console.log(height);
console.log(num1);


//3.导入export的funciton/class
import {mul,Person} from "./aaa.js";

console.log(mul(30,50));

const p = new Person();
p.run();


//4.导入export default的内容:即默认导入
import addr from "./aaa.js";

console.log("冲冲冲");


//5.统一全部导入
import * as aaa from './aaa.js';

console.log(aaa.flag);
console.log(aaa.height);