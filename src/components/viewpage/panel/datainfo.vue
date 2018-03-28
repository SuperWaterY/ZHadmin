<template>
  <div class="datainfo">
    <div id="chart1" class="chart1"></div>
    <wordcloud/>
  </div>
</template>

<script>
import Echarts from 'echarts'
import wordcloud from '@/components/echarts/wordcloud'

var xAxisData = [];
var data1 = [];
var data2 = [];
for (var i = 0; i < 20; i++) {
    xAxisData.push('类目' + i);
    data1.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5);
    data2.push((Math.cos(i / 5) * (i / 5 -10) + i / 6) * 5);
}
let options = {
  title: {
      text: '部门金融资产分布'
  },
  legend: {
      data: ['bar', 'bar2'],
      align: 'left'
  },
  toolbox: {
      // y: 'bottom',
      feature: {
          magicType: {
              type: ['stack', 'tiled']
          },
          dataView: {},
          saveAsImage: {
              pixelRatio: 2
          }
      }
  },
  tooltip: {},
  xAxis: {
      data: xAxisData,
      silent: false,
      splitLine: {
          show: false
      }
  },
  yAxis: {
  },
  series: [{
      name: 'bar',
      type: 'bar',
      data: data1,
      animationDelay: function (idx) {
          return idx * 10;
      }
  }, {
      name: 'bar2',
      type: 'bar',
      data: data2,
      animationDelay: function (idx) {
          return idx * 10 + 100;
      }
  }],
  animationEasing: 'elasticOut',
  animationDelayUpdate: function (idx) {
      return idx * 5;
  }
}


export default {
  name: 'datainfo',
  components: {
    wordcloud
  },
  data () {
    return {
      chart1: null
    }
  },
  methods: {
    draw(id,options){
      this.chart1 = Echarts.init(document.getElementById(id))
      this.chart1.setOption(options)
    }
    // draw2(){
    //   this.chart2 = Echarts.init(document.getElementById('chart2'))
    //   this.chart2.setOption(options2)
    // }
  },
  mounted(){
    this.draw('chart1', options)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.datainfo{
  position: relative;
}
.chart1 {
  height: 400px;
  background: #fff;
}

</style>