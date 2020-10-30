export default {
    //模块,添加的状态树
    state: {
        name: "张三"
    },mutations: {
        updateNameA(state,payload){
            state.name = payload;
        }
    },actions: {

        aUpdateName(context) {
            console.log(context); 
            setTimeout(() =>{
                context.commit("updateNameA", "王五");
            },1000)

        }

    },getters: {
        fullName1(state) {
            return state.name + "qazwsx";
        },
        fullName3(state, getters, rootState) {
            return getters.fullName1 + rootState.counter;
        }
    }
}