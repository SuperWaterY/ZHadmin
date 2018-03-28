<template>
  <div id="indexpage">
    <p class="error">珠海市政务数据资产普查系统</p>
    <!-- <p class="info">This page was lost at sea<a href="/"><br>返回首页</a></p> -->
    <div class="info">
      <p class="more">© 2017 Company Index Page . All Rights Reserved | Design By 
      <router-link to="http://www.ebsea.cn" tag="a">国脉海洋信息发展有限公司</router-link>
    </p>
    <p class="more"><i class="fa fa-phone"></i><span>0580-2299699</span><br>
    <i class="fa fa-map-marker"></i><span>浙江省舟山市定海区临城街道百川道11号A11号楼1001室</span>
    </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'index',
  data () {
    return {
    }
  },
  created(){

  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#indexpage{
  width: 100%;
  min-height: 1500px;
  position: absolute;
  top: 38px;
  left: 0;
  text-align: center;
  color: #fff;
  background-image: url(https://i.loli.net/2017/12/18/5a37bc8e02965.jpg);
  background-size: 100% 100%; 
  .error{
    font-family: "华文细黑", "Microsoft YaHei", "微软雅黑";
    font-size: 50px;
    margin: 200px auto;
  }
  // .info{
  //   font-family: "华文细黑", "Microsoft YaHei", "微软雅黑";
  //   font-size: 30px;
  // }
  .info{
    width: 100%;
    position: absolute;
    bottom: 20px;
    .more{
      width: 100%;
      text-align: center;
      font-family: "华文细黑", "Microsoft YaHei", "微软雅黑";
      // position: absolute;
      margin-bottom: 15px;
    }
  }
}
</style>