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
        }
    },
    methods: {
        scrollTo( x, y, time = 300){
            this.scroll.scrollTo( x, y, time);
        },
        refresh() {
            this.scroll && this.scroll.refresh();
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
        this.scroll.on('scroll', (position) => {
            // console.log(position);
            this.$emit('scroll', position);
        });

        

    },
}
</script>

<style>

</style>