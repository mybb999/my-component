<template>
    <div class="home">
        <h1>{{city}}</h1>
        <!-- 按钮导航 -->
        <router-link tag='button' to="/Citylist">获取城市列表</router-link>
    </div>
</template>

<script>
import { mapState,mapMutations,mapActions,mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed:{
    ...mapGetters({
     city:'getCityFn'
    })
    // city:function() {      
    //   return this.$store.getters.getCityFn;
    // }
  }
}
</script>
