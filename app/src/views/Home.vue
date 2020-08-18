 <template>
  <div class="home">
    <div class="header">
      <router-link
        v-for="(item,index) in list"
        :key="index"
        active-class="active"
        :to="item.path"
        tag="span"
      >
        <span>{{item.title}}</span>
      </router-link>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      list: [
        {
          title: "首页",
          path: "/First",
        },
        {
          title: "数字大屏",
          path: "/Number",
        },
        {
          title: "任务中心",
          path: "/TaskCenter",
        },
        {
          title: "设备中心",
          path: "/EquipmentCenter",
        },
        {
          title: "设备详情",
          path: "/EquipmentDetail",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  width: 100%;
  display: flex;
  line-height: 46px;
  height: 46px;
  span {
    flex: 1;
    text-align: center;
  }
}
.main {
  flex: 1;
}
.active {
  color: red;
}
</style>
 
 
 
 
