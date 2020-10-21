/**
 *
 * @authors Your Name (you@example.org)
 * @date    2020-10-10 15:55:03
 * @version $Id$
 */

const app = new Vue({
    el:"#app",
    data:{
        books:[
            {
                id: 1,
                name: "《算法导论》",
                date: "2006-9",
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: "《UNIX编程艺术》",
                date: "2006-2",
                price: 59.00,
                count: 1
            },
            {
                id: 3,
                name: "编程珠玑",
                date: "2008-10",
                price: 39.00,
                count: 1
            },
            {
                id: 4,
                name: "代码大全",
                date: "2006-3",
                price: 120.00,
                count: 1
            }

        ]
    },
    filters: {//过滤器
        showPrice(price){
            return '￥' + price.toFixed(2);
        }
    },
    methods:{
        countAdd(indexs){
            console.log(this.books[indexs]);

            return this.books[indexs].count++;
        },
        countReduce(indexs){
            // if(this.books[indexs].count<=1){
            //     console.log("最少需购一本");
            //     return;
            // }
            return this.books[indexs].count--;
        },
        deleBook(index){
            console.log(index);
            this.books.splice(index,1);
        }
    },
    computed:{
        totalPrice(){
            let money=0;
            // for(let i=0;i<this.books.length;i++){
            //     money+=this.books[i].price*this.books[i].count;
            // }

            //增强for循环
            for(let item of this.books){
                money+=item.price*item.count
            }
            return money;
        }

    }
})
//          面向过程   面向对象
//编程范式:命令式编程/声明式编程
//编程范式:面向对象编程(第一公民:对象)/函数式编程(第一公民:函数)
//高级函数:filter/map/reduce