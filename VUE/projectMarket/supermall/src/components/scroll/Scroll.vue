<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>

import BScroll from "better-scroll";

export default {
    name: "Scroll",
    props: {
        probeType: {
            type: Number,
            default: 0
        },
        pullUpLoad: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        //页面移动位置
        scrollTo( x, y, time = 300){
            this.scroll.scrollTo( x, y, time);
        },
        refresh() {
            //console.log("------");
            this.scroll && this.scroll.refresh();
        },
        finishPullUp() {
            this.scroll && this.scroll.finishPullUp();
        },
        getScrollY() {
            return this.scroll ? this.scroll.y : 0;
        }
    },
    date() {
        return {
            scroll: null
        }
    },
    mounted() {
        //1.创建BScroll对象
        this.scroll = new BScroll(this.$refs.wrapper,{
            click: true,
            //监听类型
            //需要时才使用实时监听
            probeType: this.probeType, 
            pullUpLoad: this.pullUpLoad
        });

        //2.监听滚动的位置
        // if (this.probeType =="2" || this.props =="3"){
            this.scroll.on('scroll', (position) => {
                // console.log(position);
                this.$emit('scroll', position);
            });
        // }
        //3.监听scroll滚到底部
        if (this.pullUpLoad) {
            this.scroll.on('pullingUp', () => {
                console.log('底部');
                this.$emit('pullingUp');
            })
        }

    },
}
</script>

<style>

</style>