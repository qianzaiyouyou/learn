<template>
        <div class="tab-bar-item" @click="itemClick">
            <div v-if="!isActive">
                <slot name="item-icon"></slot>
            </div>
            <div v-else>
                <slot name="item-active"></slot>
            </div>
            <div :style="activeStyle"><slot name="item-text"></slot></div>
            <!-- <div :class="{active: isActive}"><slot name="item-text"></slot></div> -->
        </div>
        <!-- <div class="tab-bar-item">分类</div>
        <div class="tab-bar-item">购物车</div>
        <div class="tab-bar-item">我的</div> -->
</template>

<script>
export default {
    name: "TabBarItem",
    props: {
        path: String,
        activeColor:{
            type: String,
            default:"yellow"
            }
    },

   data () {
      return {
          //isActive: true
      };
   },

   components: {},

   computed: {
       //因为在上方使用!取反，所以选中的选项才无样式
       //看使用indexOf方法对比返回的值是-1还是正数，为true使用item-icon
       isActive(){
           return this.$route.path.indexOf(this.path);
       },
       //看isActive返回的值，ture则渲染颜色
       activeStyle() {
           return this.isActive ? {color: this.activeColor} : {}
       }
   },

   methods: {
       itemClick(){
            this.$router.replace(this.path);
            console.log(this.path);
       }
   }
}
</script>
<style lang='css' scoped>

  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 10px;
    /* line-height: 49px; */
  }
    .tab-bar-item img {
        width: 24px;
        height: 24px;
        margin-top: 3px;
        vertical-align: middle;
        margin-bottom: 3px;
    }
    /* .active{
        color: red;
    } */
</style>