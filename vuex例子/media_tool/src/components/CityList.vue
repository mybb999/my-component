<template>
    <div class="city">
        <ul>
            <li v-for="(item,index) in cityArr" @click="backFn(index)">
                <h2>{{item}}{{index+1}}</h2>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState,mapMutations,mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
        cityArr:['熊仔','胡仔','游总','工头','妹纸','糖仔','黄总','猛仔','智总']
    }
  },
  methods:{
      backFn : function(index){
          // 调用vuex的ations设置城市的值
          this.$store.dispatch("setCityName", this.cityArr[index]);

          //返回到首页
          this.$router.push("/");
      }
  }
}
</script>