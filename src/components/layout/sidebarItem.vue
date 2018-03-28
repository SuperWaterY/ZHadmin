<template>
  <div class="">
      <template v-for="item in routes" v-if="!item.hidden">

      <router-link v-if="item.children.length===1 && !item.children[0].children" :to="item.path+'/'+item.children[0].path" :key="item.children[0].name">
        <el-menu-item :index="item.path+'/'+item.children[0].path" >
          <!-- <i v-if="item.children[0].meta&&item.children[0].meta.icon" :class="item.children[0].meta.icon"></i> -->
          <span v-if="item.children[0].meta&&item.children[0].meta.title">{{item.children[0].meta.title}}</span>
        </el-menu-item>
      </router-link>

      <el-submenu v-else :index="item.name||item.path" :key="item.name">
        <template slot="title">
          <i v-if="item.meta&&item.meta.icon" :class="item.meta.icon"></i>
          <span v-if="item.meta&&item.meta.title">{{item.meta.title}}</span>
        </template>

        <template v-for="child in item.children" v-if="!child.hidden">
          <sidebar-item   v-if="child.children&&child.children.length>1" :routes="[child]" :key="child.path"></sidebar-item>

          <router-link  :to="item.path+'/'+child.path" :key="child.name">
            <el-menu-item :index="item.path+'/'+child.path">
              <i v-if="child.meta&&child.meta.icon" :class="child.meta.icon"></i>
              <span v-if="child.meta&&child.meta.title">{{child.meta.title}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>

    </template>

      <!-- <el-submenu index="1">
        <template slot="title">
          <i class="fa fa-th-list"></i>
          <span>我的面板</span>
        </template>
          
          <el-menu-item index="1-1">
          <router-link to="/panel/partinfo" tag="div" ><i class="fa fa-calendar"></i><span>部门信息</span>
          </router-link>
          </el-menu-item>

          <el-menu-item index="1-2">
          <router-link to="/panel/datainfo" tag="div"><i class="fa fa-area-chart"></i><span>数据概览</span>
          </router-link>
          </el-menu-item>

          <el-menu-item index="1-3">
          <router-link to="/panel/sysdesign" tag="div"><i class="fa fa-pie-chart"></i><span>系统设计</span>
          </router-link>
          </el-menu-item>

          <el-menu-item index="1-4">
          <router-link to="/panel/password" tag="div"><i class="fa fa-unlock"></i><span>密码修改</span>
          </router-link>
          </el-menu-item>

      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="fa fa-cny"></i>
          <span>我的资产</span>
        </template>
        <el-submenu index="2-1">
          <template slot="title"><i class="fa fa-th-large"></i>信息系统</template>

          <el-menu-item index="2-1-1">
            <router-link to="/myassets/infosys/toinfo" tag="div"><i class="fa fa-th-large"></i><span>拟建信息系统</span>
            </router-link>
          </el-menu-item>

          <el-menu-item index="2-1-2">
            <router-link to="/myassets/infosys/infoing" tag="div"><i class="fa fa-th-large"></i><span>在建信息系统</span>
            </router-link>
          </el-menu-item>

          <el-menu-item index="2-1-3">
            <router-link to="/myassets/infosys/infoed" tag="div"><i class="fa fa-th-large"></i><span>已建信息系统</span>
            </router-link>
          </el-menu-item>
        </el-submenu>

        <el-menu-item index="2-2">
            <router-link to="/myassets/inforef" tag="div"><i class="fa fa-th-large"></i><span>信息资源</span>
            </router-link>
          </el-menu-item>
        <el-menu-item index="2-3">
            <router-link to="/myassets/infoitem" tag="div"><i class="fa fa-th-large"></i><span>信息项</span>
            </router-link>
          </el-menu-item>

      </el-submenu> -->


  </div>
</template>

<script>

export default {
  name: 'sidebarItem',
  data () {
    return {
     
    }
  },
  props: {
    routes: {
      type: Array
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

</style>