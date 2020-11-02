<template>
   <div class="nav-bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
   </div>
</template>

<script>
export default {
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
   .nav-bar {
      display: flex;
      height: 44px;
      line-height: 44px;
      box-shadow: 0px 5px 1px rgba(100,100,100,0.5);
   }
   .left, .right {
      width: 60px;
      line-height: 44px;
      text-align: center;
   }
   .center {
      flex: 1;
      line-height: 44px;
      text-align: center;

   }

</style>