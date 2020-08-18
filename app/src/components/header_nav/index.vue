<template>
  <el-row type="flex" class="row-bg">
    <el-col :span="4">
      <img class="logo-png" src="../../assets/1.png" alt />
    </el-col>
    <el-col :span="2"></el-col>
    <el-col  :span="18">
      <el-button v-for="(item,index) in menulist" :key="index" type="primary">{{item}}{{index}}</el-button>
    </el-col>
  </el-row>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["menulist"]),
  },
};
</script>

<style lang="scss">
.row-bg {
  padding: 10px;
  background-color: #fff;
  width: 100%;
  height: 75px;
  border: 1px solid #444;
}
.logo-png {
  width: 100%;
  height: 100%;
}
.el-col{
    display: flex;justify-content: space-around;align-items: center;
}
</style>