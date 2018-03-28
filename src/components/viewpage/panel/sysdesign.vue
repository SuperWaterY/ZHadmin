<template>
  <div class="">
    <div class="bigdata">
      <div class="dataitem">
        <span class="icon" style="background:#12b2b4"><i class="fa fa-cubes fa-3x"></i></span>
        <p class="textinfo">信息系统总数 : <span class="cny">337</span> 个</p>
      </div>
      <div class="dataitem">
        <span class="icon" style="background:#ec9d19"><i class="fa fa-database fa-3x"></i></span>
        <p class="textinfo">系统年度运维总金额总数 : <span class="cny">100</span> 亿元</p>
      </div>
      <div class="dataitem">
        <span class="icon" style="background:#ed5565"><i class="fa fa-bar-chart fa-3x"></i></span>
        <p class="textinfo">预估年度运维总金额 : <span class="cny">101</span> 亿元</p>
      </div>
    </div>
    <div class="search">
      <el-input placeholder="请输入内容" v-model="input" clearable> </el-input>
      <el-button type="primary" ><i class="fa fa-search"></i> 搜索</el-button>
    </div>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="6"  v-for=" (item, index) in content " :key="index">
        <div class="grid-content bg-purple">
          <p class="title">{{item.title}}</p>
          <p class="partname">单位名称：<span>{{item.partname}}</span> </p>
          <p class="fund">年度运维金额： <span> {{item.fund}} </span>万元</p>
        </div>
      </el-col>
    </el-row>

    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagination.currentPage"
        :page-sizes="pagination.pageSizes"
        :page-size="pagination.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalCount">
      </el-pagination>
    </div>
  </div>
</template>

<script>

export default {
  name: 'sysdesign',
  data () {
    return {
      input: '',
      pagination:{
        pageSizes: [5,10,15,20],
        pageSize: 10,
        display: 'total, sizes, prev, pager, next, jumper',     
        currentPage: 1
      },
      totalCount: 100,
      content: [
        {title: '港口安全监督工作信息管理系统',partname: '珠海市交通运输局',fund: '45'},
        {title: '珠海市综合公共服务平台',partname: '交通规划研究与信息中心',fund: '28'},
        {title: '交通信息综合服务平台',partname: '珠海市西部城区开发建设局',fund: '58'},
        {title: '珠海市建设业务管理系统',partname: '珠海市海洋农业和水务局',fund: '42'},
        {title: '珠海市综合公共服务平台',partname: '交通规划研究与信息中心',fund: '28'},
        {title: '交通信息综合服务平台',partname: '珠海市西部城区开发建设局',fund: '58'},
        {title: '珠海市建设业务管理系统',partname: '珠海市海洋农业和水务局',fund: '42'},
        {title: '珠海市综合公共服务平台',partname: '交通规划研究与信息中心',fund: '28'},
        {title: '交通信息综合服务平台',partname: '珠海市西部城区开发建设局',fund: '58'},
        {title: '珠海市建设业务管理系统',partname: '珠海市海洋农业和水务局',fund: '42'},
        {title: '珠海市电子公文协同处理系统',partname: '交通规划研究与信息中心',fund: '28'},
        {title: 'FE办公自动化综合平台',partname: '珠海市国土资源局',fund: '48'}
      ]
    }
  },
  methods: {
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`)
        // this.pagination.pageSize = val
        // this.tableData.perpage =val
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`)
        // this.pagination.currentPage = val
        // this.tableData.nowpage =val
      }
  }
}
</script>
<style scope lang="less">
  .bigdata{
    margin: 10px 0;
    .dataitem{
      margin: 10px 0;
      padding-right: 20px;
      display: inline-block;
      height: 80px;
      background: #fff;
      line-height: 80px;
      margin-right: 10px;
      border-radius: 5px;
      .textinfo{
        float: right;
        line-height: 80px;
        vertical-align: top;
        .cny{
          font-size: 40px;
          color: #d31f07
        }
      }
      .icon{
        display: inline-block;
        text-align: center;
        line-height: 60px;
        height: 80px;
        width: 80px;
        border-radius: 5px 0 0 5px;
        margin-right: 10px;
        .fa{
          line-height: 80px;
        }
      }
    }
  }
  .search{
    margin-bottom: 10px;
    .el-input{
      display: inline-block;
      width: 250px !important;
    }
  }
  
  .el-col {
    border-radius: 4px;
  }
  .bg-purple {
    background: #fff;
  }
  .pagination{
      padding: 10px;
      text-align: center;
    }
  .grid-content {
    border-radius: 4px;
    min-height: 140px;
    margin-bottom: 20px;
    .title{
      height: 60px;
      font-weight: bold;
      color: #333;
      font-size: 18px;
      text-align: center;
      line-height: 60px;
      background: #ec9d19;
    }
    .partname{
      height: 39px;
      padding-left: 12px;
      line-height: 39px;
      border-bottom: 1px solid #bbb;
      color: #888;
      font-size: 15px;
      span{
        color: #12b2b4;
        font-size: 18px;
        font-weight: bold;
      }
    }
    .fund{
      height: 60px;
      padding-left: 12px;
      line-height: 60px;
      color: #888;
      font-size: 15px;
      span{
        color: #d31f07;
        font-size: 30px;
        font-weight: bold;
      }
    }

  }
</style>
