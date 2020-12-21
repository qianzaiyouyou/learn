<template>
   <div>{{iid}}</div>
</template>

<script>
export default {
   data () {
      return {
          iid: null
      };
   },

   components: {},

   computed: {},

   methods: {},

   created() {
       this.iid = this.$route.params.iid
   }

}
</script>
<style lang='css' scoped>

</style>