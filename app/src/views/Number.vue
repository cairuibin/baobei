<template>
  <div class="number">
    <HeaderNav />
    <el-row :gutter="20" class="se_wrap">
      <el-col class="se_wrap_item" :span="6">
        
      </el-col>
      <el-col class="se_wrap_item" :span="13">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col class="se_wrap_item" :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
 
    </el-row>
    <el-row :gutter="20" class="th_wrap">
      <el-col class="th_wrap_item" :span="6">
        
      </el-col>
      <el-col class="th_wrap_item" :span="13">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col class="th_wrap_item" :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
 
    </el-row>
  </div>
</template>

<script>
import HeaderNav from "../components/header_nav";
export default {
  components: {
    HeaderNav,
  },
};
</script>

<style lang="scss" scoped>
.number {
  width: 100%;
  height: 100%;
}
.se_wrap{
  width: 100%;
  height: 53%;
  display: flex;justify-content: space-around;
}
.th_wrap{
  margin-top: 20px;
   width: 100%; display: flex;justify-content: space-around;
  height: 30%;
}
.se_wrap_item,.th_wrap_item{
  height: 100%;background:#eee;
}

</style>