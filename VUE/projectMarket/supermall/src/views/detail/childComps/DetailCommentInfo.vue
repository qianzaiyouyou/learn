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
               <div></div>
               <div></div>
               <div></div>
           </div>
           <div class="commentInfos_content_user_img">
               <img src="" alt="">
           </div>
       </div>

   </div>
</template>

<script>
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
</style>