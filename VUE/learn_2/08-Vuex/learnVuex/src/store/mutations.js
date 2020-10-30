import {
    INCRRMENT,
} from './mutations-types';

export default {
    //increment方法会默认传递参数state
        //方法
        [INCRRMENT](state) {
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        incrementCount(state, payload) {
            console.log(payload);
            state.counter+=payload.count;
        },
        addStudentIndex(state, addstu) {
            state.stu.push(addstu);
        },
        updateInfo(state) {
            //后续添加响应式的属性和属性值
            Vue.set(state.info, 'address', '洛杉矶');
            
            //删除属性
            //该方式做不到响应式
            //delete state.info.age;
            //可 
            //Vue.delete(state.info, 'age');
        }
}