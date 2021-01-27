<template>
   <div class="Detail_parameter">
       <table v-for='(table,index) in GoodsParam.sizes' :key='index' class="tableup">
           <tr v-for = '(tr,trs) in table' :key='trs'>
               <td v-for = '(td,tds) in tr' :key='tds'>
                   {{td}}
               </td>
           </tr>
       </table>
       <table class="table_down">
           <tr v-for="(tr , index) in GoodsParam.infos" :key = "index">
               <td v-for="(td , indey , indez) in tr" :key = "indey" :style="{ color : (indez == 1)? '#ff8e96':''}" >
                   {{td}}
               </td>
           </tr>
       </table>
   </div>
</template>

<script>
export default {
    props:{
        GoodsParam: {
            type: Object,
            default() {
                return {}
            }
        }
    },
   data () {
      return {
           tdright: "color: #ff8e96;",
      };
   },

   components: {},

   computed: {},

   methods: {
       attributeCount (obj) {
        let count = 0;
        for(let i in obj) {
            if(obj.hasOwnProperty(i)) {  // 建议加上判断,如果没有扩展对象属性可以不加
                count++;
            }
        }
        return count;
    }
   }
}
</script>
<style lang='css' scoped>
.Detail_parameter{
    padding: 8px;
    font-size: 14px;
    border-bottom: 5px solid #f9f9fa;
    margin-top: 10px;
}
.tableup{
    width: 100%;
    text-align: center;
    border-collapse: collapse;
}
.tableup tr{
    height: 30px;
    border-bottom: 2px solid #ccc;
}
.table_down{
    width: 100%;
    /* text-align: center; */
    border-collapse: collapse;
}
.table_down tr{
    height: 30px;
    border-bottom: 2px solid #ccc;
}
.table_down td{
    width: 25px;
    padding: 5px;
    /* color: #ff8e96; */
}
</style>