<template>
  <div class="task_center">
    <HeaderNav />
    <el-row class="task_wrap" :gutter="20">
      <el-col class="task_wrap_item" :span="16"></el-col>
      <el-col class="task_wrap_item" :span="7"></el-col>
    </el-row>

    <div class="text_title">设备列表</div>
    <div class="table_wrap">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="序号" width="180"></el-table-column>
        <el-table-column prop="name" label="设备编号" width="180"></el-table-column>
        <el-table-column prop="name" label="设备名称"></el-table-column>
        <el-table-column prop="name" label="所属类别"></el-table-column>
        <el-table-column prop="address" label="设备位置"></el-table-column>
        <el-table-column prop="date" label="维护日期"></el-table-column>
        <el-table-column prop="date" label="下次维护日期"></el-table-column>
        <el-table-column prop="date" label="设备详情"></el-table-column>
      </el-table>
      
    </div>
     <div class="pagination_wrap">
       <el-pagination
    
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 15, 20, 30]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length">
    </el-pagination>
     </div>
  </div>
</template>

<script>
import HeaderNav from "../components/header_nav";
import { mapState } from "vuex";
export default {
  components: {
    HeaderNav,
  },
  computed: {
    ...mapState(["tableData"]),
  },
};
</script>

<style lang='scss' scoped>
.task_center {
  padding: 20px;
  width: 100%;
  height: 100%;
}
.task_wrap {
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: space-around;
}
.task_wrap_item {
  height: 100%;
  background: #eee;
}
.text_title {
  text-align: left;
  padding-left: 15px;
  font-size: 20px;
}
.table_wrap {
  width: 100%;
  height: 37%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.pagination_wrap{
 text-align: right;
}
</style>