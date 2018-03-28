<template>
  <div>
      <div class="cloud">
        <div id="wordcloud1" class="wordcloud"></div>
        <div id="wordcloud2" class="wordcloud"></div>
    </div>
    
  </div>
</template>

<script>
  import echarts from 'echarts'
  import 'echarts-wordcloud'

  let options = {
    title: {
        text: '年度关键词'
    },
      toolbox: {
        feature: {
          saveAsImage: {},
          dataView: {}
        },
        right: 20,
        top: 20
      },
      series: [{
        type: 'wordCloud',
        shape: 'cardioid',
        // shape: 'cardioid',
        // shape: 'pentagon',
        // shape: 'circle',
        left: 'center',
        top: 30,
        width: '75%',
        height: '80%',
        right: null,
        bottom: null,
        sizeRange: [12, 75],
        rotationRange: [-90, 90],
        rotationStep: 45,
        gridSize: 8,
        textStyle: {
          normal: {
            fontFamily: 'Microsoft Yahei',
            fontWeight: 'bold',
            color: function() {
              return 'rgb(' + [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
              ].join(',') + ')'
            }
          },
          emphasis: {
            shadowBlur: 10,
            shadowColor: '#333'
          }
        },
        data: [
              { "name": "长峙岛", "value": 1 },
              { "name": "新城大桥", "value": 1 },
              { "name": "杨咏曼图书馆", "value": 1 },
              { "name": "揽月台", "value": 1 },
              { "name": "揽月湖", "value": 2 },
              { "name": "恒尊体育场", "value": 2 },
              { "name": "杨存国报告厅", "value": 2 },
              { "name": "莲池咖啡", "value": 2 },
              { "name": "紫薇山公园", "value": 2 },
              { "name": "朱家尖大桥", "value": 3 },
              { "name": "海科楼", "value": 3 },
              { "name": "H125A", "value": 3 },
              { "name": "海洋科学城", "value": 8 },
              { "name": "鸡公坑", "value": 9 }
        ]
      }]
    }

  export default {
    name: 'wordcloud',
    data() {
      return {
        wordcloud: null
      };
    },
    methods: {
      drawWord (id) {
        this.wordcloud = echarts.init(document.getElementById(id));
        this.wordcloud.setOption(options)
      }
    },
    mounted() {
        this.drawWord('wordcloud1')
        this.drawWord('wordcloud2')
    //   this.$nextTick(function() {
    //     this.drawWord('wordcloud');
    //     var that = this;
    //     var resizeTimer = null;
    //     window.onresize = function() {
    //       if (resizeTimer) clearTimeout(resizeTimer);
    //       resizeTimer = setTimeout(function() {
    //         that.drawWord('wordcloud');
    //       }, 100);
    //     }
    //   })
    }
  }
</script>

<style scoped>
.cloud{
    border-top: 10px solid #eee;
    position: relative;
    display: flex;
}
  .wordcloud {
    /* max-width: 800px;*/
    flex-grow: 1;
    min-width: 600px; 
    height: 400px;
    background: #fff;
 
    position: relative;
    /* position: relative;
    left: 50%;
    width: 90%;
    height: 600px;
    margin-left: -45%;
    box-shadow: 0 0 10px #726dd1;
    border-radius: 10px; */
  }   
#wordcloud1{
    margin-right: 5px;
}
#wordcloud2{
    margin-left: 5px;
}
</style>