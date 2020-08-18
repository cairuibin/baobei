<template>
  <div class="fir_w">
    <div class="first_wrap">
      <el-row type="flex" class="row-bg">
        <el-col :span="3">
          <img class="logo-png" src="../assets/1.png" alt />
        </el-col>
        <el-col :span="4" class="getway_for">
          <div class="text_bold">常用功能快速入口（一些常用功能）</div>
          <div>
            <el-button
              size="small"
              plan
              v-for="(item,index) in 5"
              :key="index"
              type="primary"
            >{{'常用按钮'}}</el-button>
          </div>
        </el-col>
        <el-col :span="8" class="right_box">
          <div class="item">
            <el-select v-model="value" clearable placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="item">当前用户：{{'张青'}}</div>
          <div class="item">
            <el-button type="primary" plain>主要按钮</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="main">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm form_wxy"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model.number="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密 码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
          <el-button type="primary">忘记密码</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="footer">
      <el-card class="box-card">
        <img class="img_item" v-for="o in 5" :key="o" src="../assets/1.png" alt />
      </el-card>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      setTimeout(() => {
        callback();
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };

    return {
      ruleForm: {
        pass: "",
        username: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        username: [{ validator: checkAge, trigger: "blur" }],
      },
    };
  },
  computed: {
    ...mapState(["menulist", "options", "value"]),
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="scss" scoped>
.fir_w {
  width: 100%;
  height: 100%;
  padding: 20px;
  background: url("../assets/1.png");
  background-size: 100% 100%;
}
.main {
  width: 100%;
  height: 60%;
}
.first_wrap {
  padding: 5px;
  padding-top: 0;
}
.row-bg {
  padding: 10px 25px;
  background-color: #fff;
  width: 100%;
  height: 95px;
  border: 1px solid #444;
}
.logo-png {
  width: 100%;
  height: 100%;
}

.el-col {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.getway_for {
  width: 48%;
  display: flex;
  justify-content: space-around;
  background: #eee;
  margin: 0 2%;
  padding-bottom: 10px;
  height: 75px;
  flex-wrap: wrap;
  .text_bold {
    min-width: 500px;
    text-align: center;
    line-height: 28px;
    font-size: 16px;
    color: yellowgreen;
  }
}
.form_wxy {
  width: 400px;
  position: absolute;
  right: 10%;
  top: 30%;
  background: #fff;
  padding-top: 40px;
  padding-right: 60px;
  padding-bottom: 10px;
  border-radius: 12px;
}
.el-form-item {
  margin-bottom: 36px;
}
.footer {
  width: 100%;
  height: 27%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.img_item{
  padding: 0 10px;
  width: 20%;font-display: block;
}
</style>