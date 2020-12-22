<template>
   <div class="asdas">
       <div >
           {{goods.title}}
       </div>
       <div>
           <div>{{goods.newPrice}}</div>
           <div>{{goods.oldPrice}}</div>
           <div>{{goods.discount}}</div>
       </div>
       <div>
           <div>{{goods.columns[0]}}</div>
           <div>{{goods.columns[1]}}</div>
           <div>{{goods.services[0].name}}</div>
       </div>
       <div>
            <div>
               <div>
                   <img :src="goods.services[2].icon" alt="">
                </div>
               <div>{{goods.services[2].name}}</div>
           </div>
           <div>
               <div>
                   <img :src="goods.services[3].icon" alt="">
                </div>
               <div>{{goods.services[3].name}}</div>
           </div>
       </div>
       <!-- {{goods}} -->
   </div>
</template>

<script>
export default {

    props:{
        goods:{
            type: Object,
            default() {
                return {}
            }
        }
    },
   data () {
      return {

      };
   },

   components: {},

   computed: {},

   methods: {}
}
</script>
<style lang='css' scoped>
.asdas{
    font-size: 1px;
}
</style>