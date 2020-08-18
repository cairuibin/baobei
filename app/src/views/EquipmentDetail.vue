<template>
  <div class="task_detail">
    <HeaderNav />
    <el-row class="task_center" :gutter="20">
      <el-col class="task_center_item mation_wrap" :span="15">
        <div class="mation" v-for="v in 3" :key="v">
          设备名称：
          <span>xxx</span>
        </div>
      </el-col>
      <el-col class="task_center_item mation_button" :span="6">
        <el-button type="primary" plain v-for="v in 3" :key="v">主要按钮</el-button>
      </el-col>
    </el-row>
    <el-row class="task_wrap" :gutter="20">
      <el-col class="task_wrap_item" :span="16"></el-col>
      <el-col class="task_wrap_item" :span="7"></el-col>
    </el-row>
    <el-row class="task_center" :gutter="20">
      <el-col class="task_center_item mation_wrap" :span="17">
        <div class="mation">设备名称维护记录</div>
      </el-col>
      <el-col class="task_center_item mation_pic" :span="6">
         <div class="mation_pic_text">巡检照片设备名称维护记录</div>
      </el-col>
    </el-row>
    <el-row class="task_wrap" :gutter="20">
      <el-col class="task_wrap_item task_table_wrap" :span="16">
        <el-table :data="tableData" style="width: 100%" border>
          <el-table-column prop="date" label="序号" width="180"></el-table-column>
          <el-table-column prop="name" label="设备编号" width="180"></el-table-column>
          <el-table-column prop="name" label="设备名称"></el-table-column>
          <el-table-column prop="name" label="所属类别"></el-table-column>
          <el-table-column prop="date" label="设备详情"></el-table-column>
        </el-table>
      </el-col>
      <el-col class="task_wrap_item" :span="7">
        <img class="xunjian_pic" src="../assets/1.png" alt />
      </el-col>
    </el-row>
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
.task_detail {
  padding: 20px;
  width: 100%;
  height: 100%;
}
.task_wrap {
  width: 100%;
  height: 35%;
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
.pagination_wrap {
  text-align: right;
}
.task_center {
  width: 100%;
  height: 50px;
}
.mation_wrap {
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.mation {
  padding-left: 20px;
  font-size: 20px;
  font-weight: bold;
}
.mation_button {
  display: flex;
  justify-content: space-around;
  margin-left: 10%;
  align-items: center;
}
.task_table_wrap {
  display: flex;
  align-items: center;
}
.xunjian_pic {
  display: block;
  width: 100%;
  height: 100%;
}
.mation_pic_text{
  line-height: 45px;text-align: left;font-size: 20px;font-weight: bold;
}
</style>