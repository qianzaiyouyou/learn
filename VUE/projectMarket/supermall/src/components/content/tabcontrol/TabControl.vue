<template>
   <div class="tab_control">
       <div v-for="(item,index) in titles" 
       :key="index" class="tab-control-item" :class="{active: index === currentIndex}"
       @click="itemClick(index)">
           <span>{{item}}</span>
       </div>
   </div>
</template>

<script>
export default {
   data () {
      return {
          currentIndex: 0,
      };    
   },
   props: {
       titles: {
           type: Array,
           default() {
               return [] 
           }
       }
   },

   components: {},

   computed: {},

   methods: {
       itemClick(index) {
           this.currentIndex = index;
           this.$emit('tabClick', index);
       }
   }
}
</script>
<style lang='css' scoped>
    .tab_control{
        display: flex;
        text-align: center;
        font-size: 15px;
        height: 40px;
        line-height: 40px;
        background-color: #fff;
    }
    .tab-control-item{
        flex: 1;
    }
    .active{
        color: #ff8e96;
    }
    .active span{
        border-bottom: 3px solid #ff8e96;
    }
    .tab-control-item span {
        padding: 5px;
    }
</style>