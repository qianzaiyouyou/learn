<template>
   <div>
       <h2>{{$store.state.counter}}</h2>
       <h2>{{$store.getters.powerCounter}}</h2>
       <h2>{{$store.getters.more20stu}}</h2>
   </div>
</template>

<script>
export default {
    name: 'HelloVue',
    // props: {
    //     counter: Number
    // },
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

</style> 