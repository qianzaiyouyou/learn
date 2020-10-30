//import mutations from './mutations';

export default {
    
    //默认参数 context: 上下文   
        // aUpdateinfo(context,payload) {
        //     setTimeout(() => {
        //         context.commit("updateInfo");
        //         console.log(payload.payloadss);
        //         payload.success();
                
        //     },1000)
        // }
        
        
        aUpdateinfo(context,payload) {
            
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    //console.log(context.commit);
                    context.commit("updateInfo");
                    console.log(payload);
                    
                    resolve("里面已经完成了111");
                },1000)
            })
        }
        
        // aUpdateinfo({state,commit,rootState},payload) {
            
        //     return new Promise((resolve, reject) => {
        //         setTimeout(() => {
        //             //console.log(context.commit);
        //             commit("updateInfo");
        //             console.log(payload);
                    
        //             resolve("里面已经完成了111");
        //         },1000)
        //     })
        // }

}