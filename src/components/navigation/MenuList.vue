<template>
  <div :class="['nav-menu-group', {isSolid: $route.params.isSolid}]">
    <ul>
      <router-link
        :class="[{active: activeIndex === idx}]"
        :to="item.route"
        v-for="(item, idx) in menuList"
        :key="idx"
        tag="li"
        @click.native="SET_ACTIVEINDEX(idx)"
      >{{item.text}}</router-link>
    </ul>
    <el-dropdown size="medium" class="menu-tab" @command="navigate">
      <span class="el-dropdown-link">
        <i class="el-icon-s-unfold"></i>
      </span>
      <el-dropdown-menu class="menu-tab-list" slot="dropdown">
        <el-dropdown-item
          v-for="( item, idx) in menuList"
          :key="idx"
          :command="item.route"
        >{{item.text}}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "NavMenu",
  data() {
    return {
      menuList: [
        {
          text: "Home",
          route: "/"
        },
        {
          text: "Our Trees",
          route: "/tree"
        },
        {
          text: "Our Sensor",
          route: "/sensor"
        },
        {
          text: "Database",
          route: "/database"
        },
        {
          text: "Resource",
          route: "/resource"
        },
        {
          text: "About Us",
          route: "/aboutus"
        }
      ]
    };
  },
  methods: {
    ...mapMutations("navigation", ["SET_ACTIVEINDEX"]),
    navigate(route, idx) {
      if (idx) this.SET_ACTIVEINDEX(idx);
      this.$router.push({ path: route });
    }
  },
  computed: {
    ...mapState("navigation", ["activeIndex"])
  }
};
</script>

<style lang="less" scoped>
.nav-menu-group {
  display: flex;
  align-items: center;
  height: 100%;

  ul {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      padding: 5px;
      margin: 0 8px;
      border-bottom: 2px solid rgba(0, 0, 0, 0);

      cursor: pointer;
      color: #fff;
      font-size: 14px;
      transition: all 0.6s;
    }

    li:hover {
      border-bottom: 2px solid #00c935;
    }
    li.active {
      border-bottom: 2px solid #00c935;
    }
  }

  .menu-tab {
    display: none;
  }
}

@media only screen and (max-width: 48em) {
  .nav-menu-group {
    ul {
      display: none;
    }

    .menu-tab {
      margin-left: 1.5rem !important;
      margin-right: 1.5rem !important;
      height: 3rem !important;

      display: block !important;
      color: #fff;
      font-size: 2.4rem;
    }
  }
}
</style>
