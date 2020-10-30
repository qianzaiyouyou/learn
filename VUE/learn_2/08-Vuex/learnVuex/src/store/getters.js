export default {
    //getters方法里面有两个参数(state, getters)
    //state是属性state的数据
    //getters可以直接拿getters里面的内容,自调用
    powerCounter(state){
        return state.counter * state.counter;
    },
    more20stu(state){
        return state.stu.filter(s=> s.age >=20);
    },
    more20stuNumber(state, getters){
        return getters.more20stu.length;
    },
    more12stu(state){
        return function (age) {
            return state.stu.filter(s=> s.age >= age);
        }

        // return age => {
        //     return state.stu.filter(s=> s.age >= age);
        // }
    }
}