<template>
  <div class="homePage">
    <div class="heade">
      <ul class="ul">
        <li class="picture">
          <img src alt />
        </li>
        <li class="two">
          <div style="color:orange;fontSize:14px;">常用功能快速入口（支持用户个性化配置）</div>
          <div class="tab">
            <span>菜单一</span>
            <span>菜单二</span>
            <span>菜单三</span>
            <span>菜单四</span>
            <span>菜单五</span>
          </div>
        </li>
        <li class="three">
          <select name id>
            <option value="通州项目">通州项目</option>
            <option value>丰台项目</option>
            <option value>房山项目</option>
            <option value>东城项目</option>
            <option value>朝阳项目</option>
          </select>
          <span>当前用户：张涛</span>
          <span class="help">帮助</span>
        </li>
      </ul>
    </div>
    <main class="main">
      <span class="bj"></span>
      <h1>建元城投智慧管廊运营管理平台</h1>
      <div class="login">
        <van-form @submit="onSubmit">
          <van-field
            v-model="username"
            name="用户名"
            label="用户名："
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密    码："
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <div>
            <button class="ok">登录</button>
            <button class="forgetpwd">忘记密码</button>
          </div>
        </van-form>
      </div>
    </main>
    <footer class="footer">
        <ol class="ol">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ol>
    </footer>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
  },
};
</script>

<style lang='scss' scoped>
.homePage {
  width: 98%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  .heade {
    width: 100%;
    height: 70px;
    // margin: 0 auto;
    // line-height: 70px;

    .ul {
      display: flex;
      width: 100%;
      height: 100%;
      li {
        flex: 1;
        margin-left: 15px;
        background: #ccc;
      }
    }
    .two {
      padding-top: 8px;
      text-align: center;
      line-height: 28px;
      font-size: 14px;
      .tab {
        display: flex;
        span {
          flex: 1;
        }
      }
    }
    .three {
      line-height: 70px;
      select {
        margin-left: 10px;
      }
      .help {
        background: #dddd;
        float: right;
        line-height: normal;
        margin-top: 24px;
      }
    }
  }
  .main {
    width: 98%;
    flex: 1;
    margin-left: 15px;
    height: 100%;
    margin-top: 50px;
    h1 {
      float: right;
    }
    .bj{
      // width: 100%;
      // height: 100%;
      background:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597729387433&di=61376c272dea93203c5fae6c67547014&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F00%2F09%2F47%2F77562eea631a31c.jpg) no-repeat 5px 5px ;
      background-size: cover;
      opacity:0.2;
      display: flex;
    }
    .login {
      float: right;
      width: 400px;
      height: 160px;
      border: 1px solid #ccc;
      margin: 125px -414px 80px;
      .ok {
        width: 85px;
        height: 30px;
        text-align: center;
        margin: 15px 5px 10px 90px;
      }
      .forgetpwd {
        width: 85px;
        height: 30px;
        text-align: center;
      }
    }
  }
  .footer{
    width: 98%;
    height: 120px;
    background: gainsboro;
    margin-left: 15px;
  }
  .ol{
    display: flex;
    li{
      margin: 15px 10px 10px 10px;
      width: 30px;
      height: 90px;
      border: 1px solid red;
      flex:1;
      text-align: center;
      align-items: center;
    }
  }
}
</style>