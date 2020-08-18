<template>
  <div class="number">
   <HeaderNav />
    <el-container>
     
      <el-container class="wx_container">
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HeaderNav from '../components/header_nav'
export default {
  components:{
    HeaderNav
  }
};
</script>

<style lang="scss">

.number {
  width: 100%;
  height: 100%;
}
.wx_container{
  width: 100%;height: calc(100vh - 100px);
}
.el-header,
.el-footer {
  background: greenyellow;
  height: 160px;
  color: #333;
  text-align: center;
  line-height: 60px;
  width: 100%;
}

.el-aside {
  background-color: #d3dce6;
  
  // color: #333;
  // text-align: center;
  // line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  // color: #333;
  // text-align: center;
  // line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>