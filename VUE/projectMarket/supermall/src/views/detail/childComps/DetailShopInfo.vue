<template>
   <div class="ShopInfo">
       <div class="ShopInfo_title">
           <img :src="ShopInfo.logo" alt="">
           <div class="ShopInfo_name">{{ShopInfo.name}}</div>
       </div>
       <div class="ShopInfo_detail">
           <div class="ShopInfo_detailData">
               <div class="ShopInfo_detailData_Child">
                   <div style="font-size:18px;font-weight:bold;">{{ShopInfo.sells}}</div>
                   <div>总销量</div>
               </div>
               <div class="ShopInfo_detailData_Child">
                   <div style="font-size:18px;font-weight:bold;">{{ShopInfo.goodsCount}}</div>
                   <div>全部宝贝</div>
               </div>
           </div>
           <div class="ShopInfo_score">
               <div v-for="(item,index) in ShopInfo.score" :key="index" class="ShopInfo_score_child">

                   <div class="ShopInfo_score_childs score_childs_left">{{item.name}}</div>
                   <div class="ShopInfo_score_childs score_childs_middle" :class="shopInfo_score_down(item.isBetter , 'ShopInfo_scoretxt_')">{{item.score}}</div>
                   <div class="ShopInfo_score_childs score_childs_right" :class="shopInfo_score_down(item.isBetter , 'ShopInfo_score_')">{{item.isBetter ? '高':'低'}}</div>

               </div>
               
           </div>
       </div>
       <div class="ShopInfo_in"> 
           <div class="ShopInfo_in_button">
                   进店逛逛
           </div>
       </div>
   </div>
</template>

<script>
export default {
    props:{
        ShopInfo:{
            type:Object,
            default(){
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

   methods: {
       shopInfo_score_down(boolean , from) {
           if(boolean == true){
               return from +'high';
           }else{
               return from +'down';
           }
       }
   },
//    mounted(){
//        console.log(this.ShopInfo);
//    }
}
</script>
<style lang='css' scoped>
.ShopInfo{
    border-bottom: 5px solid #f9f9fa;
}
.ShopInfo_title{
    margin: 8px;
    /* position: relative; */
    height: 50px;
}
.ShopInfo_title img {
    width: 40px;
    height: 40px;
    border-radius: 40px;
    border: 1px solid #ccc;
    float: left;
}
.ShopInfo_name{
    float: left;
    margin-left: 8px;
    line-height: 40px;
    color: #757575;
}
.ShopInfo_detail{
    /* position: relative; */
    display: flex;
    margin: 8px;
    color: #757575;
}
.ShopInfo_detailData{
    display: flex;
    flex: 1;
    margin: 8px;
}
.ShopInfo_detailData_Child{
    flex: 1;
    text-align: center;
    font-size: 14PX;
}
.ShopInfo_score{
    flex: 1;
    font-size: 12px;
    border-left: 1px solid #ccc;
    /* float: left; */
    /* display: flex; */
    /* flex-direction: column; */
}
.ShopInfo_score_child{
    /* flex-direction: column; */
    /* align-content: center; */
    width: 120px;
    height: 25px;
    line-height: 20px;
    margin: 0 auto;
    /* text-align: center;
    align-items:center; */
    /* display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center; */
}
.ShopInfo_score_childs{
    float: left;
    margin-left: 10px;
    /* width: 120px; */
    /* flex: 1; */
}
/*.score_childs_left{
     flex: 3; 
}*/
.score_childs_middle{
    /* flex: 1;
    margin-left: 10px; */
    width: 20px;
}
.score_childs_right{
    /* flex: 1;
    margin-left: 10px; */
    font-weight: bold;
    color: #fff;
}
.ShopInfo_in{
    display: flex;
    text-align: center;
    margin: 8px;
    height: 60px;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
}
.ShopInfo_in_button{
    /* flex: 1; */
    width: 140px;
    height: 30px;
    background-color: #ccc;
    line-height: 30px;
    border-radius: 6px;
    color: rgb(82, 79, 79);
    font-size: 14px;
}
.ShopInfo_score_high{
    background-color: #e0615a;
}
.ShopInfo_score_down{
    background-color: #689445;
}
.ShopInfo_scoretxt_high{
    color: #e0615a;
}
.ShopInfo_scoretxt_down{
    color: #689445;
}
</style>