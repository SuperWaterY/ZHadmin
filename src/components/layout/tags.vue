<template>
  <div id="tags">
            <el-tag   
              :hit= "true"
              :key="tag.name"
              v-for="tag in dynamicTags"
              closable
              :color = "tag.label===routename?'#fff':'#eee'"              
              :disable-transitions="false"
              @close="handleClose(tag)">
              <router-link :to="tag.path" tag="span" >{{tag.name}}</router-link>              
            </el-tag>
  </div>
</template>
 
<script>

let navname = {
    partinfo: {name: '部门信息',
    path: '/panel/partinfo'},

    datainfo:{name: '数据概览',
    path: '/panel/datainfo'},

    sysdesign:{name: '系统设计',
    path: '/panel/sysdesign'},

    password: {name: '密码修改',
    path: '/panel/password'},

    toinfo: {name: '拟建信息系统',
    path: '/myassets/infosys/toinfo'},

    infoing: {name: '在建信息系统',
    path: '/myassets/infosys/infoing'},

    infoed: {name: '已建信息系统',
    path: '/myassets/infosys/infoed'},

    inforef: {name: '信息资源',
    path: '/myassets/infosys/inforef'},

    infoitem: {name: '信息项',
    path: '/myassets/infosys/infoitem'}
}

export default {
  name: 'tags',
  data(){
    return{
      dynamicTags: []
    }
  },
computed: {
    routename() {
      return this.$route.name 
    }
  },
  methods:{   
    Addtag(){
      let tag = {} 
      tag.path = this.$route.path
      tag.label = this.$route.name
      tag.name = this.$route.meta.title
      this.dynamicTags.push(tag)
      this.dynamicTags = this.Unique(this.dynamicTags)
    },
    handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },
    Unique(arr){
      let arr1 = arr.map( (item) =>  JSON.stringify(item) )
      arr1 = [... new Set(arr1)]
      arr1 = arr1.map( (item) =>  JSON.parse(item)  )
      return arr1
    }
  },
  watch:{
    $route(){
      this.Addtag()
    }
  }
}
</script>

<style scoped lang="less">
@keyframes tags {
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  50% {
    background-color: #666;
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
#tags{
  margin-top: 5px;
  padding-bottom: 5px;
  border-bottom: 1px solid #fff;
  font-family:  "华文细黑", "Microsoft YaHei", "微软雅黑";
  .el-tag {
    margin-left: 10px;
    border-radius: 0px;
    border: 1px solid #bbb;
    cursor: pointer;
    color: #333;
    animation: tags 0.7s ease-out  forwards;
  }
}

</style>
