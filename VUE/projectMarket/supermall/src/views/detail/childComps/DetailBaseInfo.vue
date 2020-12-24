<template>
   <div class="goods_detail" v-if= "Object.keys(goods).length !== 0">
       <div class="title">
           <div class="goods_title">
               {{goods.title}}
           </div>
       </div>
       <div class="goods_prices">
           <div class="goods_newPrice">{{goods.newPrice}}</div>
           <div class="goods_oldPrice">{{goods.oldPrice}}</div>
           <div class="goods_discount" v-if="goods.discount">{{goods.discount}}</div>
       </div>
       <div class="goods_datas">
           <div class="goods_colums0">{{goods.columns[0]}}</div>
           <div class="goods_colums1">{{goods.columns[1]}}</div>
           <div class="goods_colums2">{{goods.services[goods.services.length-1].name}}</div>
       </div>
       <div class="goods_services">
            <div class="goods_services_childs">
               <div class="goods_services_left">
                   <img :src="goods.services[2].icon" alt="">
                    <div>{{goods.services[2].name}}</div>
               </div>
           </div>
           <div class="goods_services_childs">
                <div class="goods_services_middle">
                        <img :src="goods.services[1].icon" alt="" style="">
                    <div>{{goods.services[1].name}}</div>
                </div>
           </div>
           <div class="goods_services_childs ">
               <div class="goods_services_right">
                   <img :src="goods.services[goods.services.length-1].icon" alt="">
                    <div style="float: left;">{{goods.services[goods.services.length-1].name}}</div>
                </div>
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
                return {};
            }
        }
    },
   data () {
      return {
          
      };
   },

   components: {},

   computed: {},

   methods: {},
   mounted() {
    //    console.log(Object.keys(this.goods));
    //    console.log(this.goods.discount);
   },
   beforeDestroy() {
       
   }
}
</script>
<style lang='css' scoped>

.title{
    /* display: flex; */
    font-size: 20px;
    font-weight: bold;
    margin: 8px;
}
/* .goods_title{
    flex: 1;
} */
.goods_prices{
    position: relative;
    display: flex;
    margin: 8px;
    /* padding-bottom: 10px; */
}
.goods_newPrice{
    font-size: 22px;
    color: #ff8e96;
    font-weight: bold;
    float: left;
}
.goods_oldPrice{
    float: left;
    font-size: 16px;
    margin-top: 7px;
    margin-left: 5px;
    text-decoration: line-through;
    color: rgba(100,100,100,0.5);
}
.goods_discount{
    float: left;
    font-size: 12px;
    margin-top: 8px;
    margin-left: 5px;
    background-color: #ff6277;
    color: #fff;
    width: 70px;
    height: 20px;
    border-radius: 10px;
    text-align: center;
    line-height: 20px;
}
.goods_datas{
    display: flex;
    color: rgba(100,100,100,0.5);
    font-size: 12px;
    margin: 8px;
    border-bottom: 1px solid rgba(100,100,100,0.5);
    padding-bottom: 5px;
}
.goods_colums0{
    flex: 1;
}
.goods_colums1{
    flex: 1;
    text-align: center;
}
.goods_colums2{
    flex: 1;
    text-align: right;
}
.goods_services{
    display: flex;
    margin: 8px;
    padding-bottom: 30px;
    border-bottom: 3px solid #ccc;
}
.goods_services_childs{
    flex: 1;
    float: left;
    font-size: 12px;
    color: rgba(100,100,100,0.5);
    line-height: 10px;
}
.goods_services img{
    width: 12px;
    height: 12px;
    float: left;
}
.goods_services_middle{
    justify-content: center;
    align-items: center;
    display: -webkit-flex;
}
.goods_services_right{
    float: right;
}

</style>