<template>
   <div class="commentInfos">
       <div class="commentInfostitle">
           <div class="commentInfostitle_left">用户评价</div>
           <div class="commentInfostitle_right">更多</div>
       </div>
       <div class="commentInfos_content">
           <div class="commentInfos_content_user">
               <img :src="commentInfo.user.avatar" alt="" class="commentInfos_content_user_userimg">
               <div class="commentInfos_content_user_username">{{commentInfo.user.uname}}</div>
           </div>
           <div class="commentInfos_content_user_contenttxt">
               {{commentInfo.content}}
           </div>
           <div class="commentInfos_content_user_nature">
               <div class="commentInfos_content_user_nature_left">{{commentInfo.created | showDate}}</div>
               <div class="commentInfos_content_user_nature_right">{{commentInfo.style}}</div>
           </div>
           <div class="commentInfos_content_user_img">
               <div class="commentInfos_content_user_imgs" 
                    v-for="(item,index) in commentInfo.images"
                    :key="index"
               >
               <img :src="item" alt="">
               </div>
           </div>
       </div>

   </div>
</template>

<script>

import {formatDate} from 'common/utils';

export default {
    name: 'DetailCommentInfo',
    props: {
        commentInfo: {
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
   filters: {
       showDate(value) {
           //1.将时间戳转成Date对象
           const date = new Date (value * 1000);
           //2.将date进行格式化
           return formatDate(date , 'yyyy-MM-dd');
       }
   },

   components: {},

   computed: {},

   methods: {},
   created(){console.log(this.commentInfo);},
}
</script>
<style lang='css' scoped>
.commentInfos{
    padding: 8px;
    font-size: 14px;
    border-bottom: 5px solid #f9f9fa;
    background-color: white;
}
.commentInfostitle{
    height: 45px;
    border-bottom: 1px solid #ccc;
}
.commentInfostitle .commentInfostitle_left{
    position: relative;
    float: left;
    line-height: 45px;
    font-size: 14px;
}
.commentInfostitle .commentInfostitle_right{
    position: relative;
    float: right;
    line-height: 45px;
    font-size: 12px;
    margin-right: 8px;
}
.commentInfos_content_user{
    padding-top: 8px;
    height: 60px;
    line-height: 45px;
}
.commentInfos_content_user .commentInfos_content_user_userimg{
    position: relative;
    float: left;
    width: 45px;
    height: 45px;
    border-radius: 45px;
}
.commentInfos_content_user .commentInfos_content_user_username{
    position: relative;
    float: left;
    margin-left: 8px;
    /* line-height: 45px; */
}
.commentInfos_content .commentInfos_content_user_nature{
    padding-top: 10px;
    color: #ccc;
    position: relative;
    width: 100%;
}
.commentInfos_content .commentInfos_content_user_nature .commentInfos_content_user_nature_left{
    float: left;
}
.commentInfos_content .commentInfos_content_user_nature .commentInfos_content_user_nature_right{
    /* float: left; */
    margin-left: 10px;
}
.commentInfos_content_user_img{
    /* position: relative;
    width: 100%; */
    padding-top: 10px;
    height: 60px;
}
.commentInfos_content_user_img .commentInfos_content_user_imgs{
    float: left;
    padding-left: 10px;
}
.commentInfos_content_user_img .commentInfos_content_user_imgs:nth-of-type(1){
    float: left;
    padding-left: 0px;
}
.commentInfos_content_user_img .commentInfos_content_user_imgs img{
    width: 60px;
    height: 60px;
    border-radius: 2px;
}
</style>